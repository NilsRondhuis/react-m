import Paper from "../common/Paper/Paper";
import Card from "./Card/Card";
import Description from "./Description/Description";
import universityInfo from '../../data/universityInfo.json';
import s from './UniversityBlock.module.css';

const UniversityBlock = () => {
    return (
        <div className={s.container}>
            <Paper>
                <Card 
                name={universityInfo.name}
                university="университет"/>
            </Paper>
            <Paper>
                <Description
                descriptions={universityInfo.description}
                />
            </Paper>
        </div>
    );
};

export default UniversityBlock;