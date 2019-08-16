import React, {Fragment} from 'react';
import '../styles/List.css'

import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const List = ({listNumber, contactList, sortColumn, lastSortAscend, deleteContact, shiftContact}) => {
    
    const tableRight = listNumber === 'Two' ? true : false;

    return (
        <div className="List col-xs-6">
            <h1>{`List ${listNumber}`}</h1>
            <div className="small text-left">
                <Table size="sm" hover striped bordered>
                    <thead>
                        {TableHeader(tableRight, sortColumn, lastSortAscend, listNumber)}
                    </thead>
                    <tbody>
                    {
                        contactList.map(contact => {
                            return TableBody(contact, tableRight, deleteContact, listNumber, shiftContact)
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )

}

export default List;
