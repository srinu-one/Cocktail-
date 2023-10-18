// Remove these lines
// import React from "react"
// import ReactDOM from "react-dom"

function App() {
    let date=new Date().toLocaleTimeString()
    return <h1>Date {date }</h1>
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
setInterval(myTimer, 1000);
function myTimer() {
    root.render(<App/>)
}
