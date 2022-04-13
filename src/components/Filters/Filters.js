import React, {useEffect, useState} from 'react';
import getEvents from "../../utils/getEvents";
import './filters.scss'
import {Checkbox, Button} from "antd";
import _ from 'lodash';
import {RiFilterLine, RiFilterFill} from 'react-icons/ri';

const Filters = ({eventsHandler}) => {
  const [events, setEvents] = useState([])
  const [isDropdown, setIsDropdown] = useState(false);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    let result = await getEvents();
    setEvents(result);
  }

  const dropdownHandler = () => {
    setIsDropdown(!isDropdown)
  }

  const onChangeCheckbox = (id) => {
    let clonedIds = _.cloneDeep(ids);
    if(ids.includes(id)) {
      clonedIds = clonedIds.filter(elem => elem !== id);
    } else {
      clonedIds.push(id)
    }
    setIds(clonedIds);
  }

  const confirmHandler = () => {
    eventsHandler(ids);
    setIsDropdown(false);
  }

  const resetHandler = () => {
    setIds([]);
  }

  return (
    <div className="filters_wrapper">
      <Button
        size='large'
        className="filters_title"
        onClick={() => dropdownHandler()}
        >
        {
          isDropdown ? <RiFilterFill className="filters_title_icon" /> : <RiFilterLine className="filters_title_icon" />
        }
        Events
      </Button>
      <div className="filters_dropdown" style={{display: isDropdown ? 'flex' : 'none'}}>
        {
          events.length ? events.map(item => {
            return (
              <Checkbox
                checked={ids.includes(item.id)}
                key={item.id}
                className="filters_checkbox"
                onChange={() => onChangeCheckbox(item.id)}
              >{item.title}</Checkbox>
            )
          }) : 'no events'
        }
      </div>
      <div className="filters_footer" style={{display: isDropdown ? 'flex' : 'none'}}>
        <Button
          type="primary"
          onClick={() => confirmHandler()}
        >Apply</Button>
        <Button
          type="default"
          onClick={resetHandler}
        >Clear all</Button>
        <Button
          danger
          onClick={dropdownHandler}
        >Close</Button>
      </div>
    </div>
  );
}

export default Filters;