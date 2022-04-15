import iconPhone from '../../../images/icons/device-mobile.png';
import iconMail from '../../../images/icons/mail.png';
import iconGeo from '../../../images/icons/geo.png';
import s from './Tutors.module.css';

const Tutors = ({ firstname, lastname, patronymic, phone, email, city, options }) => {
    return (
        <div className={s.container}>
            <div className={s.item}>
                <p className={s.text}>{firstname}</p>
                <p className={s.text}>{lastname}</p>
                <p className={s.text}>{patronymic}</p>
            </div>
            <div className={s.item}>
                <p className={`${s.text} ${s.textTutorInfo}`}>
                    <span className={s.icon}><img src={iconPhone} alt="Phone" /></span>
                    <span>{phone}</span>
                </p>
                <p className={`${s.text} ${s.textTutorInfo}`}>
                    <span className={s.icon}><img src={iconMail} alt="Mail" /></span>
                    <span>{email}</span>
                </p>
                <p className={`${s.text} ${s.textTutorInfo}`}>
                    <span className={s.icon}><img src={iconGeo} alt="Geo" /></span>
                    <span>{city}</span>
                </p>
            </div>
            <div className={s.item}>
                <p className={s.text}>{options}</p>
            </div>
        </div>
    );
};

export default Tutors;