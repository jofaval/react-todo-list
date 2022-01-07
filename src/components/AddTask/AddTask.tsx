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
  width: 100%;
  flex: 1;
  display: block;
`;

const AddTaskInput = styled.input`
  padding: .5rem 0 .5rem 1em;
  width: calc(100% - 1em);
  max-width: ${props => props.theme.maxResponsiveWidth};

  outline: none;
  border: none;
  border-left: 3px solid ${props => props.theme.mainColorAccent};

  color: ${props => props.theme.mainColor};
  font-size: 14px;
`;

const AddTaskButton = styled(Button)`
  max-width: ${props => props.theme.maxResponsiveWidth};
  width: 100%;
  margin: auto;

  margin-top: 1rem;
`

const Label = styled.label`
  color: ${props => props.theme.mainColorAccent};
  text-align: left;
  display: block;
  margin: .5rem auto;
  max-width: ${props => props.theme.maxResponsiveWidth};
`;

const initialTask: ITask = {
  title: '',
  description: '',
  complete: false,
};

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxResponsiveWidth};
  width: 100%;
  margin: auto;
`

export const AddTask: React.FC<Props> = () => {
  const [task, setTask] = React.useState<ITask | typeof initialTask>(initialTask)

  const todoCtx = useContext(TodoContext);

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    let value: any = e.currentTarget.value;

    setTask({
      ...task,
      [e.currentTarget.id]: value,
    })
  }

  const prepareTask = () => {
    let tempTask: ITask = task;

    for (const field in tempTask) {
      if (Object.prototype.hasOwnProperty.call(tempTask, field)) {
        let value: any = tempTask[field];

        // Trim user input only if it's a String
        if (typeof value === 'string' || value instanceof String) {
          value = value.trim();
        }

        tempTask = { ...tempTask, [field]: value };
      }
    }

    setTask(tempTask);
  }

  const cleanInputs = () => {
    setTask(initialTask)
  }

  const submit = (e: React.FormEvent) => {
      e.preventDefault();
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    prepareTask();
    if (todoCtx) todoCtx.saveTask(task)
    cleanInputs();
  }

  const updateTask = (e: React.FormEvent) => {
    e.preventDefault()
    prepareTask();
    if (todoCtx) todoCtx.editTask(task)
    cleanInputs();
  }

  const canSubmit = task?.title ? true : false
  const isEditing = task?.id ? true : false;

  return <Wrapper>
      <AddTaskForm onSubmit={submit} className="Add-task">
        <AddTaskElement>
          <Label>Title</Label>
          <AddTaskInput
              type="text"
              id="title"
              placeholder="Title"
              value={task?.title}
              onChange={handleTaskData}
          />
        </AddTaskElement>
        <AddTaskElement>
          <Label>Description</Label>
          <AddTaskInput
              type="text"
              id="description"
              placeholder="Description"
              value={task?.description}
              onChange={handleTaskData}
          />
        </AddTaskElement>
    </AddTaskForm>

    {isEditing
      ? <AddTaskButton onClick={(e) => updateTask(e)} disabled={!canSubmit} id="edit">
        Edit task
      </AddTaskButton>
      : <AddTaskButton onClick={(e) => addNewTask(e)} disabled={!canSubmit} title={!canSubmit ? 'You can\'t submit without a title' : ''} id="save">
        Add task
      </AddTaskButton>}
  </Wrapper>
}

export default AddTask;