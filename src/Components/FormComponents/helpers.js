export const handleChange = (e, setFormData) => {
    const { name, value, dataset, type, options, checked } = e.target;
    const { section } = dataset;
  
    let newValue;
  
    if (type === 'select-multiple') {
      // Handle multiple select dropdowns
      newValue = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else if (type === 'checkbox') {
      // Handle checkbox inputs
      newValue = checked;
    } else {
      // Handle simple text inputs and other input types
      newValue = value;
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: newValue,
      },
    }));
};
  

export const handleSubmit = (e, formData, saveData, onComplete) => {
  e.preventDefault();
  if (e.target.checkValidity()) {
    saveData(formData); // Save data to parent or wherever needed
    onComplete(); // Mark the current tab as complete
  }
};

export const handleFileChange = (e, setFormData) => {
    const file = e.target.files[0]; // Get the selected file
    const {name, dataset} = e.target;
    const {section} = dataset;

    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: file,
      }
    }));
  };

export const getStates = async () => {
    const res = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
    const data = await res.json();
    return data.states;
}

export const getDistricts = async (id) => {
    const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`)
    const data = await res.json();
    return data.districts;
}
