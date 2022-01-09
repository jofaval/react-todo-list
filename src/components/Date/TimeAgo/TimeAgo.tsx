import React, { ReactNode, useEffect } from "react"
import styled from "styled-components";

/**
 * The time since the given moment
 * 
 * @param {number} date The timestamp from the date
 * 
 * @returns {String} The formatted time ago string
 */
const timeSince = (date: number): string => {
    const seconds = Math.floor((new Date().getTime() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return Math.floor(interval) + " years";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return Math.floor(interval) + " months";

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return Math.floor(interval) + " days";

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return Math.floor(interval) + " hours";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return Math.floor(interval) + " minutes";

    return Math.floor(seconds) + " seconds";
}

const TimeSinceContainer = styled.h5`
    color: ${props => props.theme.mainColorAccent};
    margin: 0;
`;

interface Props {
    time?: number
    children?: ReactNode
}

export const TimeAgo: React.FC<Props> = (props) => {
    const [since, setSince] = React.useState('Now');

    useEffect(() => {
        if (props?.time) setSince(timeSince(props.time));
    }, [props?.time])

    return <TimeSinceContainer title={since + ' ago'}>{since} ago</TimeSinceContainer>;
}

export default TimeAgo;