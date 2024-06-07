// TaskList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';

const Container = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 20px;
`
const StyledList = styled("List")`
  width: 100%;
  max-width: 600px;
  backgroundColor: theme.palette.background.paper,
  margin-top: 2px;
  max-height: calc(100vh - 9rem); 
  overflow-y: auto; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  border-radius: 8px; 

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; 


  @media (max-width: 360px) {
    max-width: 360px;
    padding: 0 10px; 
  }
`;


const TaskList = ({ tasks, onToggleTask, onRemoveTask, onEditTask }) => {
  return (
    <Container>
   <StyledList>
      {tasks.map((task, index) => {
        const labelId = `checkbox-list-label-${index}`;
          return (
          <ListItem
            key={index}
            secondaryAction={
              <>
               <IconButton edge="end" aria-label="edit" style={{marginRight: "2px" }} onClick={() => onEditTask(index)}>
                    <EditIcon />
                  </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemoveTask(index)}>
                <DeleteIcon />
                 </IconButton>
                 </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={() => onToggleTask(index)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.text} 
               primaryTypographyProps={{
                style: {
                  whiteSpace: "normal",
                  wordBreak: 'break-word',
                  flexGrow: 1,
                  minWidth: 0,
                  marginRight: '60px' 
                }
              }}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </StyledList>
    </Container>
  );
};

export default TaskList;
