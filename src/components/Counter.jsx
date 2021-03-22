import React from 'react';
import { Button } from './Button';
import { Display } from './Display';
import styles from '../styles.module.css'

export const Counter = () => {

    const [value, setValue] = React.useState(0);

    const incHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }


    return (
        <div className={styles.counter}>
                <Display value={value} />
            <div className={styles.btns}>
                <Button onClick={incHandler} title={'INC'} />
                <Button onClick={resetHandler} title={'RESET'} />
            </div>
        </div>
    );
}