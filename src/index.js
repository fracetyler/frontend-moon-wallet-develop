import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import { FocusStyleManager } from '@blueprintjs/core';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './assets/main.css';
import './assets/fonts/Roboto/stylesheet.css';

import configureStore, { history } from './redux/configureStore';
import i18n from './utils/i18n';
import registerServiceWorker from './utils/i18n/registerServiceWorker';
import Main from './containers/app/Main';

const store = configureStore({});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            <Main/>
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();
FocusStyleManager.onlyShowFocusOnTabs();
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./containers/app/Main', () => {
    render(require('./containers/app/Main').default);
  });
}
