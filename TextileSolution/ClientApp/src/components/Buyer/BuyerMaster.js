import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { Modal } from 'react-bootstrap'
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import BuyerForm from './BuyerForm';
import BuyerList from './BuyerList';

const BuyerMaster = () => {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPaymentToModal, setPaymentToShow] = useState(false);
    const handlePaymentToClose = () => setPaymentToShow(false);
    const handlePaymentToShow = () => setPaymentToShow(true);

    const [showPaymentFromModal, setPaymentFromShow] = useState(false);
    const handlePaymentFromClose = () => setPaymentFromShow(false);
    const handlePaymentFromShow = () => setPaymentFromShow(true);


    return (
        <div className="m-3">
            <Row>
                <Col xl={2} lg={2} md={2} className="primary"><h4>All Buyer List</h4></Col>
                <Col xl={2} lg={2} md={2}>
                    <Button style={{ width: "100%" }} outline color="primary" size="sm" onClick={handleShow}>
                        <span><IoIcons.IoMdAddCircleOutline /></span> Add Buyer
                   </Button>
                </Col>
                <Col xl={2} lg={2} md={2}>
                    <Button style={{ width: "100%" }} outline color="danger" size="sm" onClick={handlePaymentToShow}>
                        <span><FcIcons.FcNegativeDynamic /></span> Payment To Party
                   </Button>
                </Col>
                <Col xl={2} lg={2} md={2}>
                    <Button style={{ width: "100%" }} outline color="danger" size="sm" onClick={handlePaymentFromShow}>
                        <span><FcIcons.FcPositiveDynamic /></span> Payment From Party
                   </Button>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Buyer Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BuyerForm />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={showPaymentToModal} onHide={handlePaymentToClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Payment To Party</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={showPaymentFromModal} onHide={handlePaymentFromClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Payment From Party</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            <br />
            <BuyerList />
        </div>
    );
}
export default BuyerMaster;