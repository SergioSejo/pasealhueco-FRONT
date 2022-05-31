import React from 'react';
import { createRoot } from 'react-dom/client';

import { PahApp } from './PahApp';
import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<PahApp />);
