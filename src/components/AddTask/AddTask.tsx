import React, { useContext } from "react"
import { TodoContext } from "../../context/TodoProvider";
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

const initialTask: ITask = {
  title: '',
  complete: false,
};

export const AddTask: React.FC<Props> = () => {
  const [task, setTask] = React.useState<ITask | typeof initialTask>(initialTask)

  const todoCtx = useContext(TodoContext);

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const cleanInputs = () => {
    setTask(initialTask)
  }

  const submit = (e: React.FormEvent) => {
      e.preventDefault();
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (todoCtx) todoCtx.saveTask(task)
    cleanInputs();
  }

  const updateTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (todoCtx) todoCtx.editTask(task)
    cleanInputs();
  }

  const canSubmit = task?.title ? true : false

  return <>
      <AddTaskForm onSubmit={submit} className="Add-task">
        <AddTaskElement>
          <AddTaskInput
              type="text"
              id="title"
              placeholder="Title"
              value={task?.title}
              onChange={handleTaskData}
          />
        </AddTaskElement>
        <AddTaskElement>
          <AddTaskInput
              type="text"
              id="body"
              placeholder="Description"
              value={task?.title}
              onChange={handleTaskData}
          />
        </AddTaskElement>
    </AddTaskForm>

    <Button onClick={(e) => updateTask(e)} disabled={canSubmit} id="edit">
        Edit task
    </Button>
    <Button onClick={(e) => addNewTask(e)} disabled={canSubmit} id="save">
        Add task
    </Button>
  </>
}