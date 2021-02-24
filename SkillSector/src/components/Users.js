import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import './programmertable.css';

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Skills</th>
              <th scope="col" className="tags">Tags</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              {/*  <th scope="col">Profile Photo</th> */}
              <th scope="col">Resume</th>
              <th scope="col">Links</th>
              <th scope="col">Location</th>
              {/*  <th scope="col">Street Address</th> 
               <th scope="col">Zipcode</th>
              {/* <th scope="col">Date</th>  */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td><Link to={`./ProfilePage/${user.userId}`}>{user.name}</Link></td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td><Badge className="user-round" variant="secondary">{user.skills}</Badge></td>
                <td><Badge className="user-round" variant="secondary">{user.tags}</Badge></td>
                <td>{user.company}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                {/*  <td><img src={ user.imagesrc} alt="" /></td>  */}
                <td><a href={user.resume} target="_blank" rel="noreferrer">Resume</a></td>
                <td><a href={user.links} target="_blank" rel="noreferrer">Linkedin Profile</a></td>
                <td>{user.location}</td>
                {/* <td>{user.streetAddress}</td>  
                 <td>{user.zipcode}</td>
                <td>{user.date}</td>   */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;