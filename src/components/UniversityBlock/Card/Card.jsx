import React from 'react';
import PropTypes from 'prop-types';
import imagesBuilding from '../../../images/school.png';
import iconEdit from '../../../images/icons/pencil-alt.png';
import iconDelete from '../../../images/icons/trash.png';

const Card = ({name, university}) => {
    return (
        <div>
            <div>
                <img src={imagesBuilding} alt={university} />
            </div>
            <p>{university}</p>
            <p>{name}</p>
            <div>
                <button type='button'><img src={iconEdit} alt="Edit" /></button>
                <button type='button'><img src={iconDelete} alt="Delete" /></button>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
};

export default Card;