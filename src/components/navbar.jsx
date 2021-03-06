import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span>Habit Tracker</span>
        <span className='navbar-coount'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
