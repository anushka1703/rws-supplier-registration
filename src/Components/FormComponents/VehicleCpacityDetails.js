import React, { useState, useEffect } from 'react';
import { handleSubmit } from "./helpers";

const VehicleCapacityDetails = ({ onComplete, saveData, onPrevious }) => {
    const [formData, setFormData] = useState({
        vehicleCapacityDetails: {
            vehicleCapacityPreference: []
        }
    });
    const [error, setError] = useState(null);

    const capacities = ["20KL", "24KL", "25KL", "28KL", "29KL", "30KL", "34KL", "35KL", "40KL"];

    const maxSelections = 2;

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            if (capacities.length > maxSelections) {
                setError(`You can select a maximum of ${maxSelections} preferences.`);
                return;
            }
            setFormData(prevData => ({
                ...prevData,
                vehicleCapacityDetails: {
                    ...prevData.vehicleCapacityDetails,
                    vehicleCapacityPreference: capacities
                }
            }));
            setError(null);
        } else {
            setFormData(prevData => ({
                ...prevData,
                vehicleCapacityDetails: {
                    ...prevData.vehicleCapacityDetails,
                    vehicleCapacityPreference: []
                }
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevData => {
            let updatedPreferences = [...prevData.vehicleCapacityDetails.vehicleCapacityPreference];

            if (checked) {
                if (updatedPreferences.length >= maxSelections) {
                    setError(`You can select a maximum of ${maxSelections} preferences.`);
                    return prevData;
                }
                updatedPreferences.push(value);
            } else {
                updatedPreferences = updatedPreferences.filter(v => v !== value);
            }

            setError(null);
            return {
                ...prevData,
                vehicleCapacityDetails: {
                    ...prevData.vehicleCapacityDetails,
                    vehicleCapacityPreference: updatedPreferences
                }
            };
        });
    };

    useEffect(() => {
        const allChecked = capacities.every(cap => formData.vehicleCapacityDetails.vehicleCapacityPreference.includes(cap));
        document.getElementById('select-all').checked = allChecked;
    }, [formData.vehicleCapacityDetails.vehicleCapacityPreference]);

    return (
        <form onSubmit={(e) => handleSubmit(e, formData, saveData, onComplete)}>
            <div className='section'>
                <h2>Vehicle Capacity Details</h2>
                <hr />
                <label className="full-width">Vehicle Capacity Preference</label>
                <br />
                <div class="full-width" style={{"backgroundColor" : "white","maxWidth": "30%", "height": "100px", "overflowY": "scroll"}}>
                    <label>
                        <input type="checkbox" id="select-all" onChange={handleSelectAll} /> Select All
                    </label>
                    <br />
                    {capacities.map(capacity => (
                        <label key={capacity}>
                            <input
                                type="checkbox"
                                name="vehicleCapacityPreference"
                                value={capacity}
                                checked={formData.vehicleCapacityDetails.vehicleCapacityPreference.includes(capacity)}
                                onChange={handleCheckboxChange}
                            /> {capacity}
                        <br />
                        </label>
                    ))}
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Select a maximum of two preferences.</p>
            </div>
            
            <div className="form-footer">
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}

export default VehicleCapacityDetails;
