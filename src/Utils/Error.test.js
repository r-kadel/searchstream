import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../Context';

describe('<Error />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ContextProvider value={hasError}>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </ContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

const hasError = true;
