import React from 'react';
import PropTypes from 'prop-types';

const CategoryCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '100%' }}>
        <img className="card-img-top" src={require('../../images/cat_image_placeholder.svg')} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Add category</a>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CategoryCard;
