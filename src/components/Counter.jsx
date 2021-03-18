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

            <div className={styles.btn}>
                <Button onClick={incHandler} title={'inc'} />
                <Button onClick={resetHandler} title={'reset'} />
            </div>
        </div>
    );
}