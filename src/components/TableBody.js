import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import Octicon, { ArrowRight, ArrowLeft, Trashcan } from '@primer/octicons-react';

//TableBody changes the move and delete columns depending if list it to the left or the right
//Invokes shiftContact and deleteContact when corresponding buttons clicked
// Each row calls loadContact when double clicked in order to pass contavt information into form
const TableBody = (contact, direction, deleteContact, listNumber, shiftContact, loadContact) => {

    return(
            <tr onDoubleClick={() => loadContact(contact, listNumber)} key={contact.id}>
                {direction &&
                    <Fragment>
                        <td><Button color="info" onClick={()=> shiftContact(contact.id, listNumber)}><Octicon icon={ArrowLeft}/></Button></td>
                        <td><Button color="danger" onClick={()=> deleteContact(contact.id, listNumber)}><Octicon icon={Trashcan}/></Button></td>
                    </Fragment>
                }
                <td>{contact.first_name}</td> 
                <td>{contact.last_name}</td>
                <td><small>{contact.email}</small></td>
                <td>{contact.gender}</td>
                {!direction &&
                    <Fragment>
                        <td><Button color="danger" onClick={()=> deleteContact(contact.id, listNumber)}><Octicon icon={Trashcan}/></Button></td>
                        <td><Button color="info" onClick={()=> shiftContact(contact.id, listNumber)}><Octicon icon={ArrowRight}/></Button></td>
                    </Fragment>
            }
            </tr>
        ) 
}

export default TableBody;