import React from 'react';
import { createRoot } from 'react-dom/client';

import { PahApp } from './PahApp';
import './styles/styles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<PahApp />);
