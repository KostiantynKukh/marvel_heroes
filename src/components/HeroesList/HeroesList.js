import React, {useEffect, useState} from 'react';
import axios from "axios";
import HeroCard from "../HeroCard/HeroCard";
import './heroesList.scss'
import getHeroes from "../../utils/getHeroes";
import Loader from '../Loader/Loader';
import {Link} from "react-router-dom";

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
                          <Link key={item.id} to={`/hero/${item.id}`}>
                            <HeroCard
                              name={item.name}
                              url={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`}
                            />
                          </Link>

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