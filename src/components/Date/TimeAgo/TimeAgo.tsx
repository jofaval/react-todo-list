import React, { ReactNode, useEffect, useState } from "react"
import styled from "styled-components";

const timers = require("timers-browserify");

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

const miliseconds = 1000;
const seconds: number = 60 * miliseconds;
const minutes =  1 * seconds;
// TODO: implement a proper timeout so that it changes by seconds -> minutes -> hours
const timeout: number = minutes;

export const TimeAgo: React.FC<Props> = (props) => {
    const [since, setSince] = useState('Now');
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout|undefined>(undefined);

    const parseTime = () => {
        if (!props.time) return;

        setSince(timeSince(props.time));
    }

    const startInterval = () => {
        // Clear the previous interval if exists
        if (intervalID) timers.clearInterval(intervalID);

        // Initialize a new interval
        const interval = timers.setInterval(parseTime, timeout);

        // Don't keep the process alive just because of the interval, to avoid memory leaks
        interval.unref();

        setIntervalID(interval);

        // Execute just in case
        parseTime();
    }

    const stopInterval = () => {
        if (!intervalID) return;

        // Stop the interval only if there's any interval to be stopped
        timers.clearInterval(intervalID);
    };

    useEffect(() => {
        startInterval();

        // Remove the interval on unmount
        return () => stopInterval();
    }, []);

    useEffect(() => {
        startInterval();

        // Remove the interval on unmount
        return () => stopInterval();
    }, [props?.time])

    return <TimeSinceContainer title={since + ' ago'}>{since} ago</TimeSinceContainer>;
}

export default TimeAgo;