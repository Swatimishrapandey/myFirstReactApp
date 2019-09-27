
import React from 'react';
import AppStyle from './AppStyle.css';
let myDefaultStyling  = {
                        color:'#800080', display:'inline-block','text-decoration':'none'
                      };

class Aggregate extends React.Component{
  render(){
    return(
      <div style={{width:'50%',display:'inline-block'}}>
        <title>This is my first react app</title>
        <h2 style={{'text-align':'center'}}>Number Text</h2>
      </div>
    );
  }
} 
class Filter extends React.Component{
  render(){
    return(
      <div>
        <img/>
        <input type='text'/>
        <button>Search</button>
      </div>
    );
  }
}
class Playlist extends React.Component{
  render(){
    return(
      <div style={{...myDefaultStyling,width:'25%'}}>
        <h3>playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    let name = "swati"
    let headerStyle = {color:'green', 'font-size':'50px'}
    return(
      <div className="Appm">
        <h1 style={headerStyle}>Hi {name} </h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      
      </div>
    );
  }
}
export default App;

/*import React from 'react';
import First from './first';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <First />
    </div>
  );
}

export default App;*/
