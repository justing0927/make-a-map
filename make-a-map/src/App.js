import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var gridSize = null;
var mapType = null;
var biome = null;
var gener = false;
var path = null;
var river = null;
var lake = null;

//<!- this is how you comment in html ->

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

        </div>

        <div className = "Spec-title" id = "Wland" display = "none">
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
            <button id = "genButton" visibility = "hidden" className = "dropbtn2" onClick = {() => this.gen1()}> 
              Generate! </button>
          </div>
        </div>
      </div>
    );
  }

  dBiome(){
    biome = "Des"
  }
  fBiome(){
    biome = "For"
  }
  pBiome(){
    biome = "Pla"
  }
  mBiome(){
    biome = "Mou"
  }
  gBiome(){
    biome = "Gro"
  }
  wBiome(){
    biome = "Wat"
  }

  wTest(){
    while(gener == false){

    }
  }
  
  gen1(){
    if(document.getElementById("lndmss").value == "" || document.getElementById("waterfreq").value == ""){
      alert("Input must be filled out!")
    }
    else  
      gener = true;
    }
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
          <button onClick={this.clicke()} class = "Spec-button" display = "inline" id = "bOne" visibility= "hidden">
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
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                </form> 
                    Frequency of Rocks (From 1-5):
                <form> 
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                </form> 

                Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
                <form> 
                  <input id = "lndmss" type="number" name="quantity" min="1" max="3" /> 
                </form> 

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
  clicke(){ //this function is proof I am human garbage.
    this.showMenu;
    bi1();
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
            <button onClick={this.clicke()} class = "Spec-button" id = "bTwo" display = "inline" visibility= "hidden">
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
                    <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
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
    clicke(){ //this function is proof I am human garbage.
      this.showMenu
      bi2();
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
          <button onClick={this.clicke()} class = "Spec-button" display = "inline" id = "bThree" visibility= "hidden">
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
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                </form> 
                  Frequency of Rocks (From 1-5):
                <form> 
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
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
  clicke(){ //this function is proof I am human garbage.
    this.showMenu
    bi3();
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
            <button onClick={this.clicke()} class = "Spec-button" id = "bFour" display = "inline"  visibility= "hidden">
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
                    <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                  </form> 
                    Frequency of Boulders (From 1-5):
                  <form> 
                    <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                  </form> 
                    Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
                    <form> 
                    <input id = "lndmss" type="number" name="quantity" min="1" max="3" /> 
                  </form> 
  
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
    clicke(){ //this function is proof I am human garbage.
      this.showMenu
      bi4();
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
        <button onClick={this.clicke()} class = "Spec-button" id = "bFive" display = "inline" visibility= "hidden">
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
                <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
              </form> 
                Frequency of Boulders (From 1-5):
              <form> 
                <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
              </form> 
                Variance in Size (1 for no variance, 2 for moderate, 3 for high.):
              <form> 
                <input id = "lndmss" type="number" name="quantity" min="1" max="3" /> 
              </form> 

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
clicke(){ //this function is proof I am human garbage.
  this.showMenu
  bi5();
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
          <button onClick={this.clicke()} class = "Spec-button" id = "bSix" display = "inline" visibility= "hidden">
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
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                </form> 
                  Frequency of Rock Formations (From 1-5):
                <form> 
                  <input id = "lndmss" type="number" name="quantity" min="1" max="5" /> 
                </form> 

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
  clicke(){ //this function is proof I am human garbage.
    this.showMenu
    bi6();
  }
}








//=============================================================================================

    
  


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
  }
  eventM(){
    mapSpecs()
    gridSize = 20;
    mapType = "Map";
  }
  eventS(){
    mapSpecs()
    gridSize = 10;
    mapType = "Map";
  }
  
}

function Square(props) {
  return (
    <div className="waterSquare">
    </div>
  );
}

class Grid extends React.Component {
  constructor(){
    super();
    if(this.gridSize == null){
      alert("Error: Grid size not selected.");
    }
    else if(this.mapType == "WMap")
      this.render();
    else if(this.biome == null){
      alert("Error: Biome type not selected.");
    }
    else
      this.render();
  }

  render(){
    var tmp = [];
    for (var i = 0; i < this.props.level; i++) {
      tmp.push(i);
    }
    var indents = tmp.map(function (i) {
      return (
        <span className='waterSquare'></span>
      );
    });
  
    return (
  
      {indents}
  
    );
  }
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
*/
//=====================================================================================


function biomeStart(){
  if(biome == "Des"){

  }
  else if(biome == "For"){

  }
  else if(biome == "Pla"){

  }
  else if(biome == "Mou"){

  }
  else if(biome == "Gro"){

  }
  else if(biome == "Wat"){

  }
  else
    alert("Biome not defined.")
}

function bi1(){
  document.getElementById("bTwo").style.visibility = "hidden"
  document.getElementById("bThree").style.visibility = "hidden"
  document.getElementById("bFour").style.visibility = "hidden"
  document.getElementById("bFive").style.visibility = "hidden"
  document.getElementById("bSix").style.visibility = "hidden"
}

function bi2(){
  document.getElementById("bOne").style.visibility = "hidden"
  document.getElementById("bThree").style.visibility = "hidden"
  document.getElementById("bFour").style.visibility = "hidden"
  document.getElementById("bFive").style.visibility = "hidden"
  document.getElementById("bSix").style.visibility = "hidden"
}

function bi3(){
  document.getElementById("bTwo").style.visibility = "hidden"
  document.getElementById("bOne").style.visibility = "hidden"
  document.getElementById("bFour").style.visibility = "hidden"
  document.getElementById("bFive").style.visibility = "hidden"
  document.getElementById("bSix").style.visibility = "hidden"
}

function bi4(){
  document.getElementById("bTwo").style.visibility = "hidden"
  document.getElementById("bThree").style.visibility = "hidden"
  document.getElementById("bOne").style.visibility = "hidden"
  document.getElementById("bFive").style.visibility = "hidden"
  document.getElementById("bSix").style.visibility = "hidden"
}

function bi5(){
  document.getElementById("bTwo").style.visibility = "hidden"
  document.getElementById("bThree").style.visibility = "hidden"
  document.getElementById("bFour").style.visibility = "hidden"
  document.getElementById("bOne").style.visibility = "hidden"
  document.getElementById("bSix").style.visibility = "hidden"
}

function bi6(){
  document.getElementById("bTwo").style.visibility = "hidden";
  document.getElementById("bThree").style.visibility = "hidden";
  document.getElementById("bFour").style.visibility = "hidden";
  document.getElementById("bFive").style.visibility = "hidden";
  document.getElementById("bOne").style.visibility = "hidden";
}

function mapSpecs() {
  //Removing other option if necessary
  if(document.getElementById("Wland").style.display == "block"){
    document.getElementById("Wland").style.display = "none";
    document.getElementById("Wwater").style.display = "none";
    document.getElementById("genButton").style.visibility = "hidden";
  }
  //removing done

  var x = document.getElementById("myDIV");
  x.style.display = "block";

}

function wmapSpecs() {
   //Removing other option if necessary
  if(document.getElementById("myDIV").style.display == "block"){
    document.getElementById("myDIV").style.display = "none";

    document.getElementById("bOne").style.visibility = "hidden"
    document.getElementById("bTwo").style.visibility = "hidden"
    document.getElementById("bThree").style.visibility = "hidden"
    document.getElementById("bFour").style.visibility = "hidden"
    document.getElementById("bFive").style.visibility = "hidden"
    document.getElementById("bSix").style.visibility = "hidden"
    document.getElementById("genButton").style.visibility = "hidden";
  }
  //removing done

  var x = document.getElementById("Wland");
  x.style.display = "block";

  document.getElementById("Wwater").style.display = "block";
  document.getElementById("genButton").style.visibility = "visible";
  //mapType = "WMap";
  //gridSize = 100;
}

export default App;
