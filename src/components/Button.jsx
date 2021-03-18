import React from 'react';
import styles from '../styles.module.css';

export const Button = (props) => {

    return (
        <div >
            <button className={styles.counterbtn} onClick={props.onClick}>{props.title}</button>
        </div>
        
    );
}