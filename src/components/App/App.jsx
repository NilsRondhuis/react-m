import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

const App = () => {
    return (
        <div className="mainContainer">
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default App;