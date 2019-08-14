import React, {Component} from 'react';
import '../styles/List.css'

import { loadList } from "../actions/LoadList"

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {

            list: []

        };
    }

    componentDidMount(){

        const ListData = loadList();
        this.setState({list: ListData})

    }

    render() {

        const { list } = this.state;
        const { listNumber } = this.props;
        return (
            <div className='List'>
                <h1>{`List ${listNumber}`}</h1>
                <table className='highlight'>
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </thead>
                    <tbody>

                {
                    list.map(contact => {

                        return(
                            <tr>
                                <td>{contact.first_name}</td> 
                                <td>{contact.last_name}</td>
                            </tr>
                            ) 

                    })
                }
                    </tbody>
                </table>
            </div>
        )

    }

}

export default List;
