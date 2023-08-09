import React from 'react';
import './style/index.css';
import App from "./pages/App";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
