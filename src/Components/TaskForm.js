// TaskForm.js
import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const StyledInput = styled(Input)(
  ({ theme }) => `
    .${inputClasses.input} {
      width: 280px;
      max-width: 100%;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      &:hover {
        border-color: ${blue[400]};
      }
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
    }
  `,
);

const StyledButton = styled(Button)`
  border-radius: 8px;
  margin-left: 10px;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TaskForm = ({ onAddTask, currentTask }) => {
  
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    setTask(currentTask);
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <Container>
      <FormControl component="form" style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'center', flexDirection: "row", padding: '0 10px' }} onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Enter your Task..."
          onChange={handleChange}
          value={task}
        />
        <StyledButton variant="outlined" type="submit">{currentTask ? 'Update' : 'Submit'}</StyledButton>
      </FormControl>
    </Container>
  );
};

export default TaskForm;
