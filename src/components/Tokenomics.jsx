import React from 'react';
import Upload from '../assets/upload.png';
const Tokenomics = () => {
  return (
    <div className="tokenomics  ">
      {/* grid grid-cols-2 md:grid-cols-4 px-60 */}
      <div className="flex">
        {/* <img src={Upload} /> */}
        <div className="t1 text-[20px] mx-4">
          <h3 className="font-bold ">5%</h3>
          <p className="text-[30px] font-bold">Buy Tax</p>
        </div>
      </div>
      <div className="t2 text-[20px] mx-4">
        5%
        <p className="text-[30px] font-bold">Sell Tax</p>
      </div>
      <div className="t3 text-[20px] mx-4">
        100M
        <p className="text-[30px] font-bold">Supply</p>
      </div>
      <div className="t4 text-[20px] mx-4">
        5%
        <p className="text-[30px] font-bold">Burn Per Round</p>
      </div>
    </div>
  );
};

export default Tokenomics;
