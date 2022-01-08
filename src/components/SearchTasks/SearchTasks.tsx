import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setSearchedTask } from "src/store/actionCreator";
import styled from "styled-components";
import Button from "../Buttons/Button/Button";

const Container = styled.div`
    display: fleX;
    flex-direction: column;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    color: ${props => props.theme.mainColor};
    padding: 1rem;
    border-left 3px solid ${props => props.theme.mainColor};
    font-size: 1rem;
`

const SearchLabel = styled.label`
    text-align: left;
    color: ${props => props.theme.mainColor};
`;

// TODO: implement it
const SearchToggle = styled(Button)`
    color: ${props => props.theme.mainColor};
`

const id: string = 'tasks-search';
export const SearchTasks: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const searchValue = React.useCallback(
      (value: string) => dispatch(setSearchedTask(value)),
      [dispatch, setSearchedTask]
    );

    const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value.toString();
        searchValue(value);
    }

    return <Container>
        <SearchLabel htmlFor={id}>Search for a task...</SearchLabel>

        <SearchInput
            id={id}
            name={id}
            placeholder='Task...'
            className={id}
            type="search"
            onChange={handleSearchInput}
        />
    </Container>;
};

export default SearchTasks;