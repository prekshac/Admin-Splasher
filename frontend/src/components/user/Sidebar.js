import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import './sidebar.css';

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="profile" className="menu-item" href="/userprofile">User Profile</a>
        <a id="manage-dash" className="menu-item" href="/user/manageentity">Manage Entity</a>
        <a id="config-dash" className="menu-item" href="/user/configure">Configure Dashboard</a>
        <a id="addentity" className="menu-item" href="/user/addentity">Add Entity</a>
        <a id="addentitydata" className="menu-item" href="/user/caddentitydata">Add Entity Data</a>
       
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default Example;