import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { toggleShowComplete } from "src/store/actionCreator";

type Props = {

}

const SettingsContainer = styled.div`

`

const Checkbox = styled.input`
    
`

const CheckboxContainer = styled.div`
    padding: .5rem;
    color: ${props => props.theme.mainColor}
`;

export const TodoSettings: React.FC<Props> = () => {
    const showComplete: boolean|undefined = useSelector(
        (state: State) => state?.settingsReducer?.showComplete,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()
  
    const shouldShowComplete = React.useCallback(
      (payload: SettingsActionPayload) => dispatch(toggleShowComplete(payload)),
      [dispatch, toggleShowComplete]
    );

    const handleShowCompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        shouldShowComplete({ showComplete: e.target.checked });
    }

    return <SettingsContainer>
        <CheckboxContainer>
            <label htmlFor="show-complete">Show completed tasks?</label>
            <Checkbox type={'checkbox'} id="show-complete" onChange={handleShowCompleteChange} name="show-complete" checked={showComplete} />
        </CheckboxContainer>
    </SettingsContainer>
}

export default TodoSettings;