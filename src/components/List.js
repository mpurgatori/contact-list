import React, {Component} from 'react';
import '../styles/List.css'

import { Table, Button } from 'reactstrap';

class List extends Component {

    render() {

        const { listNumber, conactList } = this.props;
        const tableRight = listNumber === 'Two' ? true : false;

        return (
            <div className="List col-xs-6">
                <h1>{`List ${listNumber}`}</h1>
                <div className="small text-left">
                    <Table size="sm" hover striped bordered>
                        <thead>
                            {tableRight &&

                                <tr>
                                    <th>Move</th>
                                    <th>Delete</th>
                                    <th>First</th>
                                    <th>Last</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                </tr>

                            }
                            {!tableRight &&

                                <tr>
                                    <th>First</th>
                                    <th>Last</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                    <th>Move</th>
                                </tr>

                            }
                        </thead>
                        <tbody>
                    {
                        conactList.map(contact => {
                            if (tableRight) {
                                return(
                                    <tr key={contact.id}>
                                        <td><Button color="primary"></Button></td>
                                        <td><Button color="danger"></Button></td>
                                        <td>{contact.first_name}</td> 
                                        <td>{contact.last_name}</td>
                                        <td>{contact.gender}</td>
                                        <td><small>{contact.email}</small></td>
                                    </tr>
                                    ) 
                            }
                            else {
                                return(
                                    <tr key={contact.id}>
                                        <td>{contact.first_name}</td> 
                                        <td>{contact.last_name}</td>
                                        <td>{contact.gender}</td>
                                        <td><small>{contact.email}</small></td>
                                        <td><Button color="danger"></Button></td>
                                        <td><Button color="primary"></Button></td>
                                    </tr>
                                    ) 
                            }

                        })
                    }
                        </tbody>
                    </Table>
                </div>
            </div>
        )

    }

}

export default List;
