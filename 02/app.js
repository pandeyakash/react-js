import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'parent'},
  [React.createElement('div', {id: 'child1'},
    [
      React.createElement('h1', {}, 'I am h1 tag !!!!'),
      React.createElement('h2', {}, 'I am h2 tag')
    ] // If we want to add multiple children then we can pass an array of react elements as the third argument of React.createElement() function.
  ),
  React.createElement('div', {id: 'child2'},
      [
        React.createElement('h1', {}, 'I am h1 tag'),
        React.createElement('h2', {}, 'I am h2 tag')
      ] 
  )
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 