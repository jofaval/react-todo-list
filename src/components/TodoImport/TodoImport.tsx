import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { importState } from "src/store/actionCreator";
import styled from "styled-components"
import Button from "../Buttons/Button/Button";

const Wrapper = styled.div`

`;

const Input = styled.input`
    border: none;
    border-left: 3px solid ${props => props.theme.mainColor};
    padding: .5rem;
`;

const ImportButton = styled(Button)`
    padding: .75rem !important;
    margin: 0 .5rem;
`;

const ExportButton = styled(ImportButton)`
    filter: hue-rotate(240deg);
`

/**
 * Copies a value to the clipboard
 * 
 * @param {string} value The value to be copied
 * 
 * @returns {void}
 */
const copyToClipboard = (value: string): void => {
    // If the clipboard API is not implemented, don't execute it
    if (!navigator?.clipboard.writeText) return;

    // Export the value to the clipboard
    navigator.clipboard.writeText(value);

    console.log('Copied to clipboard');
}

/**
 * Returns the raw state in string format
 * 
 * @returns {string|null} The raw redux state
 */
const getRawState = (): string|null => {
    const raw = localStorage.getItem('persist:root')

    return raw;
}

export const TodoImport: React.FC = () => {
    const [importString, setImportString] = useState('');

    const dispatch: Dispatch<any> = useDispatch()
  
    const updateState = React.useCallback(
      (payload: SettingsActionPayload) => dispatch(importState(payload)),
      [dispatch, importState]
    );

    const handleSubmit = (e: React.FormEvent|undefined = undefined) => {
        if (e) e.preventDefault();

        updateState({ importedState: importString });
    }

    const handleImportString = (e: React.FormEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value

        setImportString(value);
    }

    const exportState = (e: React.FormEvent<HTMLButtonElement>) => {
        // Get the raw state
        const rawState: string|null = getRawState();

        // If there's no state, don't try to copy it
        if (!rawState) return;

        copyToClipboard(rawState);
    }

    return <Wrapper>
        <form action="" onSubmit={handleSubmit}>
            <Input name="importString" onChange={handleImportString} value={importString} />

            <ImportButton type="submit">Import</ImportButton>
        </form>

        <ExportButton onClick={exportState}>Export</ExportButton>
    </Wrapper>
};

export default TodoImport;