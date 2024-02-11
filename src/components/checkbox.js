import React, {useState} from 'react';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Checkbox({onCheckboxChange}) {
    const [checked, setChecked] = useState(false);
    const icon = checked ? faCheckSquare : faSquare;

    const handleCheck = (event) => {

        console.log('Checkbox clicked');
        const isChecked = !checked;
        setChecked(isChecked);
        if (onCheckboxChange) {
            onCheckboxChange(isChecked);
        }
    };
    return (
        <div className="form-check mb-3 checkbox-container">
            <FontAwesomeIcon icon={icon} onClick={handleCheck} className="form-check-input checkbox-icon" id="flexCheckCheched" name="isPlanet"/>
            <label htmlFor="isPlanet" className="form-label checkbox-label">
                Is Planet
            </label>
            <span className={`checked-status ${checked ? 'checked' : 'unchecked'}`}>{checked ? 'Yes' : 'No'}</span>
        </div>
    );
}
