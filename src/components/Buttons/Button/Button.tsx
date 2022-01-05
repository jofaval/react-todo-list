import React from "react"
import styled from "styled-components";

const ButtonStyle = styled.button`
    padding: .5rem 1rem;
    border-radius: ${props => props.theme.borderRadius};
    border: 2px solid ${props => props.theme.mainColor};
    color: ${props => props.theme.mainColor};
    margin: auto;
    padding: 1rem 0 !important;
    background: ${props => props.theme.bgColor};
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    transition: all .2s;

    box-shadow: 0 .5rem 1rem rgba(0,0,0,0);

    &:is(:disalbed, [disabled]) {
        transition: all 0.2s;

        opacity: .6;
    }

    &:is(:hover, :focus):not(:disabled, [disabled]) {
        transition: all 0.2s;

        background: linear-gradient(to right, ${props => props.theme.mainColor}, ${props => props.theme.mainColorAccent}) !important;
        color: ${props => props.theme.bgColor} !important;
        border-color: ${props => props.theme.bgColor};
        border-color: transparent;
        box-shadow: 0 .5rem 1rem ${props => props.theme.mainColorShadow};
    }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <ButtonStyle {...props}>{children}</ButtonStyle>
};

export default Button;