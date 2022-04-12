import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeroCard from "../HeroCard/HeroCard";
import './heroesList.scss'
import getHeroes from "../../utils/getHeroes";
import Loader from '../Loader/Loader';

const HeroesList = ({searchValue, events}) => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        fetchData(50);
    }, []);

    useEffect(() => {
        searchValue || (events && events.length) ? fetchData(null, searchValue, events) : fetchData();
    }, [searchValue, events]);



    const fetchData = async (limit, searchValue, events) => {
        setLoading(true);
        console.log('events', events);
        let result = await getHeroes(limit, searchValue, events );
        setHeroes(result);
        setLoading(false);
    }

    return (
        <div className="heroes-list_wrapper">
            <div className='heroes-list'>
                {
                    !loading && heroes.length ? heroes.map((item => {
                        return (
                            <HeroCard
                                key={item.id}
                                name={item.name}
                                url={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                            />
                        )
                    })) : loading ?
                        <div className="loader_wrapper">
                            <Loader />
                        </div>
                        :
                      <p className="no-heroes">
                        Heroes not found
                      </p>
                }
            </div>
        </div>

    );
}

export default HeroesList;