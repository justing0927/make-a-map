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
        <div className = "Large">
          <Large />
            </div>
          </div>
    );
  }
}

class WMap extends Component {
   constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  render(){
    return(
      <div className = "Map"> 
      <header className="Spec-header">
      <h1 className="Spec-title">World Map Specifications: </h1>
        </header>
        <p className="Traits">
        TEST
        </p>
        </div>
    );
  }
}

class Large extends Component {
  constructor(i) {
    super();
    this.show = i;
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }
    );
  }

  render(){
    if(i == true){
    return(
      <div>
        <button onClick={this.showMenu} class = "dropdown-content">
          Select a Biome:
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
                <button class = "dropdown-content" onClick = {() => this.renderNewW()}>
                   World </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewL()}> 
                  Large: 40 x 40 </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewM()}>
                  Medium: 30 x 30 </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewS()}>
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
}

class Med extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  render(){
    return(
      <div className = "Map"> 
      <header className="App-header">
      <h1 className="App-title">Map Specifications: </h1>
        </header>
        <p className="App-intro">
        TEST
          </p>
        </div>
    );
  }
}

class Small extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  render(){
    return(
      <div className = "Map"> 
      <header className="App-header">
      <h1 className="App-title">Map Specifications: </h1>
        </header>
        <p className="App-intro">
          TEST
          </p>
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

  renderNewW(){
    return(
    <div className = "WMap">
      <WMap />
    </div>
    );
  }

  
  renderNewL(){
    return(
    <div className = "Large">
      <Large />
      </div>
    );
  } 

  renderNewM(){
    return(
    <div className = "Med">
      <Med />
      </div>
      );
  }

  renderNewS(){
    return(
    <div className = "Small">
      <Small />
      </div>
      );
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
                <button class = "dropdown-content" onClick = {() => this.renderNewW()}>
                   World </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewL()}> 
                  Large: 40 x 40 </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewM()}>
                  Medium: 30 x 30 </button>
                <button class = "dropdown-content" onClick = {() => this.renderNewS()}>
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
