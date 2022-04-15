import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import iconMore from '../../images/icons/more.png';
import s from './SitiesBlock.module.css';

const SitiesBlock = ({ cities }) => {
    return (
        <>
        <ul className={`list ${s.list}`}>
            {cities.map(({ city }) => <li className={s.item} key={city}><span className={s.text}>{city}</span> <button className={s.btn} type='button'><img src={iconMore} alt="More" /></button></li>)}
        </ul>
        <Btn text='Добавить город'/>
        </>
    );
};

SitiesBlock.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
        })
    ),
};

export default SitiesBlock;