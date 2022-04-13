import React, {useEffect, useState} from 'react';
import './infoGoup.scss';

const InfoGroup = ({title, descriptions}) => {
  const [description, setDescription] = useState('');
  useEffect(() => {
      let arr = descriptions && descriptions.length ? descriptions.map((item) => {
        return item.name;
      }) : [];
      setDescription(arr.length ? arr.join(', ') : `No ${title.toLowerCase()} for this character`);
  }, [])
  return (
    <div className="info_group">
      <p className="info_title">
        {title}
      </p>
      <p className="info_description">
        { description }
      </p>
    </div>
  );
}

export default InfoGroup;