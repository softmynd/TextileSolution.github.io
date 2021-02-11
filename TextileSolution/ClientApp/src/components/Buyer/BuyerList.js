
import React, { useEffect, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Button, Table, Alert } from 'reactstrap';


const BuyerList = () => {

    const [partyList, setPartyList] = useState([]);

    //const partyService = new PartyService();

    useEffect(() => {
        getAllPartyList();
    }, [])

    const getAllPartyList = () => {
        //partyService.getAllPartyList().then(
        //    (result) => setPartyList(result.data)
        //)
    }
    const removeData = (id) => {

        //axios.delete(`${URL}/${id}`).then(res => {
        //    const del = employees.filter(employee => id !== employee.id)
        //    setEmployees(del)
        //})
    }
    const renderHeader = () => {
        let headerElement = ['Id', 'Buyer Name', 'Account Name', 'Account Number', 'IFSC Code', 'Bank Name', 'Bank Branch', 'Action']

        return headerElement.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }
    const renderBody = () => {
        return partyList && partyList.map(({ partyId, partyName, accountName, accountNumber, ifscCode, bankName, bankBranch }) => {
            return (
                <tr key={partyId}>
                    <td>{partyId}</td>
                    <td>{partyName}</td>
                    <td>{accountName}</td>
                    <td>{accountNumber}</td>
                    <td> {ifscCode}</td>
                    <td>{bankName}</td>
                    <td>{bankBranch}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(partyId)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <Table hover responsive size="sm">
                <thead>
                    <tr>
                        {renderHeader()}
                    </tr>
                </thead>

                <tbody>

                    {renderBody()}
                </tbody>


            </Table>
        </>
    );
}
export default BuyerList;