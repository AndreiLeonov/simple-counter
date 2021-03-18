import React from 'react';
import styles from '../styles.module.css';

export const Display = (props) => {

    return (
        <div className={styles.display}>
            {props.value}
        </div>
    );
}