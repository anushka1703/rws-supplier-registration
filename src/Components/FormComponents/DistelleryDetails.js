import React, { useState, useEffect } from "react";
import { handleChange, handleSubmit, getStates, getDistricts, handleFileChange } from "./helpers";

const DistilleryDetails = ({ onComplete, saveData, onPrevious }) => {
  const [formData, setFormData] = useState({
    distilleryDetails: {
      distilleryName: "",
      distilleryManagerName: "",
      GSTIN: "",
      feedstockType: "",
    },
    DSCDetails: {
      DSCNumber: "",
      DSCValidityDate: "",
    },
    contactDetails: {
      distilleryContactNumber: "",
      distilleryAlternateContactNumber: "",
      distilleryEmailAddress: "",
      distilleryAlternateEmailAddress: "",
    },
    addressDetails: {
      distilleryAddressLine1: "",
      distilleryAddressLine2: "",
      distilleryState: "",
      distilleryDistrict: "",
      distilleryCityTownTaluka: "",
      distilleryPincode: "",
      distilleryLatitude: "",
      distilleryLongitude: "",
    },
    documents: {
      integrityPact: null,
      documentType: "",
      EMDDocument: null,
    },
    DEPDeatils: {
      longTermAgreement:false 
    },
    nonDEPDetails: {
      feedstock: [],
    }
  });

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const feedstockOptions = ["Sugarcane Juice", "B-Heavy Molasses", "C-Heavy Molasses", "Damaged Food Grains",
     "Surplus rice sourced from FCI", "Maize", "Raw Sugarcane"];
  const today = new Date().toISOString().split('T')[0];
  const [pincodeData, setPincodeData] = useState(null);

  useEffect(() => {
    const fetchStatesData = async () => {
      const statesData = await getStates();
      setStates(statesData);
    };

    fetchStatesData();
  }, []);

  const handleStateChange = async (event) => {
    const stateId = event.target.value;
    const selectedStateName =
      event.target.options[event.target.selectedIndex].text;
    setFormData({
      ...formData,
      addressDetails: {
        ...formData.addressDetails,
        distilleryState: selectedStateName,
        distilleryDistrict: "",
      },
    });


    if (stateId) {
      const districtData = await getDistricts(stateId);
      setDistricts(districtData);
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrictName =
      event.target.options[event.target.selectedIndex].text;

    setFormData({
      ...formData,
      addressDetails: {
        ...formData.addressDetails,
        distilleryDistrict: selectedDistrictName,
      },
    });
  };

  const handlePincodeChange = (e) => {
    const { name, value, dataset } = e.target;
    const section = dataset.section;

    setFormData(prevData => ({
        ...prevData,
        [section]: {
            ...prevData[section],
            [name]: value
        }
    }));
    if (value.length===6){
    fetchPincodeDetails(value);
    }
  };

  const fetchPincodeDetails = async (pincode) => {
    const url = `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7f07693abemsh93646a2b8f39442p14caa9jsn01d83c8038d6',
            'x-rapidapi-host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lng } = data[0]; 
          setPincodeData({latitude:lat, longitude:lng});
          setFormData(prevData => ({
            ...prevData,
            addressDetails: {
                ...prevData.addressDetails,
                distilleryLatitude: lat,
                distilleryLongitude: lng
            }
        }));
      }
    } catch (error) {
        console.error('Error fetching pincode data:', error);
    }
  };

  useEffect(() => {
    if (pincodeData) {
        // Populate the form with latitude and longitude data
        setFormData(prevData => ({
            ...prevData,
            addressDetails: {
                ...prevData.addressDetails,
                distilleryLatitude: pincodeData.latitude,
                distilleryLongitude: pincodeData.longitude
            }
        }));
    }
  }, [pincodeData]);


  const handleSelectAll = (e) => {
    if (e.target.checked) {
        setFormData(prevData => ({
            ...prevData,
            nonDEPDetails: {
                ...prevData.nonDEPDetails,
                feedstock: feedstockOptions
            }
        }));
    } else {
        setFormData(prevData => ({
            ...prevData,
            nonDEPDetails: {
              ...prevData.nonDEPDetails,
              feedstock: []
          }
        }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevData => {
        let updatedPreferences = [...prevData.nonDEPDetails.feedstock];
        if (checked) {
            updatedPreferences.push(value);
        } else {
            updatedPreferences = updatedPreferences.filter(v => v !== value);
        }
        return {
            ...prevData,
            nonDEPDetails: {
                ...prevData.nonDEPDetails,
                feedstock: updatedPreferences
            }
        };
    });
  };

  useEffect(() => {
    const allChecked = feedstockOptions.every(op => formData.nonDEPDetails.feedstock.includes(op));
    document.getElementById('select-all').checked = allChecked;
}, [formData.nonDEPDetails.feedstock]);

  return (
    <form onSubmit={(e) => handleSubmit(e, formData, saveData, onComplete)}>
      <div className="section">
        <h2>Distillery Details</h2>
        <hr />
        <div className="form-row">
          <label>
          Distillery Name</label>
            <input
              type="text"
              name= "distilleryName"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="distilleryDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            GSTIN</label>
            <input
              type="text"
              name="GSTIN"
              pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9][A-Z][0-9]"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="distilleryDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            Distillery Manager</label>
            <input
              type="text"
              name="distilleryManagerName"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="distilleryDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            Feedstock type</label>
            <select name="feedstockType" data-section="distilleryDetails" onChange={(e) => handleChange(e, setFormData)}>
              <option value="">Select Feedstock Type</option>
              <option value="sugar">Sugar</option>
              <option value="grain">Grain</option>
              <option value="dual (grain and sugar)">Dual (Grain and Sugar)</option>
            </select>
        </div>
          
      </div>
      <div className="section">
        <h2>DSC Details</h2>
        <hr />
        <div className="form-row">
          <label>
            DSC Number</label>
            <input type="text"
            name = "DSCNumber"
            data-section = "DSCDetails"
            onChange={(e) => handleChange(e, setFormData)}
            required />
        </div>
          
          
        <div className="form-row">
          <label>
            DSC Validity Till Date</label>
            <input type="date"
            name = "DSCValidityDate"
            data-section = "DSCDetails"
            min={today}
            onChange={(e) => handleChange(e, setFormData)}
            required />
        </div>
          
      </div>
      <div className="section">
        <h2>Contact Details</h2>
        <hr />
        <div className="form-row">
          <label>
            Distillery Contact Number</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="distilleryContactNumber"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="contactDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            Distillery Email Address</label>
            <input
              type="email"
              name="distilleryEmailAddress"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="contactDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            Alternate Distillery Contact Number</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="distilleryAlternateContactNumber"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="contactDetails"
              required
            />
          
        </div>
          
        <div className="form-row">
          <label>
            Alternate Distillery Email Address</label>
            <input
              type="email"
              name="distilleryAlternateEmailAddress"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="contactDetails"
              required
            />
        </div>
          
          
      </div>
      <div className="section">
        <h2>Address Details</h2>
        <hr />
        <div className="form-row">
          <label>
            Registered Distillery Address Line 1</label>
            <input
              type="text"
              name="distilleryAddressLine1"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="addressDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            Registered Distillery Address Line 2</label>
            <input
              type="text"
              name="distilleryAddressLine2"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="addressDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label htmlFor="state">
            Distillery State</label>
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
            Distillery District</label>
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
            Distillery City/Town/Taluka</label>
            <input
              type="text"
              name="distilleryCityTownTaluka"
              onChange={(e) => handleChange(e, setFormData)}
              data-section="addressDetails"
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
          Distillery Pincode</label>
            <input
              type="number"
              pattern="[0-9]{6}"
              name="distilleryPincode"
              onChange={(e) => handlePincodeChange(e, setFormData)}
              data-section="addressDetails"
              required
            />
        </div>

                    <div className="form-row">
                        <label>Distillery Latitude</label>
                        <input
                            type="text"
                            name="distilleryLatitude"
                            value={formData.addressDetails.distilleryLatitude}
                            readOnly
                            data-section="addressDetails"
                        />
                    </div>
                    <div className="form-row">
                        <label>Distillery Longitude</label>
                        <input
                            type="text"
                            name="distilleryLongitude"
                            value={formData.addressDetails.distilleryLongitude}
                            readOnly
                            data-section="addressDetails"
                        />
                    </div>
          
      </div>
      <div className="section">
        <h2>Documents</h2>
        <hr />
        <div className="form-row">
          <label>
            Integrity Pact
            <small> (PDF only, max 25MB)</small>
          </label>
            <input
              type="file"
              name="integrityPact"
              data-section="documents"
              onChange={(e) => handleFileChange(e, setFormData)}
              required
            />
        </div>
          
          
        <div className="form-row">
          <label>
            EMD Document type</label>
            <select name="documentType" data-section="documents" onChange={(e) => handleChange(e, setFormData)}>
              <option value="">Select Document Type</option>
              <option value="NEFT/RTGS">NEFT/RTGS</option>
              <option value="Bank Guarantee">Bank Guarantee</option>
              <option value="Exemption from Earnest Money Deposit">Dual (Grain and Sugar)</option>
            </select>
        </div>
          
          
        <div className="form-row">
          <label>
            EMD Document 
            <small> (PDF only, max 25MB)</small>
            </label>
            <input
              type="file"
              name="EMDDocument"
              data-section="documents"
              onChange={(e) => handleFileChange(e, setFormData)}
              required
            />
        </div>
          
      </div>
      <div className="section">
        <h2>DEP Details</h2>
        <hr />
          <div className="full-width">
            <label>
              Have long term Offtake Agreement with OMC - DEP (Dedicated Ethanol Plant)
              </label>
              <input type="checkbox"
              name = "longTermAgreement"
              data-section= "DEPDeatils"
              checked={formData.DEPDeatils.longTermAgreement}
              onChange={(e) => handleChange(e, setFormData)}
              />
          </div>
          
      </div>
      <div className="section">
        <h2>Non-DEP Details</h2>
        <hr />
        <label className="full-width">
          Feedstock</label>
          <br />
          <div className="full-width" style={{"backgroundColor" : "white","maxWidth": "30%", "height": "100px", "overflowY": "scroll"}}>
             <label>
                <input type="checkbox" id="select-all" onChange={handleSelectAll} /> Select All
              </label>
              <br />
              {feedstockOptions.map(option => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      name="feedstock"
                      value={option}
                      checked={formData.nonDEPDetails.feedstock.includes(option)}
                      onChange={handleCheckboxChange}
                      /> {option}
                      <br />
                  </label>
              ))}
            </div>
          <p></p> 
      </div>
      <div className="form-footer">
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default DistilleryDetails;
