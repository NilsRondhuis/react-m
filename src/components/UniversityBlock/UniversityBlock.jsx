import Paper from "../common/Paper/Paper";
import Card from "./Card/Card";
import Description from "./Description/Description";
import universityInfo from '../../data/universityInfo.json';


const UniversityBlock = () => {
    return (
        <div>
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