import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/joy';
import {BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';

function App() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        // if(value)
        if(value==1)
         navigate("favorites")
        else
            navigate("/")
        // console.log(value)
    }, [value]);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_DEFAULT_URL}
          {window.Telegram.WebApp.initDataUnsafe?.user?.username}
          
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <body>
        dddd
        </body>
        <footer>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Specialists" icon={<FormatListBulletedIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="AccountCircleIcon" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </footer>
    </div>
  );
}

export default App;
