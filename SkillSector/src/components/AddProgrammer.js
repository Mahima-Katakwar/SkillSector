import './addprogrammer.css';
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TagOptions from './TagOptions';

const apiUrl = 'https://localhost:44327/ProgrammerInformationLists/';

class AddProgrammer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      response: {},
      tags: [],
      skills: [],
    }
  }

  handleTag = (newValue, actionMeta) => {
    console.log("CALLEDD")
    console.group('Value Changed');
    this.setState({
      tags: newValue
    })
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleSkills = (newValue, actionMeta) => {
    console.log("CALLEDD")
    console.group('Value Changed');
    this.setState({
      skills: newValue
    })
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleSubmit = (e) => {
    e.stopPropagation();
    //e.preventDefault();
    console.log(this.state.users, this.state.skills, this.state.tags);
    let resultSkills = this.state.skills.map(a => a.value);
    console.log(resultSkills.toString());

    let resultTags = this.state.tags.map(b => b.value);
    console.log(resultTags.toString());

    axios.post(`${apiUrl}`, {
      company: this.state.users.company,
      date: this.state.users.date,
      description: this.state.users.description,
      email: this.state.users.email,
      imagesrc: this.state.users.imagesrc,
      links: this.state.users.links,
      location: this.state.users.location,
      name: this.state.users.name,
      phoneNo: this.state.users.phoneNo,
      resume: this.state.users.resume,
      skills: resultSkills.toString(),
      streetAddress: this.state.users.streetAddress,
      tags: resultTags.toString(),
      title: this.state.users.title,
      type: this.state.users.type,
      zipcode: this.state.users.zipcode
    }).then(response => response.data).then(
      (result) => {
        console.log(result);
        this.setState({
          users: {}
        });
        alert("saved.!");
        this.props.history.push('/ProgrammerTable')
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  handleChange = field => (e) => {
    this.setState({
      users: {
        ...this.state.users,
        [field]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form className="fresh-form">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" onChange={this.handleChange('name')} />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" value={this.state.title} onChange={this.handleChange('title')} />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={this.state.email} onChange={this.handleChange('email')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Company</Form.Label>
              <Form.Control value={this.state.company} onChange={this.handleChange('company')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Type</Form.Label>
              <Form.Control value={this.state.type} onChange={this.handleChange('type')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Resume</Form.Label>
              <Form.Control input type="resume" value={this.state.resume} onChange={this.handleChange('resume')}
                placeholder="Give your Linkedin resume links" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Description</Form.Label>
              <Form.Control value={this.state.description} onChange={this.handleChange('description')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Contact</Form.Label>
              <Form.Control value={this.state.phoneNo} onChange={this.handleChange('phoneNo')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Location</Form.Label>
              <Form.Control value={this.state.location} onChange={this.handleChange('location')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Street Address</Form.Label>
              <Form.Control value={this.state.streetAddress} onChange={this.handleChange('streetAddress')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control value={this.state.zipcode} onChange={this.handleChange('zipcode')} />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <TagOptions handleSkills={this.handleSkills} handleTag={this.handleTag} />  {/*For skills and tags */}
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Links</Form.Label>
              <Form.Control value={this.state.links} onChange={this.handleChange('links')} />
            </Form.Group>
            {/*<Form.Group controlId="formGridAddress2">
            <Form.Label>Date</Form.Label>
            <Form.Control value={this.state.date} onChange={this.handleChange('date')}
            input type="datetime-local" id="datetime-local" />
            </Form.Group> */}
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit</Button>
          </Form>
        </Form>
      </div>
    )
  }
}

export default withRouter(AddProgrammer);