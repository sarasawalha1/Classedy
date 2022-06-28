import './App.css';
import React from 'react'
function App() {
  return (
    <div className="App">
        <p>hi</p>
    </div>
  );
}

class NavBar extends React.Component{
  render(){
  return(
  <><div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div><div style="padding-left:16px">
        <h2>Top Navigation Example</h2>
        <p>Some content..</p>
      </div></>
)
}}

export default App;
