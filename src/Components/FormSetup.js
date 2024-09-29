import SupplierDetails from "./FormComponents/SupplierDetails";
import React, { useState } from "react";
import DistilleryDetails from "./FormComponents/DistelleryDetails";
import DistilleryCapacityDetails from "./FormComponents/DistilleryCapacityDetails";
import VehicleCapacityDetails from "./FormComponents/VehicleCpacityDetails";
import DeclarationDetails from "./FormComponents/DeclarationDetails";
import downloadFormDataAsPDF from "./DownloadAsPDF";

const MultiTabbedForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [formData, setFormData] = useState({
    SupplierDetails: {
    },
    DistilleryDetails: {
    },
    DistilleryCapacityDetails:{
    },
    VehicleCapacityDetails:{
    },
    DeclarationDetails:{
    }
  });

  const saveTabData = (tabKey, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [tabKey]: data,
    }));
  };

  const handleCompleteTab = (tabIndex) => {
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[tabIndex] = true;
    setCompletedTabs(newCompletedTabs);
    if (tabIndex < completedTabs.length - 1) {
      setActiveTab(tabIndex + 1);
    }
  };

  const handleDownloadPDF = () => {
    downloadFormDataAsPDF(formData);
  };

  const handlePreviousTab = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };


  return (
    <div className="full-page">
      <h1 className="navbar-page-heading">Supplier Registration Form</h1>
      {/* Tab Navigation */}
      <div className="tab-navigation">
        {["Supplier Details", "Distillery Details", "Distillery Capacity Details", "Vehicle Capacity Details", "Declaration Details"].map(
          (tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
              disabled={index > activeTab} 
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 0 && (
          <SupplierDetails
            onPrevious={handlePreviousTab}
            onComplete={() => handleCompleteTab(0)}
            saveData={(data) => saveTabData("SupplierDetails", data)}
          />
        )}
        {activeTab === 1 && (
          <DistilleryDetails
            onPrevious={handlePreviousTab}
            onComplete={() => handleCompleteTab(1)}
            saveData={(data) => saveTabData("DistilleryDetails", data)}
          />
        )}
        {activeTab === 2 && (
          <DistilleryCapacityDetails
            onPrevious={handlePreviousTab}
            onComplete={() => handleCompleteTab(2)}
            saveData={(data) => saveTabData("DistilleryCapacityDetails", data)}
          />
        )}
        {activeTab === 3 && (
          <VehicleCapacityDetails
            onPrevious={handlePreviousTab}
            onComplete={() => handleCompleteTab(3)}
            saveData={(data) => saveTabData("VehicleCapacityDetails", data)}
          />
        )}
        {activeTab === 4 && (
          <DeclarationDetails
            onPrevious={handlePreviousTab}
            onComplete={() => handleCompleteTab(4)}
            onDownload={handleDownloadPDF}
            saveData={(data) => saveTabData("DeclarationDetails", data)}
          />
        )}
      </div>
    </div>
  );
};

export default MultiTabbedForm;
