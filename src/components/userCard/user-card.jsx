import {Link} from "react-router-dom";
import React, {useState} from 'react';
import classes from './user-card.module.css';
import Avatar from "../avatar/avatar";

function UserCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {id, name, email, phone, website} = props;

    return (
        <Link to={`/${id}`}>
            <div className={classes.card}>
                <Avatar name={name} onClick={() => setIsOpen(!isOpen)} id={id}/>
                <div className={`${classes.name} bold`}>
                    {name}
                </div>
                {isOpen ?
                    <React.Fragment>
                        <div><span className={'bold'}>E-mail:</span> {email}</div>
                        <div><span className={'bold'}>Phone:</span> {phone}</div>
                        <div><span className={'bold'}>Website:</span> {website}</div>
                    </React.Fragment>
                    : null}
            </div>
        </Link>
    );
}

export default UserCard;