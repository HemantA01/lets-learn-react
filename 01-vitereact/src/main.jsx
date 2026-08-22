//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//We can create a function here also and pass it as the function name created (eg. "MyApp")
function MyApp(){
    return(
        <>
            <h1>Custom React !</h1>
        </>
    )
}

//Element
const anotherElement = (
    <a href = "https://www.google.com" target="_blank">Visit Google</a>
)

//Variables
const anotherUser = "anotheruser1"

const reactElement = React.createElement(
    'a',        //1st expected parameter is tag element (a/h1/p etc.)
    {href: 'https://www.google.com', target: '_blank'}, //2nd expected parameter is object
    'Click to Visit google',     //3rd parameter is text to display,
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
     //<MyApp />
     //<App />
    //anotherElement
    reactElement
)
