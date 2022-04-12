import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import iconMore from '../../images/icons/more.png';

const DepartmentBlock = ({ faculties }) => {
    return (
        <>
        <ul>
            {faculties.map(({ faculty }) => <li key={faculty}>{faculty} <button type='button'><img src={iconMore} alt="More" /></button></li>)}
        </ul>
        <Btn text='Добавить факультет' />
        </>
    );
};

DepartmentBlock.propTypes = {
    faculties: PropTypes.arrayOf(
        PropTypes.shape({
            faculty: PropTypes.string.isRequired,
        })
    ),
};

export default DepartmentBlock;
