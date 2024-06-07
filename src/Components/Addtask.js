// MainComponent.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function MainComponent() {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        return savedTasks || [];
    });
    const [editedTask, setEditedTask] = useState(() => {
        const savedEditedTask = JSON.parse(localStorage.getItem('editedTask'));
        return savedEditedTask || null;
    });
    const [currentTask, setCurrentTask] = useState(() => {
        const savedCurrentTask = localStorage.getItem('currentTask');
        return savedCurrentTask || '';
    });

useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);

    //   console.log("this is task", savedTasks)
      const savedEditedTask = JSON.parse(localStorage.getItem('editedTask'));
      if (savedEditedTask !== null) {
          setEditedTask(savedEditedTask);
        //   console.log("this is savedEdit", savedEditedTask)
        }
    
      const savedCurrentTask = localStorage.getItem('currentTask');
        if (savedCurrentTask) {
          setCurrentTask(savedCurrentTask);
        //   console.log("this is current task", savedCurrentTask)
        }
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('editedTask', JSON.stringify(editedTask));
  }, [editedTask]);

  useEffect(() => {
    localStorage.setItem('currentTask', currentTask);
  }, [currentTask]);
  
  const handleAddTask = (taskText) => {
    if (editedTask !== null) {
        const updatedTasks = [...tasks];
         updatedTasks.splice(editedTask, 0, { text: taskText, checked: false });
        setTasks(updatedTasks);
        setEditedTask(null);
        setCurrentTask('');
  } else {
    const newTasks = [...tasks, { text: taskText, checked: false }];
    setTasks(newTasks);
  }
};

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_,i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const checkTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(checkTasks);
  };

  const editTask = (index) => {
    // console.log("task is being")
    setCurrentTask(tasks[index].text);
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setEditedTask(index);

  }



  return (
    <div>
      <TaskForm onAddTask={handleAddTask} currentTask={currentTask}/>
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} onEditTask={editTask}/>
    </div>
  );
}

export default MainComponent;
