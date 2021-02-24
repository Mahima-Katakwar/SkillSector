import React from 'react';
import { withRouter } from 'react-router-dom';
import './profilepage.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "./Image";

const apiUrl = 'https://localhost:44327/ProgrammerInformationLists/';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      response: {},
      imagesrc: "",
      base64TextString: "",
    }
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    /* {console.log(this.props.match.params)} */
    if (userId) {
      axios.get(`${apiUrl}${userId}`).then(response => response.data).then(
        (result) => {
          // console.log(result);
          this.setState({
            users: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
    }
  }
  handleSubmit = (e) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };
    const { userId } = this.props.match.params;
    axios.put(`${apiUrl}${userId}`, { ...this.state.users }, config).then(response => response.data).then(
      (result) => {
        // console.log(result);
        this.setState({
          users: result
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
    e.preventDefault();
  }
  handleChange = field => (e) => {
    this.setState({
      users: {
        ...this.state.users,
        [field]: e.target.value
      }
    })
  }

  onFileSubmit = (e) => {
    e.preventDefault()
    // const preview = document.getElementById('imagesrc');
    console.log("binary string:", this.state.base64TextString);

    document.getElementById("previewImg").src = "data:image/jpeg;base64," + this.state.base64TextString

    const { userId } = this.props.match.params;
    console.log(userId);

    axios.put(`${apiUrl}${userId}`, {
      Imagesrc: "data:image/jpeg;base64," + this.state.base64TextString,
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err);
    })
  }

  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result
    this.setState({
      base64TextString: btoa(binaryString)
    })
  }

  onFileChange = (e) => {
    console.log("file to upload:", e.target.files[0])
    let file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this)
      reader.readAsBinaryString(file)
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-lg-2">
            <Tabs>
              <TabList>
                <Tab id="#profile">Profile</Tab>
                <Tab id="#edit">Edit</Tab>
              </TabList>
              <TabPanel>
                <div className="tab-content py-4">
                  <div className="tab-pane active" id="profile">
                    <h5 className="mb-3">Programmer Details</h5>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <h5 className="mt-2">Name</h5> */}
                        <h5 className="mt-2">{this.state.users.name}</h5>
                        {/* <h5 className="mt-2">Title</h5> */}
                        <h5 className="mt-2">{this.state.users.title}</h5>
                        <h5 className="mt-2">{this.state.users.location}</h5>
                        <p className="mt-2">Company - {this.state.users.company}</p>
                        <p className="mt-2">Contact - {this.state.users.phoneNo}</p>
                        <p className="mt-2">Email - {this.state.users.email}</p>
                      </div>
                      <div className="col-md-6">
                        <h5 className="mt-2">Skills & Tags</h5>
                        <a href="#" className="badge badge-dark badge-pill">{this.state.users.skills}</a>
                        <a href="#" className="badge badge-dark badge-pill">{this.state.users.tags}</a>
                        <div>
                          <hr />
                          <h5 className="mt-2">Links</h5>
                        </div>
                        <div>
                          <p className="user-top"><a href={this.state.users.links} target="_blank" rel="noreferrer">Linkedin</a></p>
                        </div>
                        <div>
                          <h5 className="mt-2">Resume</h5>
                          <p><a href={this.state.users.resume} target="_blank" rel="noreferrer">resume.pdf</a></p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <h5 className="mt-2"><span className="fa fa-clock-o ion-clock float-right"></span>Description</h5>
                        <table className="table table-sm table-hover table-striped">

                          <tbody>
                            <tr>
                              <td>
                                <p className="user-table">{this.state.users.description}</p>
                              </td>
                            </tr>
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>

                <div className="tab-pane" id="edit">
                  <form role="form">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Name</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.name} onChange={this.handleChange('name')} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Title</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.title} onChange={this.handleChange('title')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Email</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="email" value={this.state.users.email} onChange={this.handleChange('email')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Company</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.company} onChange={this.handleChange('company')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Resume</label>
                      <div className="col-lg-9">
                        <input type="file" className="userfile" id="myfile" name="myfile" onChange={this.handleChange('resume')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Description</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.description} onChange={this.handleChange('description')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Contact</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="url" value={this.state.users.phoneNo} onChange={this.handleChange('phoneNo')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Location</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.location} onChange={this.handleChange('location')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Skills</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.skills} onChange={this.handleChange('skills')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Tags</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.tags} onChange={this.handleChange('tags')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label user-label">Links</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={this.state.users.links} onChange={this.handleChange('links')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <input onClick={this.handleSubmit} type="button" className="btn btn-primary" value="Save Changes" />
                      </div>
                    </div>
                  </form>
                </div>
              </TabPanel>
            </Tabs>
          </div>
          <div className="col-lg-4 order-lg-1 text-center ">
            <img id="previewImg" src={this.state.users.imagesrc} className="mx-auto img-fluid img-circle d-block circular--square imgpri" alt="avatar" />
            <h6 className="mt-2">Upload a different photo</h6>
            <label className="custom-file text-center">
              <Image onFileSubmit={this.onFileSubmit} onFileChange={this.onFileChange} />
              <input type="file" id="file" className="custom-file-input" />
            </label>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(ProfilePage);