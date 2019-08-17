import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import './navbar.css'

class Navbar extends Component {
    state = { 
        page: this.props.page
     }
    render() { 
        return ( 
                <ul class="navbar">
                    <li class="one"><Link to="/" class={this.state.page === "home" ? "active" : "inactive"}>Home</Link></li>
                    <li class="two"><Link to="/vanilla"class={this.state.page === "vanilla" ? "active" : "inactive"}>Vanilla Survival MC</Link></li>
                    <li class="three"><Link to="modded"class={this.state.page === "modded" ? "active" : "inactive"}>Modded Survival MC</Link></li>
                </ul>
         );
    }
}
 
export default Navbar;