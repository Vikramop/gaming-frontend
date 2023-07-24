import React from 'react';
import Line from '../assets/group.png';
const Features = () => {
  return (
    <div className="features" id="features">
      <h1 className="flex justify-center text-neutral-100 py-12 font-bold text-[3rem]">
        Features!
      </h1>
      <div className=" flex justify-center mt-12 text-neutral-100">
        <div className="feature1">
          <img src={Line} />
          <h6 className="flex justify-center text-[30px] font-bold text-neutral-100">
            Winner takes All
          </h6>
          <p className="flex justify-center px-12 text-slate-300 text-[20px]">
            Dive into our high-stakes virtual platform, hosting races every 30
            minutes, where bets placed using $BB tokens lead to a
            winner-takes-all outcome.
          </p>
        </div>
        <div className="feature2 ">
          <img src={Line} />
          <h6 className="flex justify-center text-[30px] font-bold text-neutral-100">
            Live 24x7
          </h6>
          <p className="flex justify-center px-12 text-slate-300 text-[20px]">
            Our platform operates around the clock, providing a 24/7 gaming
            experience, as we consistently refresh our game roster, ensuring a
            seamless journey for our players.
          </p>
        </div>
        <div className="feature3">
          <img src={Line} />
          <h6 className="flex justify-center text-[30px] font-bold text-neutral-100">
            Weekly Events
          </h6>
          <p className="flex justify-center px-12 text-slate-300 text-[20px]">
            Each week, we ensure our players' journey is continually refreshed
            and seamless by adding new games to our roster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
