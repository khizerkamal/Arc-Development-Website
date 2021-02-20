import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

ReactDOM.render(<App />,document.getElementById('root'));
