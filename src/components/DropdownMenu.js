import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import './DropdownMenu.css';

class DropdownMenu extends Component {
    static currentlyOpen = null;

    state = {
        isOpen: false,
        isOverlayActive: false,  // New state property
    };

    handleMouseEnter = () => {
        if (DropdownMenu.currentlyOpen) {
            DropdownMenu.currentlyOpen.setState({ isOpen: false });
        }
        this.setState({ isOpen: true });
        DropdownMenu.currentlyOpen = this;
    };

    onClick = () => {   // New method
        this.setState({ isOverlayActive: false });
    };

    handleClick = () => {
        this.setState(prevState => ({ isOverlayActive: !prevState.isOverlayActive })); // Toggle the isOverlayActive state
    };

    handleMouseLeave = () => {
        this.setState({ isOpen: false });
        DropdownMenu.currentlyOpen = null;
    };

    render() {
        const { mainItem, subItems } = this.props;

        return (
            <div
                className="dropdown"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <span>{mainItem} <FaChevronDown /></span>
                <div className={`dropdown-content ${this.state.isOpen ? "show" : ""} ${this.state.isOverlayActive ? "overlay" : ""}`}>
                    {subItems.map((item, index) => (
                        <Link 
                            to={`/${mainItem.toLowerCase()}/${item.toLowerCase()}`} 
                            key={index} 
                            className="dropdown-link"
                            onClick={this.handleClick}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default DropdownMenu;










