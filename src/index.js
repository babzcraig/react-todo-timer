import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from './TimersDashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimersDashboard />, document.getElementById('content'));
registerServiceWorker();
