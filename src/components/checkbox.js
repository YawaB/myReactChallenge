import React, {useState} from 'react';

export default function Checkbox({onCheckboxChange}) {
    const [checked, setChecked] = useState(false);
    const handleCheck = (event) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        if (onCheckboxChange) {
            onCheckboxChange(isChecked);
        }
    };
    return (
        <div className="form-check mb-3">
            <input type="checkbox" onChange={handleCheck}
                   className="form-check-input" id="flexCheckCheched" name="isPlanet"/>
            <label htmlFor="isPlanet" className="form-label">Is Planet</label>
            checked: {checked ? 'Yes' : 'No'}
        </div>
    );
}
