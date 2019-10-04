
import React from 'react';
import AppStyle from './AppStyle.css';
import { timeout } from 'q';
let myDefaultStyling  = {
                        color:'#800080', display:'inline-block','text-decoration':'none'
                      };
 let fakeStaticData = {
  user:{
    name:'Swati',
    playlist:[
                {name:'My feb songs',
                 songs:[
                          {
                            first:'fitd1', duration:2000},
                            {second:'jbjknk2', duration:2000},
                            {third:'nxknknk3', duration:2000},
                           {fourth:'jxkjkjk4', duration:2000}
                           
                          ]
                        },
      {name:'My old songs',
      songs:[{
        first:'fitd5', duration:2000},
                            {second:'jbjknk6', duration:2000},
                            {third:'nxknknk7', duration:2000},
                           {fourth:'jxkjkjk8', duration:2000}
      ]},
      {name:'My new songs',
      songs:[{
        first:'fitd9', duration:2000},
                            {second:'jbjknk10', duration:2000},
                            {third:'nxknknk11', duration:2000},
                           {fourth:'jxkjkjk12', duration:2000}
      ]},
      {name:'My dj songs',
      songs:[{
        first:'fitd13', duration:2000},
                            {second:'jbjknk14', duration:2000},
                            {third:'nxknknk15', duration:2000},
                           {fourth:'jxkjkjk16', duration:2000}
      ]},
    ]
    
  }
 };                     

class Aggregate extends React.Component{
  render(){
    return(
      <div style={{width:'50%',display:'inline-block'}}>
        <title>This is my first react app</title>
        <h2>{ this.props.playlists.length} Text</h2>
      </div>
    );
  }
} 
class HoursCounter extends React.Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs,eachPlaylist)=>{
    return songs.concat(eachPlaylist.songs)
    },[])
    let totalHours = allSongs.reduce((sum,eachSongs)=>{
     return sum + eachSongs.duration;
    },0)
    return(
       <div style={{width:'50%',display:'inline-block'}}>
        <title>This is my first react app</title>
        <h2>{Math.round(totalHours/60)} Hours</h2>
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
        <h3>Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(){
    super()
    this.state = {serverData:{}}
  }
  componentDidMount(){
    setTimeout( () =>{
      this.setState({serverData:fakeStaticData});
  },1000);
    
    
  }
  render(){
    let name = "swatipandey"
    let headerStyle = {color:'green', 'font-size':'50px'}
    return(
      <div className="Appm">
      {this.state.serverData.user ?/*Loading dialog with itnery operator */
      <div>
       <h1>{ this.state.serverData.user.name}'s 
          PlayList
          </h1>
        <Aggregate playlists = {this.state.serverData.user && this.state.serverData.user.playlist} />
        <HoursCounter playlists = {this.state.serverData.user && this.state.serverData.user.playlist} />
        <Filter />
        <Playlist/>
        <Playlist />
        <Playlist />
        <Playlist />
        </div>:<h1>Loading...</h1>
      }
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
