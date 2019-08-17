import React, { Component } from 'react';
import Navbar from '../components/navbar';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar page="vanilla" />
            </div>
         );
    }
}
 
export default Home;