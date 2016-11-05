import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

// vendor css
import 'bootstrap-grid/dist/grid.css';

// authored scss
import './index.scss';

render(
  <Root />,
  document.getElementById('root')
);
