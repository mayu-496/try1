import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';

import DashBoard from './DashBoard';

import Settings from './Settings';
import Notification from './Notification';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene icon={TabIcon}
            
              key="home"
              component={Home}
              title="Home"
            />
            
          

          {/* Tab and it's scenes */}
          <Scene key="um" title="DB" icon={TabIcon}>
            <Scene
              key="blue"
              component={DashBoard}
              title="Dash Board"
            />
            
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="no" title="Noti" icon={TabIcon}>
            <Scene
              key="blue"
              component={Notification}
              title="Notification"
            />
            
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="vu" title="Settings" icon={TabIcon}>
            <Scene
              key="gold"
              component={Settings}
              title="Settings"
            />
            
          </Scene>
        </Scene>

        
      </Scene>
    </Router>
  );
}

export default App;
