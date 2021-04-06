import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './Users';
import Pagination from './Pagination';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './programmertable.css';
import Sort from './Sort';

const ProgrammerTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10); //data per page
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://localhost:44327/ProgrammerInformationLists');
      setUsers(res.data);
      console.log("response->", res.data); //Data from api stores here
      setLoading(false);
    }
    fetchUsers();
  }, []);


  //Get current user data
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  var currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container-fluid'>
      <Form className="mb-4">
        <Form.Row className="align-items-end">
          <Form.Group as={Col}>
            <Form.Label className="user">Keywords</Form.Label>
            <Form.Control type="text" value="" placeholder="Search for Name, Skills, Tags and Location" className="user-search"
              onChange={e => {
                const user = users.filter(user => {
                  return user.skills.toLowerCase().includes(e.target.value.toLowerCase())
                    || user.tags.toLowerCase().includes(e.target.value.toLowerCase())
                    || user.name.toLowerCase().includes(e.target.value.toLowerCase())
                    || user.location.toLowerCase().includes(e.target.value.toLowerCase())
                });
                setUsers(user);
                setSearch(e.target.value);
              }}
              type="text"
              value={search}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Link to={`./AddProgrammer`}>
              <Button variant="primary" type="submit" className="user-button"> Add Programmer</Button>
            </Link>
            <Sort users={currentUsers} setUsers={setUsers} />
          </Form.Group >
        </Form.Row>
      </Form>
      <Users users={currentUsers} loading={loading} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length}
        paginate={paginate} />
    </div>
  );
};
export default ProgrammerTable;