import React from 'react';
import Img from '../assets/game2.jpeg';
import Img2 from '../assets/gamepvp.jpeg';
import rightIcon from '../assets/right.png';

const Games = () => {
  return (
    <div className="games flex flex-col">
      <div className="gamesh flex justify-center flex-col items-center">
        <h1> Coming Soon...</h1>
        <p>Coming soon with a new game daily...</p>
      </div>
      <div className="img-sec gap-1 p-2">
        <div className="img-sec2">
          <img src={Img2} alt={Img} />
          <div className="img-s2h">
            <h5>PvP Battles</h5>
            <a>
              <p>
                Live on 26/07/2023 <span>{'>'}</span>
              </p>
            </a>
          </div>
        </div>
        <div className="img-sec1">
          <img src={Img} alt={Img} />
          <div className="img-s1h">
            <h5>Horse Racing</h5>
            <a>
              <p>
                Live on 27/07/2023 <span> {'>'}</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
