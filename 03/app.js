import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//         [
//           React.createElement('h1', {}, 'I am a h1 tag'),
//           React.createElement('h2', {}, 'I am a h2 tag')
//         ]
//     )
// );

// React Element
const heading = <h1 id="heading" key="h1">Hello World from React</h1>;

// React Component
const Heading = () => (
    <h1 id="heading" key="h1">Hello World from React</h1>
)

// const Title = () => (
//     <h1 id="heading" key="h1">Hello World from React</h1>
// )


//We can also use JS in JSX
const number = 1000;

const Title = () => (
    <h1 id="heading" key="h1">
        Hello World from React
        <span>{number}</span>
    </h1>
)

// We can also put a React Element inside a React Component

// const heading1 = <h1 id="heading" key="h1">Hello World from React</h1>;
// const Title1 = () => (
//     <h1 id="heading" key="h1">
//         Hello World from React
//         <span>{heading}</span>
//     </h1>
// )

console.log(Heading, "::::Heading");

// React Functional Component
// const FuntionalComponent = () => {
//     return <h1>Functional Component</h1>
// }

// const FunctionalComponent = () => <h1>Functional Component</h1>;

const FunctionalComponent = () => (
    <div id="container">
        <Title />
        <h1>Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<FunctionalComponent />);

