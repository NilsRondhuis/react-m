import Header from "../Header/Header";
import UniversityBlock from "../UniversityBlock/UniversityBlock";
import TutorsBlock from "../TutorsBlock/TutorsBlock";
import Section from "../common/Section/Section";
import CitiesBlok from '../CitiesBlock/CitiesBlock';
import DepartmentBlock from '../DepartmentBlock/DepartmentBlock';
import iconCat from '../../images/icons/cat.png';
import iconRobot from '../../images/icons/robot.png'
import iconLocal from '../../images/icons/local.png';
import faculties from '../../data/faculties.json'
import universityInfo from "../../data/universityInfo.json";
import cities from '../../data/cities.json';
import s from './Main.module.css';

const { tutors } = universityInfo;

const Main = () => {
    return (
        <main className={s.main}>
            <Header title='Информация о университете'/>
            <UniversityBlock/>
            <Section text="Преподаватели" icon={iconCat}>
                <TutorsBlock tutors={tutors}/>
            </Section>
            <Section text="Города" icon={iconLocal}>
                <CitiesBlok cities={cities}/>
            </Section>
            <Section text="Факультеты" icon={iconRobot}>
                <DepartmentBlock faculties={faculties}/>
            </Section>
        </main>
    );
};

export default Main;