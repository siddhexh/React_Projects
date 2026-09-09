import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import Superman from './App.jsx'
import React from 'react'

// const reactElement = {                       //insted of this use React.createElement
//     type : 'a',
//     props : {
//         href : "https://github.com/siddhexh",
//         target : '_blank'
//     },
//     children : "Click me to visit my GitHub"
// }

const reactElement = React.createElement(
    'a',
    {href : "https://github.com/siddhexh", target : '_blank'},
    "Visit My GitHub profile"
)

const anotherElement = (
    <a href="https://github.com" target="_blank">GitHub</a>
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
    // since App is a component(function) in main.jsx it can be called simply":
    // Superman()
    // <Superman />

    // <reactElement />    // => will not succeed bcz its an obj and not a func
    // reactElement()      // same reason

    // reactElement        // wont work bcz there are specific parameter to construct element
    
    // anotherElement      // works because react itself converts it to tree model

    reactElement            // after using React.createElement this can be accessible

)
