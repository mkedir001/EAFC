import React, { Component } from 'react';
import Header from './components/Header/header';
import Navbar from './components/NavBar/navbar';
import Body from './components/Body/body';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY <= 320;
      if(isTop !== true){
        this.setState({scrolled:true})
      }else {
        this.setState({scrolled: false})
      }

    });
    console.log(window.scrollY);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Navbar className={this.state.scrolled ? 'nav scrolled' : 'nav'} />
          <Body />
      </div>
    );
  }
}

export default App;
