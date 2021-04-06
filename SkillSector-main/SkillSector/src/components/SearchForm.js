import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import './searchform.css';
import { Link } from 'react-router-dom';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col} >
          <Form.Label>Keywords</Form.Label>
          <Form.Control name="description" type="text" />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" type="text" />
        </Form.Group>
      </Form.Row>
      <Link to={`./AddProgrammer`}>
        <Button variant="primary" type="submit" >
          Add Programmer
      </Button></Link>
    </Form>
  )
}