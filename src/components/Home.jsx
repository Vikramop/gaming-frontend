import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="py-24">
        <h1 className=" flex justify-center text-[3em]  font-bold">
          WORLD'S FIRST LIVE STREAMING
        </h1>
        <h1 className=" flex justify-center text-[3em] font-bold">
          BETTING PLATFORM
        </h1>
        <p className="flex justify-center text-[25px]">
          Discover new betting avenues weekly with blockbet
        </p>
      </div>

      <div className="video-frame mx-80">video player</div>

      <div className="homeb flex gap-6 justify-center align-baseline my-14">
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Start betting
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Chart
        </button>
      </div>
      <div className="commingsoon ">
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
      </div>
    </div>
  );
};

export default Home;
