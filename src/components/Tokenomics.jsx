import React from 'react';

const Tokenomics = () => {
  return (
    <div className="tokenomics  ">
      {/* grid grid-cols-2 md:grid-cols-4 px-60 */}

      <div className="t1 text-[20px] ">
        <h3 className="font-bold text-6xl ">5%</h3>
        <p className="text-[25px] font-bold">Buy Tax</p>
      </div>

      <div className="t2 text-[20px] ">
        <h3 className="font-bold text-6xl ">5%</h3>
        <p className="text-[25px] font-bold">Sell Tax</p>
      </div>
      <div className="t3 text-[20px] ">
        <h3 className="font-bold text-6xl ">100M</h3>
        <p className="text-[25px] font-bold">Supply</p>
      </div>
      <div className="t4 text-[20px] ">
        <h3 className="font-bold text-6xl ">5%</h3>
        <p className="text-[25px] font-bold">Burn Per Round</p>
      </div>
    </div>
  );
};

export default Tokenomics;
