import React from 'react';
import PropTypes from 'prop-types';
import imagesBuilding from '../../../images/school.png';
import iconEdit from '../../../images/icons/pencil-alt.png';
import iconDelete from '../../../images/icons/trash.png';
import s from './Card.module.css';

const Card = ({name, university}) => {
    const isAdmin = false;
    return (
        <div className={s.container}>
            <div className={s.img}>
                <img src={imagesBuilding} alt={university} />
            </div>
            <p className={s.overhead}>{university}</p>
            <p className={`heading ${s.title}`}>{name}</p>
            <div className={s.containerBtn}>
                <button type='button' className={s.btnActive}><img src={iconEdit} width="24" alt="Edit" /></button>

                <button type='button' disabled={!isAdmin} className={isAdmin ? s.btnActive : s.btnDisabled}><img src={iconDelete} width="24" alt="Delete" /></button>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
};

export default Card;