import React from 'react';

const Faq = () => {
  return (
    <div className="faq">
      <h1 className="flex justify-center text-[3rem] font-bold pt-8">FAQ</h1>
      <p className="flex justify-center pt-4 text-[25px] font-light">
        We know you have questions too.
      </p>
      <div className="faqc flex justify-center gap-1 mt-8">
        <div className="q1 px-4">
          <h5 className=" text-[25px] font-bold">
            What is the schedule for the races on your platform?
          </h5>
          <p className="pt-4 pb-8 text-xl">
            Our platform hosts a race every 30 minutes, 24/7. You can join in
            any time you want for a thrilling gaming experience.
          </p>
          <h5 className=" text-[25px] font-bold">
            How is the tax from each game distributed?
          </h5>
          <p className="pt-4 pb-8 text-xl">
            For each game, a 5% tax is collected and goes to the admin's
            address, another 5% is burned, and the remaining 90% is distributed
            among the winning bettors.
          </p>
        </div>
        <div className="q2 px-4">
          <h5 className=" text-[25px] font-bold">
            How do I place a bet and what do I use for betting?
          </h5>
          <p className="pt-4 pb-8 text-xl">
            Users place bets using $BB token. You can bet on any of the four
            players participating in each race.
          </p>
          <h5 className=" text-[25px] font-bold">
            What happens if I win a bet?
          </h5>
          <p className="pt-4 pb-8 text-xl">
            If you win a bet, you can claim your winnings which is your share
            from the total betting amount. Remember, it's a winner-takes-all
            platform where the winnings are equally distributed among the users
            who bet for the winning player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
