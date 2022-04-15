import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import iconMore from '../../images/icons/more.png';
import s from './DepartmentBlock.module.css';

const DepartmentBlock = ({ faculties }) => {
    return (
        <>
        <ul className={`list ${s.list}`}>
            {faculties.map(({ faculty }) => <li className={s.item} key={faculty}><span className={s.text}>{faculty}</span> <button className={s.btn} type='button'><img src={iconMore} alt="More" /></button></li>)}
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
