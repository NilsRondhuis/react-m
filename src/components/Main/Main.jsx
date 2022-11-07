import univerInfo from "../../data/univerinfo.json";
import Section from "../common/Section/Section";
import Header from "../Header/Header";
import UniversityBlock from "../UniversityBlock/UniversityBlock";
import TutorsBlock from "../TutorsBlock/TutorsBlock";

const Main = () => {
  const { name, description, tutors } = univerInfo;
  return (
    <main>
      Main
      <Header title="Информация о университете" />
      <UniversityBlock name={name} desc={description} />
      <Section title="Преподаватели">
        <TutorsBlock tutors={tutors} />
      </Section>
    </main>
  );
};

export default Main;
