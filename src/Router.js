import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import Login from './components/Login';
import Main from './components/Main';
import Images from './components/Images';
import Picture from './components/Picture';
import Bucket from './components/Bucket';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={Login} title='LOGIN' initial />
          </Scene>
          <Scene key="main" type={ActionConst.RESET}>
            <Scene key="select" component={Main} title='Main' initial />
            <Scene key="uploadedImage" component={Picture} />
            <Scene key="folders" component={Bucket} hideNavBar />
            <Scene key="images" component={Images} title='Contents' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    );
  };


export default RouterComponent;
