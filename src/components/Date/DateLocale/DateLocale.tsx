import React, { ReactNode, useEffect } from "react"
import styled from "styled-components";

/**
 * Converts a timestamp or a date to a locale date string
 * 
 * @param {Date|number} date The date to evaluate
 * 
 * @returns {String} The formatted date string
 */
const dateToLocale = (date: Date|number): string => {
    // If it's a number, parse it to date
    if (!Number.isNaN(date)) date = new Date(date);

    return typeof date === typeof new Date()
        ? date.toLocaleString()
        : date.toString()
    ;
}

const DateContainer = styled.h5`
    color: ${props => props.theme.mainColorAccent};
    margin: 0;
`;

interface Props {
    date?: Date|number
    children?: ReactNode
}

export const DateLocale: React.FC<Props> = (props) => {
    const [formatted, setFormatted] = React.useState('Now');

    useEffect(() => {
        if (props?.date) setFormatted(dateToLocale(props.date));
    }, [props?.date])

    return <DateContainer title={formatted}>{formatted}</DateContainer>;
}

export default DateLocale;