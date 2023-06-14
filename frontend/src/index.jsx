import {Application} from './application.jsx';
import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
          <Application />
        </React.StrictMode>,
    );
