import React,{useState, useEffect} from 'react'
import SupplierSignUpHeader from '../../../components/supplier/signup/SupplierSignUpHeader';
import SupplierSignUpSidebar from '../../../components/supplier/signup/SupplierSignUpSidebar';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignupSupplierMutation } from '../../../store/api/supplier/authSupplierApi';


const SupplierSignUp = () => {
const [screenType, setScreenType] = React.useState<number>(1);
const onChangeScreen = (screen: number) => {
    setScreenType(screen)
  }
  const [supplierData, setSupplierData] =  React.useState({
  phone: "",
  otp_mobile: "",
  email: "",
  otp_email: "",
  password: "",
});

const handleInputs = (event:any) => {
  const name = event.target.name;
  const value = event.target.value;
  setSupplierData({ ...supplierData, [name]: value });
};

// const [signupSupplier,{ data, isLoading, error, isError, isSuccess }]= useSignupSupplierMutation()
const submitSupplierData =(event:any) => {
  // onChangeScreen(2) 
};


  return (
    <>
      <SupplierSignUpHeader />
      <section className='supplier-auth supplier-auth-signup'>
        <SupplierSignUpSidebar />
        {(() => {
          switch (screenType) {
            case 1:
              return (
                <div className='supplier-auth-right'>
                  <div className='auth-forms-outer'>
                    <div className='auth-titlebar'>
                      <h4 className='text-primary'><span className='fw-400'>Get</span> <label className='text-secondary mb-0'>Start</label></h4>
                      <p className='mb-0'>Create an account to start selling on <span className='text-secondary'>Flippy 7</span></p>
                    </div>
                    <div className='auth-line'></div>
                    <div className='auth-forms'>
                     <form >

                     <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-telephone"></i></span>
                        <Form.Control type="text" placeholder="Enter mobile number"
                       
                         required
                        />

                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-dash-circle"></i></span>
                        <Form.Control type="text" placeholder="Enter OTP"
                      
                         required

                        />
                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-envelope"></i></span>
                        <Form.Control type="text" placeholder="Enter email address"
                      
                         required


                        />
                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-dash-circle"></i></span>
                        <Form.Control type="text" placeholder="Enter OTP"                    
                         required

                        />
                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-lock"></i></span>
                        <Form.Control type="text" placeholder="Enter Password"
                         required

                        />
                        <p className='error-msg'>Error msg here...</p>
                      </Form.Group>
                      <div className='forms-footer mt-4'>
                        <div className="checkbox checkbox-primary">
                          <input type="checkbox" className="filled-in" id="agree" name='agree' />
                          <label htmlFor='agree'>By continuing, i agree to Flippy7’s Term of Use & Privacy policy</label>
                        </div>
                      </div>
                      <div className='d-grid'>
                        <Button variant="primary btn-radius btn-padding" type="submit" onClick={submitSupplierData}>Create Account</Button>
                        <ToastContainer
                       position="top-right"
                       autoClose={5000}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       rtl={false}
                       pauseOnFocusLoss
                       draggable
                       pauseOnHover
                       theme="colored"
                        />

                      </div>
                     </form>

                    </div>
                  </div>

                  <div className='auth-step-line'>
                    <ul className='step-line'>
                      <li className='active'></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              )
              break;
            case 2:
              return (
                <div className='supplier-auth-right'>
                  <div className='auth-forms-outer'>
                    <div className='auth-titlebar'>
                      <h4 className='text-primary'>Verify Your GSTIN</h4>
                    </div>
                    <div className='auth-line'></div>
                    <div className='auth-forms'>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-file-earmark-text"></i></span>
                        <Form.Control type="text" placeholder="Enter GSTIN" />
                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-credit-card"></i></span>
                        <Form.Control type="text" placeholder="Enter pan number" />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label>Upload Your Pancard</Form.Label>
                        <div className='fileupload-box'>
                          <Button variant="upload btn-circle"><i className="bi bi-cloud-upload"></i></Button>
                          <p><b className='text-primary'>Click to upload</b> or drag and drop<br/> PNG, JPG or Pdf (max size . 12mb)</p>
                          <input type="file" />
                        </div>
                      </Form.Group>
                      <div className='forms-button'>
                        <Button variant="outline-white btn-radius btn-padding" onClick={() => { onChangeScreen(1) }}>Back</Button>
                        <Button variant="primary btn-radius btn-padding" onClick={() => { onChangeScreen(3) }}>Continue</Button>
                      </div>

                    </div>
                  </div>
                  <div className='auth-step-line'>
                    <ul className='step-line'>
                      <li></li>
                      <li className='active'></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              )
            case 3:
              return (
                <div className='supplier-auth-right'>
                  <div className='auth-forms-outer'>
                    <div className='auth-titlebar'>
                      <h4 className='text-primary'>Add Your Bank Details</h4>
                    </div>
                    <div className='auth-line'></div>
                    <div className='auth-forms'>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-file-earmark-text"></i></span>
                        <Form.Control type="text" placeholder="Bank account number" />

                      </Form.Group>
                      <Form.Group className="form-group form-group-icon">
                        <span className='control-icon'><i className="bi bi-dash-circle"></i></span>
                        <Form.Control type="text" placeholder="IFSC Code" />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label>Upload Cancel Cheque</Form.Label>
                        <div className='fileupload-box'>
                          <Button variant="upload btn-circle"><i className="bi bi-cloud-upload"></i></Button>
                          <p><b className='text-primary'>Click to upload</b> or drag and drop<br/> PNG, JPG or Pdf (max size . 12mb)</p>
                          <input type="file" />
                        </div>
                      </Form.Group>
                      <div className='forms-button'>
                        <Button variant="outline-white btn-radius btn-padding" onClick={() => { onChangeScreen(2) }}>Back</Button>
                        <Button variant="primary btn-radius btn-padding" onClick={() => { onChangeScreen(4) }}>Continue</Button>
                      </div>

                    </div>
                  </div>
                  <div className='auth-step-line'>
                    <ul className='step-line'>
                      <li></li>
                      <li></li>
                      <li className='active'></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              )
            case 4:
              return (
                <div className='supplier-auth-right'>
                  <div className='auth-forms-outer'>
                    <div className='auth-titlebar'>
                      <h4 className='text-primary'>Add Your Address</h4>
                    </div>
                    <div className='auth-line'></div>
                    <div className='auth-forms'>
                      <div className='small-title'>
                        <h6 className='text-gray7'>Default Address</h6>
                      </div>
                      <Form.Group className="form-group">
                        <Form.Control type="text" placeholder="House / Flat No." />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Control type="text" placeholder="Street" />
                      </Form.Group>
                      <Row>
                        <Col md={6} sm={12}>
                          <Form.Group className="form-group">
                            <Form.Control type="text" placeholder="Landmark" />
                          </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                          <Form.Group className="form-group">
                            <Form.Control type="text" placeholder="City" />
                          </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                          <Form.Group className="form-group">
                            <Form.Control type="text" placeholder="State" />
                          </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                          <Form.Group className="form-group">
                            <Form.Control type="text" placeholder="Pin" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className='small-title mt-3'>
                        <h6 className='text-gray7'>Pickup Address</h6>
                      </div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <label className='mb-0'>Same as default address</label>
                        <div className="switch-box">
                          <label className="switch" htmlFor="defaultaddress">
                            <input type="checkbox" name="defaultaddress" id="defaultaddress" />
                            <div className="slider round"></div>
                          </label>
                        </div>
                      </div>
                      <div className='forms-button'>
                        <Button variant="outline-white btn-radius btn-padding" onClick={() => { onChangeScreen(3) }}>Back</Button>
                        <Button variant="primary btn-radius btn-padding" onClick={() => { onChangeScreen(5) }}>Continue</Button>
                      </div>
                    </div>
                  </div>
                  <div className='auth-step-line'>
                    <ul className='step-line'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li className='active'></li>
                    </ul>
                  </div>
                </div>
              )
            case 5:
              return (
                <div className='supplier-auth-right'>
                  <div className='auth-forms-outer'>
                    <div className='auth-titlebar at-success'>
                      <span className='auth-icon'><i className="bi bi-check2-circle"></i></span>
                      <h4 className='text-primary'>Account Created Successfully</h4>
                      <p className='mb-0'>Your Flippy Seven account has been created
                        successfully, Now you can start selling on flippy7</p>
                    </div>
                    <div className='auth-line'></div>
                    <div className='auth-forms'>

                      <div className='forms-button'>
                        <Button variant="primary btn-radius btn-padding">Upload Product</Button>
                        <Button variant="outline-white btn-radius btn-padding">Go to Dashboard</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            default:
              return null
          }
        })()}

      </section>
    </>
  )
}

export default SupplierSignUp