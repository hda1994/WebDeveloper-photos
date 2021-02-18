import React from 'react';
import classes from './header.module.css';

function Header(props) {
    const {children} = props;
    const showNav = () => {
        if (children) {
            if (Array.isArray(children)) {
                return children.map((elem, index) =>
                    <nav className={`${classes[`nav${index + 2}`]} ${classes.nav}`} key={index}>
                        {elem}
                    </nav>)
            }
            return <nav className={`${classes['nav2']} ${classes.nav}`}>
                {children}
            </nav>
        }
        return null;
    };

    return (
        <header className={classes.header}>
            <nav className={`${classes['nav1']} ${classes.nav}`}>Test-Task</nav>
            {showNav()}
        </header>
    );
}

export default Header;