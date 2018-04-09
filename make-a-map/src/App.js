import React, { Component } from 'react';
import logo from './logo.svg';

var gridSize = null;
var mapType = null;
var biome = null;
var path = null;
var river = null;
var lake = null;
var tbl;

var parts = [mapType, gridSize, biome, path, river, lake];

//Must use {//[Text...]} to comment in html


/*
  Things to add in future:

  Handle Click function to allow numbering certain tiles.

  Random bends in rivers and paths

  World Map function.
    - Also add possible city locations and names
    - Make biomes make sense.

  Variance in size for obstacles and land elements.

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
        resetOptions();
      }
      else{


      parts.push(document.getElementById("qsand").value) // parts[6]
      parts.push(document.getElementById("drocks").value) //7
      //parts.push(document.getElementById("dsize").value) 

      tbl = createMGrid();
      }
    }
    else if(biome === "For"){
      if(document.getElementById("trees").value === ""){
        
        alert("Input must be filled out!")
        resetOptions();
      }
      else{
      parts.push(document.getElementById("trees").value) //parts[6]

      tbl = createMGrid();
      }
    }
    else if(biome === "Pla"){
      if(document.getElementById("brush").value === "" || document.getElementById("procks").value === "") {
        
        alert("Input must be filled out!")
        resetOptions();
      }
      else{
      parts.push(document.getElementById("brush").value) //parts[6]
      parts.push(document.getElementById("procks").value) //parts 7

      tbl = createMGrid();
      }
    }
    else if(biome === "Mou"){
      if(document.getElementById("mdrops").value === "" || document.getElementById("mrocks").value === ""){
        
        alert("Input must be filled out!")
        resetOptions();
      }
      else{
      parts.push(document.getElementById("mdrops").value) //parts[6]
      parts.push(document.getElementById("mrocks").value) //parts 7
      //parts.push(document.getElementById("msize").value) //parts 8

      tbl = createMGrid();
      }
    }
    else if(biome === "Gro"){
      if(document.getElementById("gdrops").value === "" || document.getElementById("grocks").value === "" ){
        
        alert("Input must be filled out!")
        resetOptions();
      }
      else{
      
      parts.push(document.getElementById("gdrops").value) //parts[6]
      parts.push(document.getElementById("grocks").value) //parts 7
      //parts.push(document.getElementById("gsize").value) //parts 8

      tbl = createMGrid();
      }
    }
    else if(biome === "Wat"){
      if(document.getElementById("coral").value === "" || document.getElementById("wrocks").value === "" ){
        
        alert("Input must be filled out!")
        resetOptions();
      }
      else{
      
      parts.push(document.getElementById("coral").value) //parts[6]
      parts.push(document.getElementById("wrocks").value) //parts 7
     // parts.push(document.getElementById("wsize").value) //parts 8

     tbl = createMGrid();
      }
    }

    

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
          <button id = "bOne" className = "Spec-button" display = "none" onClick = {this.showMenu}>
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
                <button className = "dropdown-content" onClick = {() => this.togLake()}> 
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
            <button id = "bTwo" onClick={this.showMenu} className = "Spec-button"  display = "none">
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
                  <button className = "dropdown-content" onClick = {() => this.togPath()}>
                       Toggle Path 
                    </button>
                  <button className = "dropdown-content" onClick = {() => this.togRiv()}> 
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
          <button id = "bThree" onClick={this.showMenu} className = "Spec-button" display = "none">
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
                <button className = "dropdown-content" onClick = {() => this.togPath()}>
                     Toggle Path 
                  </button>
                <button className = "dropdown-content" onClick = {() => this.togRiv()}> 
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
            <button id = "bFour" onClick={this.showMenu} className = "Spec-button"  display = "none">
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
                  <button className = "dropdown-content" onClick = {() => this.togPath()}>
                       Toggle Path 
                    </button>
                  <button className = "dropdown-content" onClick = {() => this.togRiv()}> 
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
        <button id = "bFive" onClick={this.showMenu} className = "Spec-button"  display = "none">
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
              <button className = "dropdown-content" onClick = {() => this.togPath()}>
                   Toggle Path 
                </button>
              <button className = "dropdown-content" onClick = {() => this.togRiv()}> 
                   Toggle Underground River 
                </button>
              <button className = "dropdown-content" onClick = {() => this.togLake()}> 
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
          <button id = "bSix" onClick={this.showMenu} className = "Spec-button"  display = "none">
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
        <button onClick={this.showMenu} className = "dropbtn">
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
                {/*
                  <button className = "dropdown-content" onClick = {() => wmapSpecs()}>
                   World </button>
                */}

                <button className = "dropdown-content" onClick = {() => this.eventL()}> 
                  Large: 30 x 30 </button>
                <button className = "dropdown-content" onClick = {() => this.eventM()}>
                  Medium: 20 x 20 </button>
                <button className = "dropdown-content" onClick = {() => this.eventS()}>
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
        <div className = "Spec-title"  display = "block">
          Map:
          </div>
          <table id = "GridTable" className = "GridTabl">
            </table>         
        </div>
    );
  }

}


function getTempEl(){
  return Math.random() * (100 - 0 + 1) + 0;
}

function createMSquare(){
  if(biome === "Des"){
    var qSandChance = (5 * parts[6] )
    var dRocksChance = (5 * parts[7])

    var qsCNum = Math.floor(Math.random() * (qSandChance - 0 + 1)) + 0;
    var drCNum = Math.floor(Math.random() * (dRocksChance - 0 + 1)) + 0;

    var tempEl = getTempEl(); //Element
    var tempEl2 = getTempEl();

    if(tempEl <= qsCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "QSDSquare");
      return(
        btn
      );
    }
    else if(tempEl2 <= drCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "DRDSquare");
      return(
        btn
      );
    }
    else
    var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.className = "DSquare";
      return(
        btn
      );
  }
  else if(biome === "For"){
    var treeChance = (5 * parts[6])

    var tCNum = Math.floor(Math.random() * (treeChance - 0 + 1)) + 0;

    var tempEl3 = getTempEl();

    if(tempEl3 <= tCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "TFSquare");
      return(
        btn
      );
    }
    var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "FSquare");
      return(
        btn
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
    var btn = document.createElement('INPUT');
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "BPSquare");
    return(
      btn
    );
    }
    else if(tempEl5 <= prCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "RPSquare");
      return(
        btn
      );
    }
    else
    var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "PSquare");
      return(
        btn
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
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "MDSquare");
      return(
        btn
      );
    }
    else if(tempEl7 <= mrCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "MRSquare");
      return(
        btn
      );
    }
    else
    var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "MSquare");
      return(
        btn
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
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "GDSquare");
      return(
        btn
      );
    }
    else if(tempEl9 <= grCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "GRSquare");
      return(
        btn
      );
    }
    else
    var btn = document.createElement('INPUT');
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "DSquare");
    return(
      btn
    );;
  }
  else if(biome === "Wat"){
    var coralChance = (5 * parts[6])
    var wRocksChance = (5 * parts[7])

    var cCNum = Math.floor(Math.random() * (coralChance - 0 + 1)) + 0;
    var wrCNum = Math.floor(Math.random() * (wRocksChance - 0 + 1)) + 0;

    var tempEl10 = getTempEl();
    var tempEl11 = getTempEl();

    if(tempEl10 <= cCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "CWSquare");
      return(
        btn
      );
    }
    else if(tempEl11 <= wrCNum){
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "WRSquare");
      return(
        btn
      );
    }
    else
      var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "WSquare");
      return(
        btn
      );

  }
}

//Returns an array - grid. Grid consists of a number of gridRow arrays. gridRow arrays contain a number of "Squares", aka, buttons.

function createMGrid(){
  var i;
  var j;

  var ngrid = [];

  var tab = document.getElementById("GridTable");

  for(i = 0; i < (gridSize); i++){

    var row = document.createElement("tr");

    for(j = 0; j < gridSize; j++){

    var cell = document.createElement("td");
    cell.appendChild(createMSquare())
    row.appendChild(cell);

  }
  tab.appendChild(row);
  }
  
  if(lake === true){
    makeLake();
  }
  if(river === true){
    makeRiver();
  }
  if(path === true){
    makePath();
  }

}

function makeRiver(){
var rivStart = Math.round(Math.random() * (gridSize - 0 + 1));
var horizontalChance = Math.round(Math.random() * (100 - 0 + 1));
var i;

if(rivStart >= (gridSize - 1)){
  rivStart = gridSize - 2;
}

if(horizontalChance < 50) //vertical river

for(i = 0; i < gridSize; i++){
  document.getElementById("GridTable").rows[i].cells[rivStart].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[i].cells[rivStart + 1].children[0].style.background = "rgb(67, 95, 189)";
  }

else{ //horizontal river
  for(i = 0; i < gridSize; i++){
    document.getElementById("GridTable").rows[rivStart].cells[i].children[0].style.background = "rgb(67, 95, 189)";
    document.getElementById("GridTable").rows[rivStart + 1].cells[i].children[0].style.background = "rgb(67, 95, 189)";
    }
}
}


function makePath(){
  var rivStart = Math.round(Math.random() * (gridSize - 0 + 1));
  var horizontalChance = Math.round(Math.random() * (100 - 0 + 1));
  var i;
  
  if(rivStart >= (gridSize - 1)){
    rivStart = gridSize - 2;
  }
  
  if(horizontalChance < 50) //vertical river
  
  for(i = 0; i < gridSize; i++){
    document.getElementById("GridTable").rows[i].cells[rivStart].children[0].style.background = "rgb(245, 230, 65)";
    document.getElementById("GridTable").rows[i].cells[rivStart + 1].children[0].style.background = "rgb(245, 230, 65)";
    }
  
  else{ //horizontal river
    for(i = 0; i < gridSize; i++){
      document.getElementById("GridTable").rows[rivStart].cells[i].children[0].style.background = "rgb(245, 230, 65)";
      document.getElementById("GridTable").rows[rivStart + 1].cells[i].children[0].style.background = "rgb(245, 230, 65)";
      }
  }
  }


function makeLake(){
  var lakeRow = Math.round(Math.random() * (gridSize - 0 + 1));
  var lakeCol = Math.round(Math.random() * (gridSize - 0 + 1));

  console.log(gridSize)
  console.log(lakeRow);
  console.log(lakeCol);


  if(lakeCol <= 2){
    lakeCol = 3;
  }
  if(lakeRow <= 2){
    lakeRow = 3;
  }

  if(lakeRow >= gridSize - 3){
    lakeRow = (gridSize - 5);
  }
  if(lakeCol >= gridSize - 3){
    lakeCol = (gridSize - 5);
  }

  console.log(gridSize)
  console.log(lakeRow);
  console.log(lakeCol);
  console.log(document.getElementById("GridTable"))
  console.log(document.getElementById("GridTable").rows[lakeRow])
  console.log(document.getElementById("GridTable").rows[lakeRow].cells[lakeCol])
  console.log(document.getElementById("GridTable").rows[lakeRow].cells[lakeCol].children[0])
  console.log(document.getElementById("GridTable").rows[lakeRow].cells[lakeCol].children[0].style.background)
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+1].cells[lakeCol].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol+1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow-1].cells[lakeCol].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol-1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+1].cells[lakeCol+1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow-1].cells[lakeCol-1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+1].cells[lakeCol-1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow-1].cells[lakeCol+1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+2].cells[lakeCol-1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+2].cells[lakeCol].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+2].cells[lakeCol+1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+2].cells[lakeCol+2].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow-1].cells[lakeCol+2].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+1].cells[lakeCol+2].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol+2].children[0].style.background = "rgb(67, 95, 189)";

  document.getElementById("GridTable").rows[lakeRow+3].cells[lakeCol-1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+3].cells[lakeCol].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+3].cells[lakeCol+1].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+3].cells[lakeCol+2].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow+3].cells[lakeCol+3].children[0].style.background = "rgb(67, 95, 189)";

  document.getElementById("GridTable").rows[lakeRow+2].cells[lakeCol+3].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow-1].cells[lakeCol+3].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol+3].children[0].style.background = "rgb(67, 95, 189)";
  document.getElementById("GridTable").rows[lakeRow + 1].cells[lakeCol+3].children[0].style.background = "rgb(67, 95, 189)";
  
}


function createWGrid(){
  //TODO
}

/*==============S=P=A=G=H=E=T=T=I===C=O=D=E===A=L=E=R=T================================

  

  var btn = document.createElement('INPUT');
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "WSquare");

      var cell = document.createElement("td");
      cell.appendChild("td")

  var lakeCenter = document.getElementById("GridTable").rows[lakeRow].cells[lakeCol];

  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol].deleteCell();
  document.getElementById("GridTable").rows[lakeRow].cells[lakeCol].insertCell(cell);
  

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

function getTbl(){
  return(
    tbl
  );
}

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
