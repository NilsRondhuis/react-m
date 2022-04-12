import iconPhone from '../../../images/icons/device-mobile.png';
import iconMail from '../../../images/icons/mail.png';
import iconGeo from '../../../images/icons/geo.png';

const Tutors = ({ firstname, lastname, patronymic, phone, email, city, options }) => {
    return (
        <div>
            <div>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{patronymic}</p>
            </div>
            <div>
                <p>
                    <img src={iconPhone} alt="Phone" />
                    <span>{phone}</span>
                </p>
                <p>
                    <img src={iconMail} alt="Mail" />
                    <span>{email}</span>
                </p>
                <p>
                    <img src={iconGeo} alt="Geo" />
                    <span>{city}</span>
                </p>
            </div>
            <div>
                <p>{options}</p>
            </div>
        </div>
    );
};

export default Tutors;