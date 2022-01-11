import React, { useContext } from "react"
import { TodoContext } from "../../context/TodoProvider";
import styled from "styled-components"
import Button from "../Buttons/Button/Button";
import { connect, useDispatch } from "react-redux";
import { finishEditingTask } from "src/store/actionCreator";
import { Dispatch } from "redux";

type Props = {
  task?: ITask
}

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: .5rem;
  border-radius: .5rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.mainColor},
    ${props => props.theme.mainColorAccent}
  );
  color: white;
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
  border-left: 3px solid white;

  color: white;
  background: transparent;
  font-size: 14px;
`;

const AddTaskDescription = styled(AddTaskElement)`

`;

const AddTaskButton = styled(Button)`
  max-width: ${props => props.theme.maxResponsiveWidth};
  width: 100%;
  margin: auto;

  margin-top: 1rem;
`

const Label = styled.label`
  // color: ${props => props.theme.mainColorAccent};
  text-align: left;
  display: block;
  margin: .5rem auto;
  max-width: ${props => props.theme.maxResponsiveWidth};
`;

const initialTask: ITask = {
  title: '',
  description: '',
  category: '',
  complete: false,
  created_at: new Date().getTime(),
  updated_at: new Date().getTime(),
};

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxResponsiveWidth};
  width: 100%;
  margin: auto;
`

const AddTaskSubmit = styled(AddTaskButton)`
  display: none;
`

const AddTaskTitle = styled.h3`
  color: ${props => props.theme.mainColor};
`;

export const AddTask: React.FC<Props> = (props) => {
  const [task, setTask] = React.useState<ITask | typeof initialTask>(
    props?.task ? props.task : initialTask
  );

  React.useEffect(() => {
    if (props?.task) setTask(props.task);
    else cleanInputs();
  }, [props?.task])

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

    return tempTask
  }

  const cleanInputs = () => {
    setTask(initialTask)
  }

  const submit = (e: React.FormEvent) => {
      e.preventDefault();

      isEditing
        ? updateTask(e)
        : addNewTask(e);
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanTask = prepareTask();
    if (todoCtx) todoCtx.saveTask({ task: cleanTask })
    cleanInputs();
  }

  const dispatch: Dispatch<any> = useDispatch()

  const stopEditing = React.useCallback(
    (payload: TaskActionPayload) => dispatch(finishEditingTask(payload)),
    [dispatch, finishEditingTask]
  );

  const updateTask = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanTask = prepareTask();
    if (todoCtx) {
      todoCtx.editTask({ task: cleanTask })
      stopEditing({ task: cleanTask });
    }
    cleanInputs();
  }

  const canSubmit = task?.title ? true : false
  const isEditing = task?.id ? true : false;

  return <Wrapper>
    <AddTaskTitle>Task form</AddTaskTitle>

      <AddTaskForm onSubmit={submit} className="Add-task">
        <AddTaskElement>
          <Label>Title</Label>
          <AddTaskInput
              type="text"
              id="title"
              placeholder="Title"
              value={task?.title}
              required={true}
              onChange={handleTaskData}
          />
        </AddTaskElement>
        <AddTaskDescription>
          <Label>Description</Label>
          <AddTaskInput
              type="text"
              id="description"
              placeholder="Description"
              value={task?.description}
              onChange={handleTaskData}
          />
        </AddTaskDescription>
        <AddTaskElement>
          <Label>Category</Label>
          <AddTaskInput
              type="text"
              id="category"
              placeholder="Home, work..."
              value={task?.category}
              onChange={handleTaskData}
          />
        </AddTaskElement>
        <AddTaskSubmit type="submit">Submit</AddTaskSubmit>
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

const mapStateToProps = (state: State) => {
  const { editedTask } = state.taskReducer;

  return { task: editedTask };
};

export default connect(mapStateToProps)(AddTask);