import React from "react";
import { theme } from "src/theme";
import styled, { ThemeProvider } from "styled-components";

const ErrorPageWrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    color: ${props => props.theme.mainColor};
`;

const Subtitle = styled.h2`
    color: ${props => props.theme.mainColorAccent};
`;

export const ErrorPage: React.FC = () => {
    return <ThemeProvider theme={theme}>
        <ErrorPageWrapper>
            <Title>Sorry... An error occurred and the page couldn't load</Title>
            <Subtitle>Try looking at the console for any more details, or contacting our team.</Subtitle>
        </ErrorPageWrapper>
    </ThemeProvider>;
};

export default ErrorPage;