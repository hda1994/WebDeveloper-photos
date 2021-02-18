import React from 'react';
import UserCard from "../userCard/user-card";
import Header from "../header/header";

function Home(props) {
    const {users} = props;

    return (
        <React.Fragment>
            <Header />
            <div className={'wrapper'}>
                {users ? users.map(elem =>
                    <UserCard {...elem} key={elem.id}/>) : null
                }
            </div>
        </React.Fragment>
    );
}

export default Home;