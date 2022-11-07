import PropTypes from "prop-types";

const Tutor = (props) => {
  const { firstName, lastName, patronymic, phone, email, city, options } =
    props;
  return (
    <div>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{patronymic}</p>
      </div>
      <div>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{city}</p>
      </div>
      <div>
        <p>{options}</p>
      </div>
    </div>
  );
};

Tutor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  patronymic: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default Tutor;
