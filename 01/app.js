// 01

// const heading = React.createElement('h1', {id: 'heading', xyz: "abc"}, 'Hello World');
// console.log(heading); // This is the React element which is a JavaScript object. It is not an HTML element. It is a virtual representation of the HTML element. The React element is a lightweight description of what the DOM should look like. It is not the actual DOM element. The actual DOM element will be created by React when it renders the React element.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // Here what render does is, creates the h1 tag which the browser understands and then it will put it inside the root div. So, the final output will be <div id="root"><h1 id="heading" xyz="abc">Hello World</h1></div>





// How do we create this structure using React.createElement()?
/**
 * 
 * 
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>Hello World</h1>
 *   </div>
 * </div>
 * 
 * 
 * 
 */

// const parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//         React.createElement('h1', {}, 'Hello World')
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);




// How do we create this structure using React.createElement()?
/**
 * 
 * 
 * 
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am a h1 tag</h1>
 *     <h2>I am a h2 tag</h2>
 *   </div>
 * </div>
 * 
 * 
 * 
 */


const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
        [
          React.createElement('h1', {}, 'I am a h1 tag'),
          React.createElement('h2', {}, 'I am a h2 tag')
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


//The above code is still not making anything better. It is making the code more complex. So, we will use JSX which is a syntax extension for JavaScript. It is not necessary to use JSX but it makes the code more readable and easier to write. It is a syntactic sugar for React.createElement(). It allows us to write HTML-like syntax in our JavaScript code. The JSX code will be transpiled to React.createElement() calls by Babel. Babel is a JavaScript compiler that converts JSX into JavaScript.