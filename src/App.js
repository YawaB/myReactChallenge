import './App.css';
import Checkbox from "./components/checkbox";
import BodiesSelector from "./components/bodies-selector";
import Gravity from "./components/gravity";
import BodyInfo from "./components/body-info";
import {useState} from "react";

function App() {
    const [selectedBody, setSelectedBody] = useState(null);
    const [isPlanet, setIsPlanet] = useState(false);
    const [gravity, setGravity] = useState(1);


    const handleCheckChange = (isChecked) => {
        setIsPlanet(isChecked);

    }
    const handleGravityChange = (gravityValue) => {
        setGravity(gravityValue)
    }
    const handleSelect = (body) => {
        setSelectedBody(body);
    };
    return (
        <div className="App">
            <div className="app-container">
                <div className="title">
                    <h2>
                        RHOBS Challenge
                    </h2>
                </div>

                <div className="container1">
                    <Checkbox onCheckboxChange={handleCheckChange}/>
                    <Gravity changeGravity={handleGravityChange}/></div>
                <BodiesSelector isPlanet={isPlanet} gravity={gravity} onSelect={handleSelect}/>
                <BodyInfo body={selectedBody}/>
            </div>
        </div>
    );
}

export default App;
