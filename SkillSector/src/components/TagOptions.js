import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addprogrammer.css';

import CreatableSelect from 'react-select/creatable';
import { skillOptions } from '../data/data';
import { tagOptions } from '../data/data';

export default class TagOptions extends Component {

  render() {
    return (
      <div>
        <Form.Label>Skills</Form.Label>
        <CreatableSelect
          isMulti
          onChange={this.props.handleSkills}
          options={skillOptions} />
        <Form.Label>Tags</Form.Label>
        <CreatableSelect
          isMulti
          onChange={this.props.handleTag}
          options={tagOptions} />
      </div>
    );
  }
}