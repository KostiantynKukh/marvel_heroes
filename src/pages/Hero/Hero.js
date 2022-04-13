import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import getHeroInfo from "../../utils/getHeroInfo";
import Loader from "../../components/Loader/Loader";
import './hero.scss';
import InfoGroup from "../../components/InfoGroup/InfoGroup";

const Hero = (props) => {
  const [hero, setHero] = useState(null);
  const [src, setSrc] = useState('');
  let {id} = useParams();

  useEffect(() => {
    fetchData(id);
  },[])

  const fetchData = async (id) => {
    let result = await getHeroInfo(id);
    if(result.length) {
      setHero(result[0]);
      generateSrc(result[0].thumbnail);
    }
    console.log(result[0])
  }

  const generateSrc = (data) => {
      setSrc(`${data.path}/landscape_incredible.${data.extension}`);
  }

  return (
    <main className="main container">
      {
        hero && src ?
          <div className="hero">
            <div className="hero_intro">
              <div className="img_wrapper">
                <img className='hero_img' src={src} alt={hero.name}/>
              </div>
              <h2 className="hero_title">
                {hero.name}
              </h2>
            </div>
            <div className="hero_main">
            <InfoGroup
              title='Description'
              descriptions={hero.description ? [{name: hero.description}] : null}
            />
            <InfoGroup
              title='Events'
              descriptions={hero?.events?.items}
            />
            <InfoGroup
              title='Series'
              descriptions={hero?.series?.items}
            />
            <InfoGroup
              title='Stories'
              descriptions={hero?.stories?.items}
            />
            </div>
          </div> :
          <Loader />
      }
    </main>
  );
}

export default Hero;