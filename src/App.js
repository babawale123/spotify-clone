import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useStateValue } from './components/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(()=>{
       const hash = getTokenFromUrl();
       window.location.hash = "";

       const _token = hash.access_token;

       if(_token) {

        dispatch({
          type:"SET_TOKEN",
          token: _token
        })

         spotify.setAccessToken(_token);

         spotify.getMe().then(user => {
           dispatch({
             type: 'SET_USER',
             user:user,
           })
         });
         spotify.getUserPlaylists().then((playlists)=>{
           dispatch({
             type:"SET_PLAYLISTS",
             playlists: playlists,
           });
         });
         spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then(response=>{
           dispatch({
             type: "SET_DISCOVERY_WEEKLY",
             discovery_weekly:response,
           })
         })
       }
 },[])
 
 

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />} 
      
    </div>
  );
}

export default App;
