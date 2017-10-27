import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// the below code was causing caching and routing issues, so removed it
// and the import above. If mystery issues occur or you want the performance,
// you can add it back. 

// registerServiceWorker();
