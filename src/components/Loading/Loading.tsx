import React from "react";
import styled from "styled-components";

const LoadingTitle = styled.h1`
    color: ${props => props.theme.mainColor}
`

export const Loading: React.FC = () => {
    return <LoadingTitle>Loading...</LoadingTitle>;
}

export default Loading;