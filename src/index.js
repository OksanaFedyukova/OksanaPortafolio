import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider, createTheme} from '@mui/material';
//import './index.css';
import App from './components/App';

const theme = createTheme({
        palette: {
          primary: {  
            main: '#384760',
          },
          secondary: {
            main: '#f64a25',
          },
          pickledBluewood: {
            main: '#384760',
          }, 
          wafer: {
            main: '#deccc3',
          },
          poloBlue: {
            main: '#89add0',
          },
          bermudaGray: {
            main: '#7288a3',
          },
          pomegranate: {
            main: '#f64a25',
          },
          balticSea: {
            main: '#201d23',
          },
          nepal: {
            main: '#849ebe',
          },
          waikawaGray: {
            main: '#576f94',
          },
          sandstone: {
            main: '#796764',
          },
          bigStone: {
            main: '#101b35',
          },
        },
      });


ReactDOM.render(
   

    <React.StrictMode>
         <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>,

    document.getElementById('root')
);
