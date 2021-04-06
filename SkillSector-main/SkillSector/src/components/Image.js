import React from 'react';
import { withRouter } from 'react-router-dom';

const apiUrl = 'https://localhost:44327/ProgrammerInformationLists/';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      imagesrc: [],
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.onFileSubmit(e)} onChange={(e) => this.props.onFileChange(e)} >
          <input
            type="file"
            name="image"
            id="file"
            accept=".jpeg, .png, .jpg"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default withRouter(Image);