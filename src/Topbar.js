import React from "react";

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src="https://seeklogo.com/images/A/amazon-dark-logo-01F3CFFF03-seeklogo.com.png" alt="Amazon Logo"/>
            </nav>
        </header>
    );
}

export default Topbar;