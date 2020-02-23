import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { Context, ContextProvider } from '../../Context';

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ContextProvider value={Context}>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </ContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
