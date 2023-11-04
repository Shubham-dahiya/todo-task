/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask, gettask }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);
  const [editmode, seteditmode] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`https://todo-backend-es98.onrender.com/api/tasks/${task._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const edittask = async (val) => {
    try {
      setIsLoading(true);
      await axios.put(`https://todo-backend-es98.onrender.com/api/tasks/${task._id}`, {
        title: val,
      });
      // setIsCompleted(!isCompleted);
      await gettask();
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div className={classes.checkbox} onClick={handleCheckboxClick}>
          <input type="checkbox" checked={isCompleted} disabled={isLoading} />
        </div>
        <p>{editmode ? <input type="text" value={task.title} onChange={(e) => { edittask(e.target.value); }} /> : task.title}</p>
      </td>
      <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td>{moment(task.createdAt).format('MMM Do YY')}</td>
      <td>
        <button
          type="button"
          className={classes.deleteBtn}
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </td>
      <td>
        <button
          type="button"
          className={classes.deleteBtn}
          onClick={() => seteditmode(!editmode)}
        >
          {editmode ? 'Done' : 'Edit'}
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
