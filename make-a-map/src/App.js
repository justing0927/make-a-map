import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var gridSize = null;
var mapType = null;
var biome = null;
var path = null;
var river = null;
var lake = null;
var grid = [""];

var parts = [mapType, gridSize, biome, path, river, lake];

//Must use {//[Text...]} to comment in html


/*
  Things to add in future.

  World Map function.
    - Also add possible city locations and names
    - Make biomes make sense.

  Variance in size for random things.

  Addition map biomes (Tundra, Planar, urban, etc.)

  Additional obstacles and random elements
*/
/*
Dynamic render (sssommehoww):

  For gridsize{
      display board row
    for gridsize{
      display square
    }
  }
*/

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

        <div className = "Spec-title" id = "myDIV" display = "none" float = "left">
          Choose a Biome: {/*On click - show various button options, similar system to world vs map set-up. */}

          <DBiome/>
          <FBiome/>
          <PBiome/>
          <MBiome/>
          <GBiome/>
          <WBiome/>

          <div>
            <button id = "genButton2" display = "none" className = "dropbtn2" onClick = {() => this.gen2()}> 
                Generate! </button>
          </div>

        </div>
        
        <div className = "Spec-title" id = "Wland" display = "none"> {/* Didn't feel like putting this somewhere better deal with it */}
          Number of Landmasses (From 1-5): 
          <form> 
            <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
          </form>
        </div>
        <div className = "Spec-title" id = "Wwater" display = "none">
          Frequency of Bodies of Water (From 1-5): 
          <form> 
            <input id = "waterfreq" type="number" name="quantity" min="1" max="5" /> 
          </form>

          <div> 
            <button id = "genButton" display = "none" className = "dropbtn2" onClick = {() => this.gen1()}> 
              Generate! </button>
          </div>
        </div>

        <div className = "Card">
          <Grid />
        </div>

      </div>
    );
  }
  //Creates an array for World grid creation based on user input. Ensures input is entered.
  gen1(){
    if(document.getElementById("lndmss").value === "" || document.getElementById("waterfreq").value === ""){
      alert("Input must be filled out!")
    }
    else  
      parts.push(document.getElementById("lndmss").value)
      parts.push(document.getElementById("waterfreq").value)
    }

//Creates an array for Large/Medium/Small grid creation based on user input. Ensures input is entered.
  gen2(){
    if(biome === "Des"){
      if(document.getElementById("qsand").value === "" || document.getElementById("drocks").value === "" ){
        
        alert("Input must be filled out!")
      }

      parts.push(document.getElementById("qsand").value) // parts[6]
      parts.push(document.getElementById("drocks").value) //7
      //parts.push(document.getElementById("dsize").value) 
    }
    else if(biome === "For"){
      if(document.getElementById("trees").value === ""){
        
        alert("Input must be filled out!")
      }
      parts.push(document.getElementById("trees").value) //parts[6]
    }
    else if(biome === "Pla"){
      if(document.getElementById("brush").value === "" || document.getElementById("procks").value === "") {
        
        alert("Input must be filled out!")
      }
      parts.push(document.getElementById("brush").value) //parts[6]
      parts.push(document.getElementById("procks").value) //parts 7
    }
    else if(biome === "Mou"){
      if(document.getElementById("mdrops").value === "" || document.getElementById("mrocks").value === ""){
        
        alert("Input must be filled out!")
      }
      parts.push(document.getElementById("mdrops").value) //parts[6]
      parts.push(document.getElementById("mrocks").value) //parts 7
      //parts.push(document.getElementById("msize").value) //parts 8
    }
    else if(biome === "Gro"){
      if(document.getElementById("gdrops").value === "" || document.getElementById("grocks").value === "" ){
        
        alert("Input must be filled out!")
      }
      
      parts.push(document.getElementById("gdrops").value) //parts[6]
      parts.push(document.getElementById("grocks").value) //parts 7
      //parts.push(document.getElementById("gsize").value) //parts 8
    }
    else if(biome === "Wat"){
      if(document.getElementById("coral").value === "" || document.getElementById("wrocks").value === "" ){
        
        alert("Input must be filled out!")
      }
      
      parts.push(document.getElementById("coral").value) //parts[6]
      parts.push(document.getElementById("wrocks").value) //parts 7
     // parts.push(document.getElementById("wsize").value) //parts 8
    }

    grid = createMGrid();

    /*
    else{
      alert("Biome not defined.")
    }
    */   

  }
  }

  function dBiome(){
    biome = "Des"
  }
  function fBiome(){
    biome = "For"
  }
  function pBiome(){
    biome = "Pla"
  }
  function mBiome(){
    biome = "Mou"
  }
  function gBiome(){
    biome = "Gro"
  }
  function wBiome(){
    biome = "Wat"
  }

//=========================================== OBJECTS FOR EACH BIOME: =================================================


  class DBiome extends React.Component {
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
      bi1();
      dBiome();
      
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
        <div float = "left" display = "inline">
          <button id = "bOne" class = "Spec-button" display = "none" onClick = {this.showMenu}>
            Desert
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
                <div className = "Big-title" >
                    Obstacles: 
                  </div>
                  <div className = "Spec-Title">
                    Frequency of Quicksand (From 1-5):
                <form> 
                  <input id = "qsand" type="number" name="quantity" min="0" max="5" /> 
                </form> 
                    Frequency of Rocks (From 1-5):
                <form> 
                  <input id = "drocks" type="number" name="quantity" min="0" max="5" /> 
                </form> 
          {/*
                Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
                <form> 
                  <input id = "dsize" type="number" name="quantity" min="0" max="3" /> 
                </form> 

          */}

                </div>
                <div className = "Big-title" >
                    Land Elements: 
                  </div>
                <button class = "dropdown-content" onClick = {() => this.togLake()}> 
                     Toggle Oasis
                  </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
  togLake(){
    lake = true;
  }
}
  

class FBiome extends React.Component {
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
        bi2();
        fBiome();
        
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
          <div float = "left" display = "inline">
            <button id = "bTwo" onClick={this.showMenu} class = "Spec-button"  display = "none">
              Forest
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
                  <div className = "Big-title" >
                      Obstacles: 
                    </div>
                    <div className = "Spec-Title">
                      Frequency of Trees (From 1-5):
                  <form> 
                    <input id = "trees" type="number" name="quantity" min="1" max="5" /> 
                  </form> 
  
                  </div>
                  <div className = "Big-title" >
                      Land Elements: 
                    </div>
                  <button class = "dropdown-content" onClick = {() => this.togPath()}>
                       Toggle Path 
                    </button>
                  <button class = "dropdown-content" onClick = {() => this.togRiv()}> 
                       Toggle River 
                    </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
    togPath(){
      path = true;
    }
    togRiv(){
      river = true;
    }
  }
    

  class PBiome extends React.Component {
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
      bi3();
      pBiome();
          
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
        <div float = "left" display = "inline">
          <button id = "bThree" onClick={this.showMenu} class = "Spec-button" display = "none">
            Plains
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
                <div className = "Big-title" >
                    Obstacles: 
                  </div>
                  <div className = "Spec-Title">
                    Frequency of Brush (From 1-5):
                <form> 
                  <input id = "brush" type="number" name="quantity" min="0" max="5" /> 
                </form> 
                  Frequency of Rocks (From 1-5):
                <form> 
                  <input id = "procks" type="number" name="quantity" min="0" max="5" /> 
                </form> 

                </div>
                <div className = "Big-title" >
                    Land Elements: 
                  </div>
                <button class = "dropdown-content" onClick = {() => this.togPath()}>
                     Toggle Path 
                  </button>
                <button class = "dropdown-content" onClick = {() => this.togRiv()}> 
                     Toggle River 
                  </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
  togPath(){
    path = true;
  }
  togRiv(){
    river = true;
  }
}
  
      
  class MBiome extends React.Component {
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
      bi4();
      mBiome();

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
          <div float = "left" display = "inline">
            <button id = "bFour" onClick={this.showMenu} class = "Spec-button"  display = "none">
              Mountain
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
                  <div className = "Big-title" >
                      Obstacles: 
                    </div>
                    <div className = "Spec-Title">
                      Frequency of Drops (From 1-5):
                  <form> 
                    <input id = "mdrops" type="number" name="quantity" min="0" max="5" /> 
                  </form> 
                    Frequency of Boulders (From 1-5):
                  <form> 
                    <input id = "mrocks" type="number" name="quantity" min="0" max="5" /> 
                  </form>
            {/* 
                    Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
                    <form> 
                    <input id = "msize" type="number" name="quantity" min="1" max="3" /> 
                  </form> 
            */}
  
                  </div>
                  <div className = "Big-title" >
                      Land Elements: 
                    </div>
                  <button class = "dropdown-content" onClick = {() => this.togPath()}>
                       Toggle Path 
                    </button>
                  <button class = "dropdown-content" onClick = {() => this.togRiv()}> 
                       Toggle Waterfall
                    </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
    togPath(){
      path = true;
    }
    togRiv(){
      river = true;
    }
  }
    
   

  class GBiome extends React.Component {
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
      bi5();
      gBiome();
      
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
      <div float = "left" display = "inline">
        <button id = "bFive" onClick={this.showMenu} class = "Spec-button"  display = "none">
          Underground
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
              <div className = "Big-title" >
                  Obstacles: 
                </div>
                <div className = "Spec-Title">
                  Frequency of Caverns (From 1-5):
              <form> 
                <input id = "gdrops" type="number" name="quantity" min="0" max="5" /> 
              </form> 
                Frequency of Boulders (From 1-5):
              <form> 
                <input id = "grocks" type="number" name="quantity" min="0" max="5" /> 
                </form> 
        {/*        
                Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
              <form> 
                <input id = "gsize" type="number" name="quantity" min="1" max="3" /> 
              </form>
        */}

              </div>
              <div className = "Big-title" >
                  Land Elements: 
                </div>
              <button class = "dropdown-content" onClick = {() => this.togPath()}>
                   Toggle Path 
                </button>
              <button class = "dropdown-content" onClick = {() => this.togRiv()}> 
                   Toggle Underground River 
                </button>
              <button class = "dropdown-content" onClick = {() => this.togLake()}> 
                   Toggle Underground Lake
                </button>
            </div>
          )
          : (
            null
          )
      }
    </div>
  );
}

togPath(){
  path = true;
}
togRiv(){
  river = true;
}
togLake(){
  lake=true;
}
}

  class WBiome extends React.Component {
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
      bi6();
      wBiome();
      
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
        <div float = "left" display = "inline">
          <button id = "bSix" onClick={this.showMenu} class = "Spec-button"  display = "none">
            Underwater
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
                <div className = "Big-title" >
                    Obstacles: 
                </div>
                <div className = "Spec-Title">

                    Frequency of Coral (From 1-5):
                <form> 
                  <input id = "coral" type="number" name="quantity" min="0" max="5" /> 
                </form> 

                  Frequency of Rock Formations (From 1-5):
                <form> 
                  <input id = "wrocks" type="number" name="quantity" min="0" max="5" /> 
                </form>
                {/*
                  Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
                <form> 
                  <input id = "wsize" type="number" name="quantity" min="1" max="3" /> 
                </form> 
                */}

                </div>
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








//=================================================C=A=R=D==========================================================

    
  


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

    document.getElementById("myDIV").style.display = "none";

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    
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
                <button class = "dropdown-content" onClick = {() => wmapSpecs()}>
                   World </button>
                <button class = "dropdown-content" onClick = {() => this.eventL()}> 
                  Large: 30 x 30 </button>
                <button class = "dropdown-content" onClick = {() => this.eventM()}>
                  Medium: 20 x 20 </button>
                <button class = "dropdown-content" onClick = {() => this.eventS()}>
                  Small: 10 x 10 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
  
  eventL(){
    mapSpecs()
    gridSize = 30;
    mapType = "Map";
    resetOptions()
  }
  eventM(){
    mapSpecs()
    gridSize = 20;
    mapType = "Map";
    resetOptions()
  }
  eventS(){
    mapSpecs()
    gridSize = 10;
    mapType = "Map";
    resetOptions()
  }
  
}

//===========================================GRID CLASSES & FUNCTIONS====================================================

class Grid extends React.Component {
  render(){
    return(
      <div>
        <div className = "Spec-title" display = "block">
          Grid:
          </div>
          {this.displayGrid}          
        </div>
    );
  }

  displayGrid(){
      return(
        <div>
         <div className="board-row">
            {grid[0][0]}
            {grid[0][1]}
            {grid[0][2]}
            {grid[0][3]}
            {grid[0][4]}
            {grid[0][5]}
            {grid[0][6]}
            {grid[0][7]}
            {grid[0][8]}
            {grid[0][9]}
            {grid[0][10]}
         </div>
         <div className="board-row">
           {grid[1]}
          </div>
          <div className="board-row">
            {grid[2]}
          </div>
         <div className="board-row">
           {grid[3]}
         </div>
          <div className="board-row">
            {grid[4]}
         </div>
          <div className="board-row">
            {grid[5]}
          </div>
          <div className="board-row">
           {grid[6]}
          </div>
          <div className="board-row">
            {grid[7]}
          </div>
         <div className="board-row">
           {grid[8]}
          </div>
         <div className="board-row">
           {grid[9]}
         </div>
        </div> 
      );
    }
  
}


function getTempEl(){
  return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}

function CreateMSquare(){
  if(biome === "Des"){
    var qSandChance = (5 * parts[6] )
    var dRocksChance = (5 * parts[7])

    var qsCNum = Math.floor(Math.random() * (qSandChance - 0 + 1)) + 0;
    var drCNum = Math.floor(Math.random() * (dRocksChance - 0 + 1)) + 0;

    var tempEl = getTempEl(); //Element
    var tempEl2 = getTempEl();

    if(tempEl <= qsCNum){
      return(
      <button className="QSDsquare">
      </button>
      );
    }
    else if(tempEl2 <= drCNum){
      return(
      <button className="DRDsquare">
      </button>
      );
    }
    else
    return(    
      <button className="Dsquare">
      </button>
    );
  }
  else if(biome === "For"){
    var treeChance = (5 * parts[6])

    var tCNum = Math.floor(Math.random() * (treeChance - 0 + 1)) + 0;

    var tempEl3 = getTempEl();

    if(tempEl3 <= tCNum){
      return(
      <button className="TFsquare">
      </button>
      );
    }
    return(
      <button className="Fsquare">
      </button>
    );
  }
  else if(biome === "Pla"){
    var brushChance = (5 * parts[6])
    var pRocksChance = (5 * parts[7])

    var bCNum = Math.floor(Math.random() * (brushChance - 0 + 1)) + 0;
    var prCNum = Math.floor(Math.random() * (pRocksChance - 0 + 1)) + 0;

    var tempEl4 = getTempEl();
    var tempEl5 = getTempEl();

  if(tempEl4 <= bCNum){
      return(
      <button className="BPsquare">
      </button>
      );
    }
    else if(tempEl5 <= prCNum){
      return(
      <button className="RPsquare">
      </button>
      );
    }
    else
    return(
      <button className="Psquare">
      </button>
    );
  }
  else if(biome === "Mou"){
    var mDropsChance = (5 * parts[6])
    var mRocksChance = (5 * parts[7])

    var mdCNum = Math.floor(Math.random() * (mDropsChance - 0 + 1)) + 0;
    var mrCNum = Math.floor(Math.random() * (mRocksChance - 0 + 1)) + 0;

    var tempEl6 = getTempEl();
    var tempEl7 = getTempEl();

    if(tempEl6 <= mdCNum){
      return(
      <button className="MDsquare">
      </button>
      );
    }
    else if(tempEl7 <= mrCNum){
      return(
      <button className="MRsquare">
      </button>
      );
    }
    else
    return(
      <button className="Msquare">
      </button>
    );
  }
  else if(biome === "Gro"){
    var gDropsChance = (5 * parts[6])
    var gRocksChance = (5 * parts[7])

    var gdCNum = Math.floor(Math.random() * (gDropsChance - 0 + 1)) + 0;
    var grCNum = Math.floor(Math.random() * (gRocksChance - 0 + 1)) + 0;

    var tempEl8 = getTempEl();
    var tempEl9 = getTempEl();

    if(tempEl8 <= gdCNum){
      return(
      <button className="GDsquare">
      </button>
      );
    }
    else if(tempEl9 <= grCNum){
      return(
      <button className="GRsquare">
      </button>
      );
    }
    else
    return(
      <button className="Gsquare">
      </button>
    );
  }
  else if(biome === "Wat"){
    var coralChance = (5 * parts[6])
    var wRocksChance = (5 * parts[7])

    var cCNum = Math.floor(Math.random() * (coralChance - 0 + 1)) + 0;
    var wrCNum = Math.floor(Math.random() * (wRocksChance - 0 + 1)) + 0;

    var tempEl10 = getTempEl();
    var tempEl11 = getTempEl();

    if(tempEl10 <= cCNum){
      return(
      <button className="CWsquare">
      </button>
      );
    }
    else if(tempEl11 <= wrCNum){
      return(
      <button className="WRsquare">
      </button>
      );
    }
    else
    return(
      <button className="Wsquare">
      </button>
    );
  }
}

//Returns an array - grid. Grid consists of a number of gridRow arrays. gridRow arrays contain a number of "Squares", aka, buttons.

function createMGrid(){
  var i;
  var count = 0;
  var gridRow = [];
  var ngrid = [gridSize];

  for(i = 0; i < (gridSize * gridSize); i++){
    if(count === gridSize){
      ngrid.push(gridRow);
      gridRow = []
    }
    gridRow.push(<CreateMSquare />);
    count++
  }
  return ngrid;
}


function createWGrid(){

}

/*==============S=P=A=G=H=E=T=T=I===C=O=D=E===A=L=E=R=T================================


biomeControly(){
    return(
      <div>
        <Card/>
        </div>
    );
  }


          <button id="button1" className = "Spec-button" visibility= "hidden" onClick = {() => this.dBiome()}>  Desert</button> 
          <button id="button2" className = "Spec-button" visibility= "hidden" onClick = {() => this.fBiome()}>  Forest</button>
          <button id="button3" className = "Spec-button" visibility= "hidden" onClick = {() => this.pBiome()}>  Plains</button>
          <button id="button4" className = "Spec-button" visibility= "hidden" onClick = {() => this.mBiome()}>  Mountain</button>
          <button id="button5" className = "Spec-button" visibility= "hidden" onClick = {() => this.gBiome()}>  Underground</button>
          <button id="button6" className = "Spec-button" visibility= "hidden" onClick = {() => this.wBiome()}>  Underwater</button>

    document.getElementById("myDIV").style.display = "none";
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("button5").style.visibility = "hidden";
    document.getElementById("button6").style.visibility = "hidden";
    
          <table>
            <tr>
              <td> 
                <DBiome/>
              </td>
              <td> 
                <FBiome/>
              </td>
              <td> 
                <PBiome/>
              </td>
              <td> 
                <MBiome/>
              </td>
              <td> 
                <GBiome/>
            </td>
              <td> 
                <WBiome/>
              </td>
            </tr>
          </table>
        </div>

          wTest(){
    while(gener === false){

    }
  }

  function biomeStart(){
  if(biome === "Des"){

  }
  else if(biome === "For"){

  }
  else if(biome === "Pla"){

  }
  else if(biome === "Mou"){

  }
  else if(biome === "Gro"){

  }
  else if(biome === "Wat"){

  }
  else
    alert("Biome not defined.")
}

function Square(props) {
  return (
    <div className="whateverSquare">
    </div>
  );
}

*/
//=====================================================================================



function bi1(){
  document.getElementById("bTwo").style.display = "none"
  document.getElementById("bThree").style.display = "none"
  document.getElementById("bFour").style.display = "none"
  document.getElementById("bFive").style.display = "none"
  document.getElementById("bSix").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
  
}

function bi2(){
  document.getElementById("bOne").style.display = "none"
  document.getElementById("bThree").style.display = "none"
  document.getElementById("bFour").style.display = "none"
  document.getElementById("bFive").style.display = "none"
  document.getElementById("bSix").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
  
}

function bi3(){
  document.getElementById("bTwo").style.display = "none"
  document.getElementById("bOne").style.display = "none"
  document.getElementById("bFour").style.display = "none"
  document.getElementById("bFive").style.display = "none"
  document.getElementById("bSix").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
}

function bi4(){
  document.getElementById("bTwo").style.display = "none"
  document.getElementById("bThree").style.display = "none"
  document.getElementById("bOne").style.display = "none"
  document.getElementById("bFive").style.display = "none"
  document.getElementById("bSix").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
}

function bi5(){
  document.getElementById("bTwo").style.display = "none"
  document.getElementById("bThree").style.display = "none"
  document.getElementById("bFour").style.display = "none"
  document.getElementById("bOne").style.display = "none"
  document.getElementById("bSix").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
}

function bi6(){
  document.getElementById("bTwo").style.display = "none"
  document.getElementById("bThree").style.display = "none"
  document.getElementById("bFour").style.display = "none"
  document.getElementById("bFive").style.display = "none"
  document.getElementById("bOne").style.display = "none"

  document.getElementById("genButton2").style.display = "block"
}

function resetOptions(){
  document.getElementById("bSix").style.display = "inline"
  document.getElementById("bTwo").style.display = "inline"
  document.getElementById("bThree").style.display = "inline"
  document.getElementById("bFour").style.display = "inline"
  document.getElementById("bFive").style.display = "inline"
  document.getElementById("bOne").style.display = "inline"

  document.getElementById("genButton2").style.display = "none"
}

function mapSpecs() {
  //Removing other option if necessary
  if(document.getElementById("Wland").style.display === "block"){
    document.getElementById("Wland").style.display = "none";
    document.getElementById("Wwater").style.display = "none";
    document.getElementById("genButton").style.display = "none"
  }
  //removing done

  var x = document.getElementById("myDIV");
  x.style.display = "block";

}

function wmapSpecs() {
   //Removing other option if necessary
  if(document.getElementById("myDIV").style.display === "block"){
    document.getElementById("myDIV").style.display = "none";

    document.getElementById("bOne").style.display = "none"
    document.getElementById("bTwo").style.display = "none"
    document.getElementById("bThree").style.display = "none"
    document.getElementById("bFour").style.display = "none"
    document.getElementById("bFive").style.display = "none"
    document.getElementById("bSix").style.display = "none"
    document.getElementById("genButton2").style.display = "none"
  }
  //removing done

  var x = document.getElementById("Wland");
  x.style.display = "block";

  document.getElementById("Wwater").style.display = "block";
  document.getElementById("genButton").style.display = "inline"
  //mapType = "WMap";
  //gridSize = 100;
}



export default App;
