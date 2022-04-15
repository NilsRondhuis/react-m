import PropTypes from 'prop-types';
import Tutors from './Tutors/Tutors';
import Btn from '../Btn/Btn';
import s from './TutorsBlock.module.css';

const TutorsBlock = ({ tutors = [] }) => {
    return (
        <>
            <ul className={`list ${s.list}`}>
            {tutors.map(tutors => {
                return (
                    <li className={s.item} key={tutors.phone}>
                        <Tutors {...tutors}/>     
                    </li>
                );
            })}
            </ul>

            <Btn text="Добавить преподавателя" />
        </>
    );
};

TutorsBlock.propTypes = {
    tutors: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string,
    })).isRequired,
};

export default TutorsBlock;