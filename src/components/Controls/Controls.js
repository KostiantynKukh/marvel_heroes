import React, {useState} from 'react';
import './controls.scss'
import Filters from "../Filters/Filters";
import {Input} from 'antd';
import { RiSearchLine } from 'react-icons/ri';

function Controls({onChangeValue, eventsHandler}) {
    let [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        onChangeValue(e.target.value);
    }
    return (
        <div className="controls-field">
            <div className="search-field">
              <Input
                type="text"
                className="search-input"
                placeholder="Please input hero name"
                onChange={(e) => onChangeHandler(e)}
              />
              <RiSearchLine className='search-icon' />
            </div>


            <Filters eventsHandler={eventsHandler} />
        </div>
    );
}

export default Controls;