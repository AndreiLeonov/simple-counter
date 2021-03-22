import React from 'react';
import { Button } from './Button';

export const Settings = () => {

    const [maxValue, setMaxValue] = React.useState()

    const setHandler = () => {
        alert('test')
    }

    const maxValueHandler = (e) => {
        setMaxValue(e.currentTarget.value)
    }


    return (
        <div>
            <div>
                <input onChange={maxValueHandler} type="text" placeholder="maxValue" onClick={setHandler}/>
                <input type="text" placeholder="minValue"/>
            </div>
            <div>
                <Button onClick={setHandler} title={'SET'}/>
                {maxValue}
            </div>
        </div>
    );
}