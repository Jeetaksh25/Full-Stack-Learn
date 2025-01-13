import React from 'react'
import './UsersList.css'
import UserItem from "./UserItem.js"

const UsersList = props => {
    if (props.items.length === 0){
        return (
            <div>
                <h2>No Users Found.</h2>
            </div>
        );
    }

    return(
        <ul className='users-list' type="none">
            {props.items.map(user=>(
                <UserItem key={user.id} id={user.id} image={user.image} name={user.name} places={user.places} placeCount={user.places}/>
            ))}
        </ul>
    );
};

export default UsersList;
