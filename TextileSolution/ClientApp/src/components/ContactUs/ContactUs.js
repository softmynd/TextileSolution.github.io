import React, { useState } from 'react';
import { Col, Button, Row, CardDeck } from 'reactstrap';
import { TextField } from '@material-ui/core';

const ContactUs = () => {
    const vendorFilds = {
        vendorName: '', accountName: '', accountNumber: '', ifscCode: '', bankName: '', bankBranch: '',
        panNumber: '', gstNumber: '', mobileNumber: '', emailAddress: '', address: ''
    }
    const [dataVendor, setVendor] = useState(vendorFilds);
    const handleChange = (event) => {
        const { value, name } = event.target;
        setVendor({ ...dataVendor, [name]: value })
    }

    const onBuyerSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onBuyerSubmit}>

                <Row>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <TextField fullWidth name="vendorName" onChange={handleChange} value={dataVendor.vendorName}
                            variant="outlined" label="Buyer Name" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <TextField fullWidth name="accountName" onChange={handleChange} value={dataVendor.accountName}
                            variant="outlined" label="Account Name" size="small" autoComplete="off" />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="mobileNumber" onChange={handleChange} value={dataVendor.mobileNumber}
                            type="number" variant="outlined" label="Mobile Number" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth type="email" name="emailAddress" onChange={handleChange} value={dataVendor.emailAddress}
                            variant="outlined" label="Email Address" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="panNumber" onChange={handleChange} value={dataVendor.panNumber}
                            variant="outlined" label="PAN Number" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="gstNumber" onChange={handleChange} value={dataVendor.gstNumber}
                            variant="outlined" label="GST Number" size="small" autoComplete="off" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="accountNumber" onChange={handleChange} value={dataVendor.accountNumber}
                            type="number" variant="outlined" label="Account Number" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="ifscCode" onChange={handleChange} value={dataVendor.ifscCode}
                            variant="outlined" label="IFSC Code" size="small" autoComplete="off" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <select size="small" className="form-control" name="bankName" onChange={handleChange} value={dataVendor.bankName}>
                            <option value={0}>-- Select Bank --</option>

                        </select>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12}>
                        <TextField fullWidth name="bankBranch" onChange={handleChange} value={dataVendor.bankBranch}
                            variant="outlined" label="Bank Branch" size="small" autoComplete="off" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <TextField fullWidth name="address" onChange={handleChange} value={dataVendor.address}
                            variant="outlined" label="Address" size="small" autoComplete="off" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xl={2} lg={2} md={2}>
                        <Button outline color="primary">Create Buyer</Button>
                    </Col>
                </Row>

            </form >
        </div>
    );
}
export default ContactUs;