import React from "react"
import styled from "styled-components";

const ButtonStyle = styled.button`
    padding: .5rem 1rem;
    border-radius: ${props => props.theme.borderRadius};
    border: 2px solid black;
    background: transparent;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <ButtonStyle {...props}>{children}</ButtonStyle>
};

export default Button;