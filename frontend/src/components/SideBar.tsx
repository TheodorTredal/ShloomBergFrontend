import React from "react";
import { useState } from "react";
import '../styling/sidebar.css'

/**
 * Sidebar for Navigation
 */


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = ["Dashboard", "workflow", "Download workflow", "Settings", "profile"]


    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={isOpen ? "sidebar open" : "sidebar closed"}>
            <button onClick={toggleSidebar} className="toggle-btn">
            {isOpen ? "<" : ">"}
            </button>
            {isOpen && 
            <>
            <h2 className="displayUserName">USERNAME</h2>
            <>
                {menuItems.map((item, index) => (
                    <ul key={index}>
                        <button className="menuButton">{item}
                        </button>
                    </ul>
                ))}

          </>
            </>
            }

        </div>
    )
}

export default Sidebar;