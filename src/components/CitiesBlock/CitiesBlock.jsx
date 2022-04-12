import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import iconMore from '../../images/icons/more.png';

const SitiesBlock = ({ cities }) => {
    return (
        <>
        <ul>
            {cities.map(({ city }) => <li key={city}>{city} <button type='button'><img src={iconMore} alt="More" /></button></li>)}
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