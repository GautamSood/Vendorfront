import React from 'react'
import './BasicDetails.css'
import Sidebar from './Sidebar';
import FaceIcon from '@mui/icons-material/Face';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addVendorBasicDetails } from "../Redux/vendorSlice";

const BasicDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const VendorBasic = useSelector(
      (state) => state.VendorInfo.VendorBasicDetails
    );

    const formsubmit = (e) => {
        
        e.preventDefault();
        console.log("function is working")
        let formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        // console.log(formData)
        dispatch(addVendorBasicDetails(formData));
        console.log(VendorBasic);
        
    };
    return (
      <div className="Appone">
        <div className="Head-class">
          <Sidebar />

          <div className="container">
            <form
              onSubmit={(event) => {
                formsubmit(event);
                navigate('/Taxdetails');
              }}
            >
              <div className="white-bar">
                <span className="name">Ankush Thakur</span>
                <div className="icon">
                  <FaceIcon />
                </div>
              </div>

              <div className="head-closed ">
                <div className="closed-class">
                  <div className="form-container">
                    <div className="hero-head">
                      <label htmlFor="nameofthecompany" className="form-label">
                        Name of the company/Firm:
                      </label>
                      <input
                        type="text"
                        id="nameofthecompany"
                        name="nameofthecompany"
                        className="form-control"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label htmlFor="floor" className="form-label">
                        Floor:
                      </label>
                      <input
                        type="text"
                        id="floor"
                        name="nameofthecompany"
                        className="form-control"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="street" className="form-label">
                        Street:
                      </label>
                      <input
                        type="text"
                        id="street"
                        name="street"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-container-split">
                    <div className="hero-head">
                      <label htmlFor="city" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control-multi"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="trainstation" className="form-label">
                        Nearest Train Station
                      </label>
                      <input
                        type="text"
                        id="trainstation"
                        name="trainstation"
                        className="form-control-multi"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="county" className="form-label">
                        County:
                      </label>
                      <input
                        type="text"
                        id="county"
                        name="county"
                        className="form-control-multi"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="country3" className="form-label">
                        Country:
                      </label>
                      <input
                        type="text"
                        id="country3"
                        name="country3"
                        className="form-control-multi"
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label htmlFor="postalcode" className="form-label">
                        Postal Code:
                      </label>
                      <input
                        type="text"
                        id="postalcode"
                        name="postalcode"
                        className="form-control"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="companyemailid" className="form-label">
                        Company Email ID:
                      </label>
                      <input
                        type="email"
                        id="companyemailid"
                        name="companyemailid "
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label htmlFor="primarynumber" className="form-label">
                        Primary Contact 1 (Phone):
                      </label>
                      <input
                        type="text"
                        id="primarynumber"
                        name="primarynumber"
                        className="form-control"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="primaryemail" className="form-label">
                        Primary Email 1:
                      </label>
                      <input
                        type="email"
                        id="primaryemail"
                        name="primaryemail "
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-container">
                    <div className="hero-head">
                      <label htmlFor="primarynumber2" className="form-label">
                        Primary Contact 2 (Phone):
                      </label>
                      <input
                        type="text"
                        id="primarynumber2"
                        name="primarynumber2"
                        className="form-control"
                      />
                    </div>
                    <div className="hero-head">
                      <label htmlFor="primaryemail2" className="form-label">
                        Primary Email 2:
                      </label>
                      <input
                        type="email"
                        id="primaryemail2"
                        name="primaryemail2 "
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nextbutton">
                <button type="submit" className="next-btn">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default BasicDetails;