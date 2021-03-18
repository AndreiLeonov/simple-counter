import React from 'react';
import { Button } from './Button';
import { Display } from './Display';

export const Counter = () => {

    const [value, setValue] = React.useState(0);

    const incHandler = () => {
        setValue(value+1)
    }

    const resetHandler = () => {
        setValue(0)
    }


    return (
        <>
            <Display value={value}/>
            <Button onClick={incHandler} title={'inc'}/>
            <Button onClick={resetHandler} title={'reset'}/>
        </>
    );
}