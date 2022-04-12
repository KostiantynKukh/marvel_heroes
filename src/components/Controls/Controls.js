import React, {useState} from 'react';
import './controls.scss'
import Filters from "../Filters/Filters";

function Controls({onChangeValue, eventsHandler}) {
    let [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        onChangeValue(e.target.value);
    }
    return (
        <div className="controls-field">
            <input
                type="text"
                className="search-field"
                placeholder="Input hero name here ..."
                onChange={(e) => onChangeHandler(e)}
            />
            <Filters eventsHandler={eventsHandler} />
        </div>
    );
}

export default Controls;