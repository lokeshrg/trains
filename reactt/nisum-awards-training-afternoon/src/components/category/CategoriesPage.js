import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import PropTypes from 'prop-types';

import * as categoryActions from '../../actions/categoryActions';

import CategoryCard from "./CategoryCard";

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        title: '',
        description: ''
      }
    };

    this.onCategoryTitleChange = this.onCategoryTitleChange.bind(this);
    this.onCategoryDescriptionChange = this.onCategoryDescriptionChange.bind(this);
    this.onACSubmit = this.onACSubmit.bind(this);
    this.onDCSubmit = this.onDCSubmit.bind(this);
    this.isValidCategory = this.isValidCategory.bind(this);
  }

  onCategoryTitleChange(event) {
    const category = this.state.category;
    category.title = event.target.value;
    this.setState({category});
  }

  onCategoryDescriptionChange(event) {
    const category = this.state.category;
    category.description = event.target.value;
    this.setState({category});
  }

  onACSubmit(event) {
    event.preventDefault();
    if (this.isValidCategory()) {
      //this.props.actions.createCategory(this.state.category);
      // this.props.actions.saveCategory(this.state.category);
      this.props.actions.saveCatGQLMutation(this.state.category)
        .then(() => {
          toastr.success(`The category ${this.state.category.title} was added successfully!`);
        });

      this.setState({
        category: {
          title: '',
          description: ''
        }
      });
    } else {
      toastr.error('Hey title and description are required!!');
    }
  }


  onDCSubmit(event) {
    event.preventDefault();
    if (this.state.category.title.trim().length === 0) {
      toastr.error('Hey title is required!!');
    } else {
      //this.props.actions.createCategory(this.state.category);
      this.props.actions.deleteCategory(this.state.category);
      toastr.success(`The category ${this.state.category.title} was deleted successfully!`);
      this.setState({
        category: {
          title: '',
          description: ''
        }
      });
    }
  }

  isValidCategory() {
    const category = this.state.category;
    if (category.title.trim().length === 0 ||
      category.description.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1 className="col">Categories</h1>
        <div className="row">
          <form className="col">
            <div className="form-group">
              <label>Category title</label>
              <input
                type="text"
                onChange={this.onCategoryTitleChange}
                className="form-control"
                placeholder="Enter category title"
                value={this.state.category.title}
              />
            </div>
            <div className="form-group">
              <label>Category description</label>
              <input
                type="text"
                onChange={this.onCategoryDescriptionChange}
                className="form-control"
                placeholder="Enter a description of the category"
                value={this.state.category.description}
              />
            </div>
            <button
              type="submit"
              onClick={this.onACSubmit}
              className="btn btn-primary">Add Category
            </button>
            <button
              type="submit"
              onClick={this.onDCSubmit}
              className="btn btn-primary">Delete Category
            </button>
          </form>
        </div>
        <div className="row">
          {this.props.categories.map((category, index) => {
            return (<CategoryCard
              key={index}
              title={category.title}
              description={category.description}/>);
          })}
        </div>
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(categoryActions, dispatch)  // this.props.actions.someAction();
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
