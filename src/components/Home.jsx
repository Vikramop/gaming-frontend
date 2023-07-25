// import Clipboard from '../assets/clipboard.svg';
import { toast } from 'react-toastify';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography, IconButton } from '@mui/material';

const Home = () => {
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

      <div className="video-frame flex justify-center">video player</div>

      <div className=" flex gap-6 justify-center align-baseline my-14">
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
