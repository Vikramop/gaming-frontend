// import Clipboard from '../assets/clipboard.svg';
import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import { toast } from 'react-toastify';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography, IconButton } from '@mui/material';

const Home = () => {
  const embed = useRef();
  const handleReady = (e) => {
    embed.current = e;
  };
  return (
    <div className="home">
      <div className=" flex justify-center ">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '34px',

            background: '#1A1A1A',
            padding: '12px',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              width: 6,
              marginRight: 10,
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <Typography variant="body" fontWeight="bold" color="white">
              Contract addresss
            </Typography>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body"
                color="grey"
                nowrap
                sx={{
                  maxWidth: { xs: '270px', sm: 'fit-content' },
                  wordWrap: 'break-word',
                }}
              >
                0x994A258c7Dec633b5b15376f850D5Ea701179E79
              </Typography>

              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(
                    '0x994A258c7Dec633b5b15376f850D5Ea701179E79'
                  );
                  toast('Address copied', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                  });
                }}
              >
                <ContentCopyIcon sx={{ color: 'white', width: '20px' }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 herotext">
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
      <div className="blob">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#6F2687"
            d="M36,-48.6C46.4,-41.9,54.4,-31.1,56.5,-19.6C58.5,-8.1,54.5,4.2,51.7,18.1C48.9,32,47.4,47.5,39,55.6C30.6,63.7,15.3,64.2,1.5,62.1C-12.3,60,-24.5,55.3,-38.3,49C-52.2,42.7,-67.6,34.8,-76.1,21.6C-84.7,8.4,-86.4,-10.1,-78.2,-22.3C-69.9,-34.4,-51.7,-40.2,-37,-45.5C-22.3,-50.7,-11.1,-55.4,0.8,-56.5C12.8,-57.7,25.5,-55.2,36,-48.6Z"
            transform="translate(100 100)"
            />
          </svg> */}
      </div>
      {/* <div className="blob1"></div> */}
      <div className="blob2"></div>
      <div className="video-frame flex justify-center">
        {' '}
        <TwitchEmbed
          channel="BlockBetLive"
          autoplay
          muted
          withChat={false}
          darkMode={false}
          hideControls={false}
          allowFullscreen={true}
          onVideoReady={handleReady}
        />
      </div>

      <div className=" flex gap-6 justify-center align-baseline my-14">
        <button
          type="button"
          className="text-white w-48 h-12 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          START BETTING
        </button>
        <button
          type="button"
          className="text-[#6E2687] w-48 h-12  hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-3 text-center mb-2 dark:bg-white dark:hover:bg-slate-300 dark:focus:ring-purple-900"
        >
          CHART
        </button>
      </div>
      <div className="commingsoon ">
        <h1>Comming Soon</h1>
        <h1>Comming Soon</h1>
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
