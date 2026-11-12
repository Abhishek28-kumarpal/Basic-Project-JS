import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// import App2 from './App2';
import Card from './components/Card';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* fragements  */}
     <Card/>
    {/* <App2/> */}
    {/* <App/> */}
  </React.StrictMode>
  // or using these fragments <> between </> instead of using
  // React.StrictMode
  // react

);