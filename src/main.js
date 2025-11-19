import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import { App } from '@app/App';
import '@shared/styles/index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsx(Provider, Object.assign({ store: store }, { children: _jsx(App, {}) })) }));
