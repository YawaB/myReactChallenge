import React from "react";

const BodyInfo = ({body}) => {
    return (
        <div className="body-info">
            {body ? (
                <div>
            <h3>{body.name}</h3>
            <p>Gravity: {body.gravity}</p>
            <p>Is Planet: {body.isPlanet ? 'Yes' : 'No'}</p>
            <p>Mass: {body.mass.massValue * Math.pow(10, body.mass.massExponent)} kg</p></div> ) : (
                // {body.mass.massValue} x 10^{body.mass.massExponent} =
                <p>Select a body</p>
            )}
        </div>
    );
}
export default BodyInfo;
