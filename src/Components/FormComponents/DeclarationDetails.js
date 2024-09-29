import React, { useState } from 'react';
import { handleChange, handleSubmit } from "./helpers";

const DeclarationDetails = ({ onComplete, saveData, onPrevious, onDownload}) =>{
    const [formData, setFormData] = useState({
        annexure2:{
            agree1:'I agree',
        },
        annexure3:{
            agree1:'I agree',
        },
        annexure7:{
            agree1:'I agree'
        },
        annexure8:{
            agree1:'I agree'
        },
        annexure9:{
            agree1:'I agree'
        },
        annexure10:{
            agree1:'I agree'
        },
        annexure11:{
            agree1:'I agree',
            agree2:'I agree'
        },
        annexure12:{
            agree1:'I agree',
            agree2:'I agree'
        },
        annexure13:{
            agree1:'I agree',
            agree2:'I agree'
        },
        annexure14:{
            agree1:'I agree',
            agree2:'I agree'
        },
        annexure15:{
            agree1:'I agree'
        }
    })

    return (
        <form onSubmit={(e) => handleSubmit(e, formData, saveData, onComplete)}>
            <div className='section'>
                <h2>ANNEXURE II - General instructions to bidder for E-tendering</h2>
                <hr />
                    <label className='annexure-label'>I / We hereby agree to all the terms and conditions of the attached Annexure- II General Instructions to Bidders for E-Tendering.</label>
                    <select className="annexure-select" name="agree1" data-section="annexure2" onChange={(e) => handleChange(e, setFormData)}>
                        <option value="agree">I agree</option>
                        <option value="do not agree">I do not agree</option>
                    </select>
                
            </div>
            <div className='section'>
                <h2>ANNEXURE III - Pre-requisites and special conditions</h2>
                <hr />
                <label className='annexure-label'>I / We hereby agree to all the terms and conditions of the Annexure - III for Pre-requisites and special conditions.
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure3" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
                
            </div>
            <div className='section'>
                <h2>ANNEXURE VII - Specifications for Denatured Anhydrous Ethanol</h2>
                <hr />
                <label className='annexure-label'>I / We hereby agree to all the terms and conditions of the Annexure - VII Specifications for Denatured Anhydrous Ethanol
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure7" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
                
            </div>
            <div className='section'>
                <h2>ANNEXURE VIII - Draft Agreement</h2>
                <hr />
                <label className='annexure-label'>I / We hereby agree to all the terms and conditions of the Annexure - VIII Draft Agreement
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure8" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
                
            </div>
            <div className='section' >
                <h2>ANNEXURE IX - General Purchase Conditions</h2>
                <hr />
                <label className='annexure-label'>I / We hereby agree to all the terms and conditions of the Annexure - IX General Purchase Conditions
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure9" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
            </div>
            <div className='section'>
                <h2>ANNEXURE X - OMCs INTEGRITY PACT Bidder shall have to essentially sign the Integrity Pact(IP) of all 4 Oil Marketing Companies - IOCL, BPCL, HPCL & MRPL for participating in the tender.
                </h2>
                <hr />
                <label className='annexure-label'>Bidder to upload OMCs IP document duly signed & stamped on all pages along with 02 witness, name & address Signed and Witnessed Integrity Pact to be uploaded
                </label>                
                <select className="annexure-select" name="agree1" data-section="annexure7" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
                
            </div>
            <div className="section">
                <h2>Annexure XI - Affidavit cum Indemnity Bond</h2>
                <hr />
                    <label className='annexure-label'><p></p>1. I/We confirm that I/We are/shall be meeting all the qualification criteria for production/manufacturing/supplying of Ethanol meeting Industry Specifications of Denatured Anhydrous Ethanol based on IS 15464:2022 and revision from BIS from time to time, as required under said EOI.
                            <p></p>2. That I/We is/are/shall be producing Ethanol from feed stock from Sugarcane Juice/ Sugar/Sugar Syrup, B-Heavy Molasses, C-Heavy Molasses, Damaged food grains, Maize, Surplus rice sourced from FCI
                            <p></p>3. I/We confirm that the sources of feed stock/ raw materials/intermediate stock are/shall be of indigenous origin only and no imported Feed stock / Raw materials/intermediate stock will be used for manufacturing Ethanol.
                            <p></p>4. Applicable for existing distilleries: I/We is/am/ are/shall be holding all the required statutory approvals/ certificates/licenses/documents etc. and shall continue to hold the same during 1 the contract period and shall also obtain and hold any additional approvals/ certificates/licenses which may be required by any statutory authority during the contract period.
                            <p></p>5. I/We is/am/shall at all times follow and abide by all central and state rule regulations and shall be solely liable for any violation or non-compliance of any of the above requirements.
                            <p></p>6. I/We shall indemnify and hold harmless Oil Marketing Companies (IOCL/BPCL/HPCL/MRPL), their officers, directors, employees etc. against any and all claims, damages, penalty/ies, liability/ies, losses, demands, action, suits etc. arising out of noncompliance of any of the above requirements.
                            <p></p>7. I/We do hereby agree that in case of the non-compliance of any of the above requirements, Oil Marketing Companies shall be free to take any action including but not limited to the termination of contract and such decision of Oil Marketing Companies shall be final and binding on us.
                            <p></p>8. I/We confirm that we shall be able to supply Ethanol to OMCs from the beginning of the month of the quarter as quoted in price bid.
                    </label>
                    <select className="annexure-select" name="agree1" data-section="annexure11" onChange={(e) => handleChange(e, setFormData)}>
                        <option value="agree">I agree</option>
                        <option value="do not agree">I do not agree</option>
                    </select>

                <br />
                    <label className='annexure-label'>I/ We is/am/ are reconfirming that my/ our company are/shall be holding all the required statuary approvals/ certificates/ licenses/documents etc. as of date of commencement of supplies as mentioned in this EOI & Quantity Bid and shall continue to hold the same during the contract period and shall also obtain and hold any additional approvals/ certificates/ licenses which
                    </label>
                    <select className='annexure-select' name="agree2" data-section="annexure11" onChange={(e) => handleChange(e, setFormData)}>
                        <option value="agree">I agree</option>
                        <option value="do not agree">I do not agree</option>
                    </select>
                
            </div>
            <div className='section'>
                <h2>Annexure XII - Declaration For Documents</h2>
                <hr />
                <label className='annexure-label'> I/we hereby undertake that the statements made herein/information given in the bids through e-tendering system/annexures /forms/uploaded documents referred are true in all respects and that in the event of any such statement or information being found to be incorrect in any particular, the same may be construed to be a misrepresentation entitling BPCL/IOCL/HPCL/MRPL to avoid any resultant contract. This may also include holiday listing of the vendor for a period deemed fit by OMCs.
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure12" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>

                <br />
                <label className='annexure-label'>I/we further undertake as and when called upon by BPCL/IOCL/HPCL/MRPL to produce, for its inspection, original(s)of the document(s) for verification
                </label>
                <select className="annexure-select" name="agree2" data-section="annexure12" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>

            </div>
            <div className='section'>
                <h2>ANNEXURE XIII - DECLARATION FOR HOLIDAY LISTING Bidders are required to accept Holiday Listing Policy of BPCL and provide declaration as mentioned below. Offers received without this declaration shall be liable for rejection</h2>
                <hr />
                <label className='annexure-label'>I / We hereby declare that I/we are not currently serving any holiday listing orders issued by BPCL and/ or IOCL and/ or HPCL and/ or MRPL and/ or MOP&NG and/ or any other OIL PSE debarring us from carrying on business dealings with BPCL and/ or IOCL and/ or HPCL and/ or MRPL and/ or MOP&NG and/ or any other OIL
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure13" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>

                <br />
                <label className='annexure-label'>I / We declare and confirm Acceptance of Holiday listing Policy as per General purchase condition of this tender
                </label>
                <select className="annexure-select" name="agree2" data-section="annexure13" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
                <br />
                <p>Any wrong declaration by Bidder in this context is liable for action under this Holiday Listing Policy.</p>
            </div>

            <div className='section'>
                <h2>Annexure XIV - Compliance of restrictions for countries which share land border with India</h2>
                <hr />
                <label className='annexure-label'>
                    <p></p>(I) Any bidder* from a country which shares a land border with India will be eligible to bid in this tender only if bidder is registered with Competent Authority. The Competent authority for the purpose of registration shall be the Registration Committee constituted by the Department of Promotion of Internal Trade (DPIIT) of Govt. of India. (* In case of domestic tenders, the term bidder shall mean domestic bidders as defined under clause III below)
                    <p></p>(II) Bidder (Including the term 'Tenderer', 'Consultant' or 'Service Provider' in certain contexts) means any person or firm or company, including any member of a consortium or joint venture (that is an association of several persons, or firms or companies), every artificial juridical person not falling in any of the descriptions of bidders stated herein before, including any agency branch or office controlled by such person, participating in a procurement process.
                    <p></p>(III) Bidder from a country which shares a land border with India means:
                        <ol>
                            <li>An entity incorporated, established or registered in such country; or</li>
                            <li>A subsidiary of an entity incorporated, established or registered in such country; or</li>
                            <li>An entity substantially controlled through entities incorporated, established or registered in such country; or</li>
                            <li>An entity whose beneficial owner is situated in such a country; or</li>
                            <li>An Indian (or other) agent of such an entity; or</li>
                            <li>A natural person who is a citizen of such a country; or</li>
                            <li>A consortium or joint venture where any member of the consortium or joint venture falls under any of the above.</li>
                        </ol>
                    <p></p>(IV) Beneficial owner for the purpose of para (III) above will be as under:
                        <ol>
                            <li>In case of a company or Limited Liability Partnership, the beneficial owner is the natural person(s), who, whether acting alone or together, or through one or more juridical person(s), has a controlling ownership interest or who exercises control through other means. Explanation:
                                <ol type="a">
                                    <li>Controlling ownership interest means ownership of an entitlement to more than twenty-five percent of shares or capital or profits of the company;</li>
                                    <li>Control shall include the right to appoint majority of the directors or to control the management or policy decisions including by virtue of their shareholding or management rights or shareholders agreements or voting agreements;</li>
                                </ol>
                            </li>
                            <li>In case of a partnership firm, the beneficial owner is the natural person(s) who, whether acting alone or together, or through one or more juridical person, has ownership of entitlement to more than fifteen percent of capital or profits of the partnership;</li>
                            <li>In case of an unincorporated association or body of individuals, the beneficial owner is the natural person(s), who, whether acting alone or together, or through one or through one or more juridical person(s), has ownership of or entitlement to more than fifteen percent of the property or capital or profits of such association or body of individuals;</li>
                            <li>Where no natural person is identified under (1) or (2) or (3) above, the beneficial owner is the relevant natural person who holds the position of senior managing official;</li>
                            <li>In case of a trust, the identification of beneficial owner(s) shall include identification of the author of the trust, the trustee, the beneficiaries with fifteen percent or more interest in the trust and any other natural person exercising ultimate effective control over the trust through a chain of control or ownership.</li>
                        </ol>
                    <p></p>(V) An Agent is a person employed to do any act for another, or to represent another in dealings with third person.
                    <p></p>(VI) The successful bidder shall not be allowed to sub-contract works to any contractor from a country which shares a land border with India unless such contractor is registered with the Competent Authority
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure14" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>

                <br/>
                <label className='annexure-label'>
                    <p></p>*Undertaking with respect to Compliance of Restrictions for Countries which share land border with India - as stipulated by Govt. of India.* In line with the guidelines issued for compliance of Restrictions for Countries which share land border with India - as issued by Govt. of India in July'2020, I/We have read the clause regarding restrictions on procurements from a bidder of a country which shares a land border with India and on sub-contracting to contractors from such countries.
                    <p></p>a. I/We certify that this bidder is not from such a country or if from such a country has been registered with the competent authority. I hereby certify that this bidder fulfills all requirements in this regard and is eligible to be considered*.
                    <p></p>b. I/We certify that this bidder is not from such a country or if from such a country has been registered with the competent authority and will not sub-contract any work to a contractor from such countries unless such contractor is registered with the competent authority. I hereby certify that this bidder fulfills all requirements in this regard and is eligible to be considered*. (Applicable for works involving possibility of sub-contracting)
                    <p></p>I/We hereby certify that I/We fulfill all requirements in this regard and am/are eligible to be considered. [*Where applicable, evidence of a valid registration by the Competent Authority shall be attached]
                </label>
                <select className="annexure-select" name="agree2" data-section="annexure14" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
            </div>
            <div className='section'>
                <h2>Annexure XV - Declaration for compliance of rules and regulations</h2>
                <hr />
                <label className='annexure-label'>Declaration for compliance of rules and regulations. Bidders undertake that they are following the provisions of Sugarcane (Control) Order 1966 and are complying with all the regulations as per clause 30 of general purchase conditions, while bidding in these ethanol tenders. Further, the bidder also confirms to guidelines to assess the production of ethanol and mechanism to identify the quantity of ethanol through various feedstocks.
                </label>
                <select className="annexure-select" name="agree1" data-section="annexure15" onChange={(e) => handleChange(e, setFormData)}>
                    <option value="agree">I agree</option>
                    <option value="do not agree">I do not agree</option>
                </select>
            </div>
            <div className="form-footer">
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Submit Form</button>
                <button onClick={onDownload} id="download-button">Download PDF</button>
            </div>
        </form>
    );
};

export default DeclarationDetails;