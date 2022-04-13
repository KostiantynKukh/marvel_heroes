import React, {useState} from 'react';
import Controls from "../../components/Controls/Controls";
import HeroesList from "../../components/HeroesList/HeroesList";

const Home = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [events, setEvents] = useState([]);

  const onChangeValueHandler = (value) => {
    setSearchValue(value);
  }
  const eventsHandler = (array) => {
    setEvents(array);
  }
  return (
    <main className="main container">
      <Controls onChangeValue={onChangeValueHandler} eventsHandler={eventsHandler}/>
      <HeroesList searchValue={searchValue} events={events}/>
    </main>
  );
}
export default Home;