import PropTypes from 'prop-types';
import Tutors from './Tutors/Tutors';
import Btn from '../Btn/Btn';

const TutorsBlock = ({ tutors = [] }) => {
    return (
        <>
            <ul>
            {tutors.map(tutors => {
                return (
                    <li key={tutors.phone}>
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