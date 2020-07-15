import React from 'react';
import { Router, Scene } from "react-native-router-flux";

import Home from './components/Home';
import Login from './components/Login';

export default function Main(){
  return(
    <Router>
      <Scene key='root'>
        <Scene 
          key='login'
          component={Login}
          hidenavbar
          initial={true}
        />

        <Scene
          key='home'
          component={Home}
          hidenavbar
        />

      </Scene>
    </Router>
  )
}