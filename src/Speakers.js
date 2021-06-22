import React, { useEffect, useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import speakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';

const Speakers = (props) => {

  const [speakerList, setSpeakerList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const resolve = () => {

  }

  useEffect(() => {
    setIsLoading(true);
    new Promise(() => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
    });
    setSpeakerList([]);
    return () => {
      console.log(`cleanup`);
    }
  }, []);

  const heartFavoriteHandler = (e, favorite) => {
    e.preventDefault();
  }

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {speakerData.map(({id, firstName, lastName, bio, favorite}) => {
              return (
                <SpeakerDetail 
                  id={id} 
                  firstName={firstName} lastName={lastName}
                  bio={bio} favorite={favorite}  
                  onHeartFavoriteHandler={heartFavoriteHandler}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers;

