import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name },
  console.log(name))

  render() {
    const { activeItem } = this.state
    
    return (
      <Menu inverted size='massive' pointing secondary>
      
       <Menu.Item header>GetBG</Menu.Item> 

       <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
       
       <Menu.Menu position='right'>
          <Menu.Item>
            <Menu.Item name='Feedback' active={activeItem === 'Feedback'} onClick={this.handleItemClick} /> 
          </Menu.Item>
      </Menu.Menu>
      </Menu>
    )
  }
}