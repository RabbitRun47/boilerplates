import React from 'react';
import { NavigateToNewPage } from '../../Navigation';
import './Navbar.css';

const Navigation = (props) => {
    return (
        <>
            <button onClick={() => NavigateToNewPage('/')}>Home</button>
            <button onClick={() => NavigateToNewPage('/Counter')}>Counter</button>
        </>
    )
}
export default Navigation;