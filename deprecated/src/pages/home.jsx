import React, { Component } from 'react';
import Navbar from '../components/navbar';
import './pages.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar page="home" />
            </div>
         );
    }
}
 
export default Home;