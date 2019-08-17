import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
    state = { 
        currentpage: null
     }
    render() { 
        return ( 
            <div class={Navbar}>
                <ul class="navbar">
                    <li><a>Home</a></li>
                    <li><a>Vanilla Survival MC</a></li>
                    <li><a>Modded Survival MC</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;