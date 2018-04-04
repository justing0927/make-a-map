import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { //view

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to D&D Make a Map!</h1>
        </header>
        <p className="App-intro">
          To get started, click <code>"Select a Map Type"</code> and choose other specifications.
        </p>
        <div className = "Card">
            <Card />
          </div>
          </div>
    );
  }
}

class WMap extends Component {
  render(){
    return(
      <div className = "WMap"> 
      <header className="App-header">
      <h1 className="App-title">Welcome to D&D Make a Map!</h1>
        </header>
        </div>
    );
  }
}

class Large extends Component {
  render(){
    return(
      <div className = "WMap"> 
      <header className="Spec-header">
      <h1 className="Spec-title">World Map Specifications:</h1>
        </header>
        </div>
    );
  }
}

class Med extends Component {
  render(){
    return(
      <div className = "WMap"> 
      <header className="Spec-header">
      <h1 className="Spec-title">Map Specifications: </h1>
        </header>
        </div>
    );
  }
}

class Small extends Component {
  render(){
    return(
      <div className = "WMap"> 
      <header className="Spec-header">
      <h1 className="Spec-title">Map Specifications: </h1>
        </header>
        </div>
    );
  }
}

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  startOptionsW(){
    <div className = "WMap">
    </div>
  }

  startOptionsL(){
    <Large />
  }

  startOptionsM(){
   <Med />
  }

  startOptionsS(){
    <Small />
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu} class = "dropbtn">
          Select a Map Type
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button class = "dropdown-content" onClick = {() => this.startOptionsW()}>
                   World </button>
                <button class = "dropdown-content" onClick = {() => this.startOptionsL()}> 
                  Large: 40 x 40 </button>
                <button class = "dropdown-content" onClick = {() => this.startOptionsM()}>
                  Medium: 30 x 30 </button>
                <button class = "dropdown-content" onClick = {() => this.startOptionsS()}>
                  Small: 20 x 20 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Grid extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default App;
