import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import Todos from './components/Todos';
import AddProjects from './components/AddProjects';
import $ from 'jquery';

class App extends Component {
constructor(){
  super();
  this.state = {
    projects: [],
    todos: []
  }
}

componentWillMount(){
  this.getProjects();
}

componentDidMount(){
  this.getTodos();
}

getTodos(){
  let root = 'https://jsonplaceholder.typicode.com';
  $.ajax({
    url: root + '/posts', // /1
    method: 'GET',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, error){
      console.log(error);
    }
  });
}

getProjects(){
  this.setState({projects:[
    {
      id: uuid.v4(),
      title: 'Uruguay',
      category: 'Monteneviedo'
    },
    {
      id: uuid.v4(),
      title: 'Falkaland',
      category: 'Islands'
    },
    {
      id: uuid.v4(),
      title: 'Isla de Pascua',
      category: 'Easter island'
    }
  ]});
  //this.getTodos();
}

handleAddingPrj(prj){
  let projs = this.state.projects;
  projs.push(prj);
  // as state is immutable, cant just modify, but set a new value
  this.setState({projects: projs});
}
handleDeletePrj(id){
  let projs = this.state.projects;
  let index = projs.findIndex(x => x.id===id);
  projs.splice(index, 1);
  // as state is immutable, cant just modify, but set a new value
  this.setState({projects: projs});
}

  render() {
    return (
      <div className="App">
        <AddProjects addProject={this.handleAddingPrj.bind(this)} /><br/>
        <Projects onDelete={this.handleDeletePrj.bind(this)} projects={this.state.projects}/><br/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}
/*render's return can only have one root element '*/
export default App;
