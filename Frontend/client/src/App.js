import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


        <p>hi</p>
        <NavBar></NavBar>

      <image src = "-/imgs/Screenshot 2022-06-28 101742.png"></image>
      <h1> Classedy</h1>

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
