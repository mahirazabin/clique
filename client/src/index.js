import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(<App />); // Render the app using the new method
