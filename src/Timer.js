import React, {useMemo} from "react";

const Timer = ({
    value
}) => {

    const {minutes, seconds} = useMemo(()=> {
        const minutesValue = Math.floor(value / 60);
        const secondsValue = value % 60;
        return {
            minutes: minutesValue,
            seconds: secondsValue
        }
    }, [value])
    
    return (
        <div>
             <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            
        </div>
    )
}

export default Timer;