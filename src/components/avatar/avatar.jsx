import React from 'react';
import classes from './avatar.module.css';

function Avatar(props) {
    const {name, id, onClick} = props;
    const nameArray = name ? name.split(" ")
        .filter(elem => {
            if (elem.length === 1)
                return false;
            if (elem.indexOf('.') >= 0)
                return false;
            return true;
        })
        .map(elem => elem[0])
        .join('') : null;
    const colorClass = `color-${Math.ceil(id % 5) + 1}`;

    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <React.Fragment>
            {nameArray ? <div onClick={handleClick} className={`${classes.avatar} ${classes[colorClass]} bold`}>
                {nameArray}
            </div> : null}
        </React.Fragment>
    );
}

export default Avatar;