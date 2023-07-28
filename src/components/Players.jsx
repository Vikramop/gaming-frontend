import React from 'react';
import Mia from '../assets/mia.jpg';
import Donald from '../assets/donald.jpg';
import Satoshi from '../assets/satoshi.jpg';
import Elon from '../assets/elon.jpg';

const Players = () => {
  return (
    <div className="players" id="players">
      <div className="  text-white pt-[5rem]">
        <h1 className="flex justify-center  text-[3rem] font-bold">
          The Marble Battle
        </h1>

        <p className="flex justify-center text-[25px] font-normal">
          Far from the Earth, millions of light-years away, marbles are fighting
          for the throne
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 px-8">
        <div className="playersimg">
          <img className="h-auto max-w-full rounded-lg  " src={Mia} alt="" />
        </div>
        <div className="playersimg">
          <img className="h-auto max-w-full rounded-lg " src={Donald} alt="" />
        </div>
        <div className="playersimg">
          <img className="h-auto max-w-full rounded-lg" src={Satoshi} alt="" />
        </div>
        <div className="playersimg">
          <img className="h-auto max-w-full rounded-lg" src={Elon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Players;
