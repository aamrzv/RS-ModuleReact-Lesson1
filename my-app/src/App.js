import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const appDiv = React.createElement('div', { className: 'App' },
    React.createElement('header', { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement('p', null,
        React.createElement('code', null, 'Edit ', React.createElement('code', null, 'src/App.js'), ' and save to reload.')
      ),
      React.createElement('a', { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, 'Learn React'),
      React.createElement('p', null, new Date().getFullYear())
    )
  );

  return appDiv;
}

export default App;
