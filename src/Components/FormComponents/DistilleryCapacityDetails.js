import React, { useState } from 'react';
import { handleChange, handleSubmit, handleFileChange } from "./helpers";

const DistelleryCapacityDetails = ({ onComplete, saveData, onPrevious}) =>{
    const [formData, setFormData] = useState({
        PESODetails: {
            PESOLicenceNumber: '',
            PESOLicenceValidity: '',
            PESOStorageCapacity: '',
            PESOStorageDoc: null
        },
        CTODetails: {
            CTONumber: '',
            CTOValidity: '',
            CTODesignCapacity: '',
            CTOCertificateDoc: null
        },
        capacityDetails: {
            monthlyProductionCapacity: '',
            annualProductionCapacity: ''
        }
    });

    const today = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={(e) => handleSubmit(e, formData, saveData, onComplete)}>
            <div className="section">
                <h2>PESO Details</h2>
                <hr />
                <div className="form-row">
                    <label>PESO Licence Number (Form XV)</label>
                        <input type="text"
                        name="PESOLicenceNumber"
                        data-section="PESODetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>PESO Licence Validity Upto Date</label>
                        <input type="date"
                        name="PESOLicenceValidity"
                        data-section="PESODetails"
                        min={today}
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>PESO Storage Capacity(KL)</label>
                        <input type="number"
                        name="PESOStorageCapacity"
                        data-section="PESODetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>PESO Storage document
                    <small> (PDF only, max 25MB)</small>
                    </label>
                    <input
                        type="file"
                        name="PESOStorageDoc"
                        data-section="PESODetails"
                        onChange={(e) => handleFileChange(e, setFormData)}
                        required
                    />
                </div>
                  
            </div>
            <div className="section">
                <h2>CTO Details</h2>
                <hr />
                <div className="form-row">
                    <label>
                        Consent to Operate Number</label>
                        <input type="text"
                        name="CTONumber"
                        data-section="CTODetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>
                        Consent to Operate Validity Upto Date</label>
                        <input type="date"
                        name="CTOValidity"
                        data-section="CTODetails"
                        min={today}
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>
                        Consent to Operate Design Capacity (KL per Day)</label>
                        <input type="number"
                        name="CTODesignCapacity"
                        data-section="CTODetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>
                        Consent to Operate Certificate
                        <small> (PDF only, max 25MB)</small>
                        </label>
                        <input
                            type="file"
                            name="CTOCertificateDoc"
                            data-section="CTODetails"
                            onChange={(e) => handleFileChange(e, setFormData)}
                            required
                        />
                </div>
                  
            </div>
            <div className="section">
                <h2>Capacity Details</h2>
                <hr />
                <div className="form-row">
                    <label>
                        Monthly Production Capacity (KL)</label>
                        <input type="number"
                        name="monthlyProductionCapacity"
                        data-section="capacityDetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                </div>
                  
                  
                <div className="form-row">
                    <label>
                        Annual Production Capacity (KL)</label>
                        <input type="number"
                        name="annualProductionCapacity"
                        data-section="capacityDetails"
                        onChange={(e) => handleChange(e, setFormData)}
                        required />
                    
                </div>
            </div>
            <div className="form-footer">
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Next</button>
            </div>
        </form>
    )
}

export default DistelleryCapacityDetails;