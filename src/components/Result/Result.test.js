import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../../Context';

describe('<Result />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ContextProvider value={testResult}>
        <BrowserRouter>
          <Result data={testResult} />
        </BrowserRouter>
      </ContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

const testResult = {
  id: '5e2ce07890c0e033a487e3d2',
  picture:
    'https://utellyassets9-1.imgix.net/api/Images/4d0c65a4d0d8a24ea47e6a64d12c4633/Redirect',
  name: 'Dragon Ball Z: Bojack Unbound',
  locations: [
    {
      icon:
        'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=5ad8898f-f073-405d-92ed-98b1c6e8fb54_er2020-02-23',
      display_name: 'iTunes',
      name: 'iTunesIVAUS',
      id: '5d80a9a5d51bef861d3740d3',
      url:
        'https://itunes.apple.com/us/movie/dragon-ball-z-bojack-unbound-subtitled-original-version/id1381102560'
    }
  ]
};
