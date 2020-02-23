import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import { BrowserRouter } from 'react-router-dom';
import { Context, ContextProvider } from '../../Context';

describe('<Loading />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ContextProvider value={Context}>
        <BrowserRouter>
          <Loading />
        </BrowserRouter>
      </ContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
