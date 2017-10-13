import React from 'react';
import PropTypes from 'prop-types';
import Category from './CategoryCard';
import toastr from 'toastr';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

import * as categoryActions from '../actions/categoryActions';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        name: '', desc: ''
      }
    };

    let categories = [
      {
        name: 'Look Alike',
        desc: 'People who like celebrities'
      },
      {
        name: 'Best fellow',
        desc: 'Fellow de Mejor'
      }
    ];
    this.props.actions.loadCategories(categories);

    this.onCategoryTitleChange = this.onCategoryTitleChange.bind(this);
    this.onCategoryDescriptionChange = this.onCategoryDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    let categories =
      this.props.actions.loadCategories();
  }


  onCategoryTitleChange(event) {
    const category = this.state.category;
    category.name = event.target.value;
    this.setState({category: category});
  }

  onCategoryDescriptionChange(event) {
    const category = this.state.category;
    category.desc = event.target.value;
    this.setState({category: category});
  }

  isValidCategory() {
    if ((this.state.category.name.trim().length === 0) || (this.state.category.desc.trim().length === 0)) {
      // Add Duplicate check Validation here
      this.state.categories.map((cat, index) => {
        if (cat.name === this.state.category.name) {
          alert('This category is already added!');
          toastr.error('This category is already added!');
          return;
        }
      });
      return false;
    } else {
      return true;
    }

  }

  onSubmit(event) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    // prevent subvmit from actually submitting the form, we only instead invoke a callback
    event.preventDefault();
    //console.log("Clicked Submit!");

    if (this.isValidCategory()) {
      const newCategory = this.state.category;

      // the next line does not work in JS, seperate the push operation by extracting a variable
      //this.state.categories.push({name: "test", desc: "test Desc"});
      //this.state.categories.push({name: "test", desc: "test Desc"});
      //before setting state, filter to remove duplicates

      this.setState({categories: [...this.state.categories, newCategory]});

      // now reset the category state for the next addition
      this.setState({category: {name: '', desc: ''}});
      //alert(this.state.category.name);
      toastr.success("CategoryCard added!");
    } else {
      toastr.error("CategoryCard title and description are required !");
    }

  }

  render() {
    return (
      <div>
        <div><h4>Add a Category</h4></div>
        <div className="row">
          <form className="col">
            <div className="form-group">
              <label>Category title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category title"
                onChange={this.onCategoryTitleChange}
                value={this.state.category.name}
              />
            </div>
            <div className="form-group">
              <label>Category description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a description of the category"
                onChange={this.onCategoryDescriptionChange}
                value={this.state.category.desc}
              />
            </div>
            <button
              type="submit"
              onClick={this.onSubmit}
              className="btn btn-primary">Add Category
            </button>
          </form>
        </div>
        <div>.</div>
        <div><h1>Categories</h1></div>
        <div>
          {this.state.categories.map((category, index) => {
            return <Category key={index} cName={category.name} cDesc={category.desc}/>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
