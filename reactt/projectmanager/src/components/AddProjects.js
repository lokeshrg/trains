import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProjects extends Component{
 constructor(){
   super();
   this.state={
     newProject:{}
   }
 }


 static defaultProps = {
   categories: ['Web design', 'Dev', 'Mobile']
 }


 handleSubmit(e){ // e is the event here
   e.preventDefault();// prevent the form from submitting ??
   if(this.refs.title.value === ''){
     alert('Title is required!')
   }else{
     this.setState({
       newProject:{
         id: uuid.v4(),
         title: this.refs.title.value,
         category: this.refs.category.value
       }
     }, function(){
       //console.log("Saved state! " + this.state);
       this.props.addProject(this.state.newProject);
     });
   }
   //console.log('Submitted!' + this.refs.title.value);
 }

  render() {
    let catOptions = this.props.categories.map(cat=>{
      return <option key={cat} value={cat}>{cat}</option>
    });

    return (
      <div>
        <h4>Add Project</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title </label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label> Category </label><br/>
            <select ref="category">
              {catOptions}
            </select>
          </div>
          <div>
            <input type="submit" value="submit"/>
          </div>
        </form>
        <br/>
      </div>
    );
  }
}


AddProjects.propTypes = {
  categories: PropTypes.array,
  handleSubmit: PropTypes.func
}

/*render's return can only have one root element '*/
export default AddProjects;
