import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProjectItems extends Component {

  deleteProject(id){
    //console.log('test Delete!');
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> delete </a>
      </li>
    );
  }
}


ProjectItems.propTypes = {
  project: PropTypes.object,
  deleteProject: PropTypes.func
}

/*render's return can only have one root element '*/
/*in JSX you cant use classes and attributes, cant use class or for in a form, but have to use HTML 4 ?*/
export default ProjectItems;
