import React, { Component } from 'react';
import '../styles/List.css'

import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Filter from './Filter';



class List extends Component {
    
    state = {

        filterBy: 'first_name',
        query:''

    }

    filterHandler = (e) => {

        this.setState({[e.target.name]: e.target.value});
    
    };



    render() {
        
        const { filterHandler } = this;
        const { filterBy, query} = this.state;

        const {listNumber, contactList, sortColumn, lastSortAscend, deleteContact, shiftContact, loadContact} = this.props;
        const tableRight = listNumber === 'Two' ? true : false;

        const filteredContacts = contactList.filter( item => {
            return item[filterBy].toLowerCase().search(query.toLowerCase()) !== -1;
          });
    
        return (
            <div className="List col-xs-6">
                <h1>{`List ${listNumber}`}</h1>
                {Filter(filterHandler)}
                <div className="small text-left">
                    <Table size="sm" hover striped bordered>
                        <thead>
                            {TableHeader(tableRight, sortColumn, lastSortAscend, listNumber, filterBy)}
                        </thead>
                        <tbody>
                        {
                            filteredContacts.map(contact => {
                                return TableBody(contact, tableRight, deleteContact, listNumber, shiftContact, loadContact)
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
