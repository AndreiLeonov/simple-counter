import React from 'react';
import styles from '../styles.module.css';

export const Button = (props) => {

    return (
        <div className={styles.btn} >
            <button onClick={props.onClick}>{props.title}</button>
        </div>
        
    );
}