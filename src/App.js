import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class App extends Component {
  state = {
    name: '',
    receiptId: 0,
    RegistrationCharges: 0,
    UtilityCharges: 0,
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (

      <div className="App">
        {/* <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
        <input type="number" placeholder="Registration Charges" name="RegistrationCharges" onChange={this.handleChange} />
        <input type="number" placeholder="Utility Charges" name="UtilityCharges" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button> */}
      
      <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>New Patient Registration</h1>
        </div>
        <div class="colums">
          <div className="App">
            <label for="fname"> Full Name<span>*</span></label>
            <input id="fname" type="text"  name="name" onChange={this.handleChange}/>
          </div>
          <div className="App">
            <label for="lname"> Receipt ID<span>*</span></label>
            <input id="lname" type="number"  name="receiptId" onChange={this.handleChange} />
          </div>
          <div className="App">
            <label for="address1">Registration Charges<span>*</span></label>
            <input id="address1" type="number"  name="RegistrationCharges" onChange={this.handleChange} />
          </div>
          <div className="App">
            <label for="address2">Utility Charges<span>*</span></label>
            <input id ="address2" type="number"  name="UtilityCharges" onChange={this.handleChange} />
          </div>
          <div class="item">
            <label for="state">State</label>
            <input id="state" type="text" name="state"/>
          </div>
          <div class="item">
            <label for="zip">Zip/Postal Code</label>
            <input id="zip" type="text" name="zip" />
          </div>
          <div class="item">
            <label for="city">City</label>
            <input id="city" type="text" name="city" />
          </div>
          <div class="item">
            <label for="eaddress">Email Address</label>
            <input id="eaddress" type="text" name="eaddress" />
          </div>
          <div class="item">
            <label for="phone">Phone</label>
            <input id="phone" type="tel" name="phone" />
          </div>
        </div>
        <div class="question">
          <label>Membership Type</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="type"/>
              <label for="radio_1" class="radio"><span>Standard</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_2" name="type"/>
              <label for="radio_2" class="radio"><span>Premium</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_3" name="type"/>
              <label for="radio_3" class="radio"><span>Ultimate</span></label>
            </div>
          </div>
        </div>
        <div class="question">
          <label>Preferred way to contact </label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_4" name="contact"/>
              <label for="radio_4" class="radio"><span>Phone</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_5" name="contact"/>
              <label for="radio_5" class="radio"><span>Email</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_6" name="contact"/>
              <label for="radio_6" class="radio"><span>Any</span></label>
            </div>
          </div>
        </div>
        <h2>Terms and Conditions</h2>
        <input type="checkbox" name="checkbox1" />
        <label>You consent to receive communications from us electronically. We will communicate with you by e-mail or phone. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</label>
        <div class="btn-block App">
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
      </form>
    </div>
    </div>
    );
  }
}

export default App;
