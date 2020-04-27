import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './styles/application.scss';
import App from './components';

const store = configureStore();

const MainApp = () => (
    <Provider store = {store}>
        <App/>
    </Provider>
);

render(<MainApp />, document.getElementById('root'));
