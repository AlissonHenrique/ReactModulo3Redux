import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './config/ReacotronConfig';
import store from './store';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Footer />
    </Fragment>
  </Provider>
);
export default App;
