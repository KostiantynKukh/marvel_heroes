import React, {useState} from 'react';
import HeroesList from "../HeroesList/HeroesList";
import './main.scss'
import Controls from "../Controls/Controls";

const Main = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [events, setEvents] = useState([]);

    const onChangeValueHandler = (value) => {
        setSearchValue(value);
    }
    const eventsHandler = (array) => {
      setEvents(array);
    }
    return (
        <main className="main">
            <Controls onChangeValue={onChangeValueHandler} eventsHandler={eventsHandler}/>
            <HeroesList searchValue={searchValue} events={events}/>
        </main>
    );
}

export default Main;