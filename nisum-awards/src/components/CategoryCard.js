import React from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{ width: '100%' }}>
                        <img className="card-img-top" src={require('../../img/card-template.svg')} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.cName}</h4>
                            <p className="card-text">{this.props.cDesc}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryCard.propTypes = {
    cName: PropTypes.string,
    cDesc: PropTypes.string
};

export default CategoryCard;
