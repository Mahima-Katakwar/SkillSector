import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import './programmertable.css';

const Sort = (props) => {

    const usersSort = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.setUsers([..._.sortBy(props.users, ['name'])]);
        console.log("usersSort ->", usersSort);
    }

    return (
            <Button variant="primary" type="submit" className="user-button"
            onClick={usersSort}> Sort </Button>
    )
};
export default Sort;