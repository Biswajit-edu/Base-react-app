import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

import './dropbox.css';
import "./mobile.css"
const TagSelector = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="container">
            <div className="dropdown">
                <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    onClick={toggleDropdown}
                >
                    <div className=' slect_box_content flex items-center '>
                    Select Tags<RiArrowDropDownLine className='' size={27}/>
                    </div>
                </button>
                {isDropdownOpen &&
                <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 1
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 2
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 3
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 4
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 5
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 6
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 7
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 8
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 9
                </a>
                <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Tag 10
                </a>
            </div>
                }
            </div>
        </div>
    )
}

export default TagSelector;