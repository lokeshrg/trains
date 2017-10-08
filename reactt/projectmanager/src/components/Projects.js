import React, { Component } from 'react';
import ProjectItems from './ProjectItems';
import PropTypes from 'prop-types';

class Projects extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        <h6> Latest Projects </h6>
        {projectItems}
      </div>
    );
  }
}

/*https://facebook.github.io/react/docs/typechecking-with-proptypes.html*/
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

/*render's return can only have one root element '*/
export default Projects;
