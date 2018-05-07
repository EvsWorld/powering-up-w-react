import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import './NavBar.css';

export class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const menuStyles = {
      padding: '0 6.5%',
      backgroundColor: '#278ACE'
    }

    const { activeItem } = this.state

    return (
      <Menu style={menuStyles}>
        <Menu.Menu position='left'>
          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            <i className=" child icon"></i>
          </Menu.Item>

          <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
            <i className="bars icon"></i>
          </Menu.Item>
          <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
            <i className="search icon"></i>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
           <i className="inverted calender alternate outline icon"></i>
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            <i className="envelope outline icon"></i>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


export default NavBar;
