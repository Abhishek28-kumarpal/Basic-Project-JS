import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* fragements  */}
    <App/>
  </React.StrictMode> 
  // or using these fragments <> between </> instead of using 
  // React.StrictMode
); 

 
