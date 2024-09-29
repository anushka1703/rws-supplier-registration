import React, { useState, useEffect } from "react";
import { handleChange, handleSubmit, getStates, getDistricts, handleFileChange } from "./helpers";

const SupplierDetails = ({ onComplete, saveData }) => {
  const [formData, setFormData] = useState({
    companyDetails: {
      supplierCompanyName: "",
      supplierPANNumber: "",
      supplierManagerName: "",
    },
    contactDetails: {
      supplierContactNumber: "",
      supplierEmailAddress: "",
      supplierAlternateContactNumber: "",
      supplierAlternateEmailAddress: "",
    },
    addressDetails: {
      supplierAddressLine1: "",
      supplierAddressLine2: "",
      supplierState:"",
      supplierDistrict: "",
      supplierCityTownTaluka: "",
      supplierPincode: ""
    },
    documents: {
        certificateofIncorportaion: null,
    }
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchStatesData = async () => {
      const statesData = await getStates();
      setStates(statesData);
    };

    fetchStatesData();
  }, []);

  const handleStateChange = async (event) => {
    const stateId = event.target.value;
    const selectedStateName = event.target.options[event.target.selectedIndex].text;
    setFormData({
        ...formData,
        addressDetails: {
          ...formData.addressDetails,
          supplierState: selectedStateName,
          supplierDistrict: "", 
        }
      });


    if (stateId) {
      const districtData = await getDistricts(stateId);
      setDistricts(districtData);
 
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrictName = event.target.options[event.target.selectedIndex].text;

    setFormData({
      ...formData,
      addressDetails: {
        ...formData.addressDetails,
        supplierDistrict: selectedDistrictName,
      }
    });
  };

  

  return (
    <form onSubmit={(e) => handleSubmit(e, formData, saveData, onComplete)}>
      <div className="section">
        <h2>Company Details</h2>
        <hr />
        
        <div className="form-row">
          <label>Supplier Company Name</label>
            <input
              type="text"
              name="supplierCompanyName"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="companyDetails"
              required
            />
        </div>
        <div className="form-row">
          <label>
            Supplier PAN Number</label>
            <input type="text"
            name = "supplierPANNumber"
            pattern="[A-Z]{5}[0-9]{4}[A-Z]" 
            onChange={(e) => handleChange(e, setFormData)}
            data-section="companyDetails"
             required />
        </div>

        <div className="form-row">
          <label>
            Supplier Manager Name</label>
            <input type="text"
            name = "supplierManagerName"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="companyDetails"
            required />
        </div>
        
      </div>
      <div className="section">
        <h2>Contact Details</h2>
        <hr />
        <div className="form-row">
        <label>
          Supplier Contact Number        </label>
          <input type="tel"
          pattern="[0-9]{10}"
          name = "supplierContactNumber"
          onChange={(e) => handleChange(e, setFormData)}
          data-section="contactDetails"
           required />

        </div>
        <div className="form-row">
        <label>Supplier Email Address</label>
          <input type="email"
          name = "supplierEmailAddress"
          onChange={(e) => handleChange(e, setFormData)}
          data-section="contactDetails"
           required />
        </div>
        <div className="form-row">
          <label>Alternate Supplier Contact Number</label>
            <input type="tel"
            pattern="[0-9]{10}"
            name = "supplierAlternateContactNumber"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="contactDetails"
             required />
        </div>
        <div className="form-row">
          <label>
            Alternate Supplier Email Address        </label>
            <input type="email"
            name = "supplierAlternateEmailAddress"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="contactDetails"
             required />
        </div>

      </div>
      <div className="section">
        <h2>Address Details</h2>
        <hr />
        <div className="form-row">
          <label>Registered Supplier Address Line 1</label>
            <input type="text"
            name = "supplierAddressLine1"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="addressDetails"
            required />
        </div>
        
         
        <div className="form-row">
          <label>
            Registered Supplier Address Line 2</label>
            <input type="text"
            name = "supplierAddressLine2"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="addressDetails"
            required />
        </div>
        
         
        <div className="form-row">
          <label htmlFor="state">
            Supplier Registered State</label>
            <select id="state" name="state" onChange={handleStateChange} required>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.state_id} value={state.state_id}>
                  {state.state_name}
                </option>
              ))}
            </select>
        </div>

         
        <div className="form-row">
          <label htmlFor="district">
            Supplier Registered District</label>
            <select
              id="district"
              name="district"
              onChange={handleDistrictChange}
              required
            >
              <option value="">Select a district</option>
              {districts.map((district) => (
                <option key={district.district_id} value={district.district_id}>
                  {district.district_name}
                </option>
              ))}
            </select>
        </div>
 
         
        <div className="form-row">
          <label>
            Supplier Registered City/Town/Taluka</label>
            <input type="text"
            name = "supplierCityTownTaluka"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="addressDetails"
            required />
        </div>

         
        <div className="form-row">
          <label>
            Supplier Registered Pincode</label>
            <input type="number"
            pattern="[0-9]{6}"
            name = "supplierPincode"
            onChange={(e) => handleChange(e, setFormData)}
            data-section="addressDetails"
            required />
        </div>

      </div>
      <div className="section">
        <h2>Documents</h2>
        <hr />
        <div className="form-row">
          <label>Certificate of Incorportation
              <small>(PDF only, max 25MB)</small>
            </label>
              <input type="file"
              name = "certificateofIncorportaion"
              data-section='documents'
              onChange={(e) => handleFileChange(e, setFormData)}
              required />
        </div>

      </div>

      <div className="form-footer"><button type="submit">Next</button></div>
    </form>
  );
};

export default SupplierDetails;
