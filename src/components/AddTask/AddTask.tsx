import React, { FC } from "react"
import styled from "styled-components"
import Button from "../Buttons/Button/Button";

type Props = {
  saveTask: (task: ITask | any) => void
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

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [task, setTask] = React.useState<ITask | {}>()

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    saveTask(task)
  }

  return (
    <AddTaskForm onSubmit={addNewTask} className="Add-task">
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

      <AddTaskElement>
        <Button disabled={task === undefined ? true : false}>
          Edit task
        </Button>
        <Button disabled={task === undefined ? true : false}>
          Add task
        </Button>
      </AddTaskElement>
    </AddTaskForm>
  )
}