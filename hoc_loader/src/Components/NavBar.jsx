import React from 'react'

const NavBar = () => {
    let navItem = ["Home", "About", "Contact Us"]
    return (
        <>
            <ul>
                {navItem?.map((items, index) => {
                    return (
                        <li key={index}>{items}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavBar