import React, { FC, useContext } from "react"
import TodoProvider, { TodoContext } from "../../context/TodoProvider";
import styled from "styled-components"
import Button from "../Buttons/Button/Button";

type Props = {
  
}

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddTaskElement = styled.div`
  margin: .5rem 0;
  flex: 1;
`;

const AddTaskInput = styled.input`
  padding: .5rem 1rem;
  width: fill;

  outline: none;
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.2);
`;

export const AddTask: React.FC<Props> = () => {
  const [task, setTask] = React.useState<ITask | {}>()

  const todoCtx = useContext(TodoContext);

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const submit = (e: React.FormEvent) => {
      e.preventDefault();
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (todoCtx) todoCtx.saveTask(task)
  }

  const updateTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (todoCtx) todoCtx.editTask(task)
  }

  return <>
      <AddTaskForm onSubmit={submit} className="Add-task">
        <AddTaskElement>
        <AddTaskInput
            type="text"
            id="title"
            placeholder="Title"
            onChange={handleTaskData}
        />
        </AddTaskElement>
        <AddTaskElement>
        <AddTaskInput
            type="text"
            id="body"
            placeholder="Description"
            onChange={handleTaskData}
        />
        </AddTaskElement>
    </AddTaskForm>

    <Button onClick={(e) => updateTask(e)} disabled={!task ? true : false} id="edit">
        Edit task
    </Button>
    <Button onClick={(e) => addNewTask(e)} disabled={!task ? true : false} id="save">
        Add task
    </Button>
  </>
}