import React, {Component} from 'react';

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
            <div>
                <h1>{`List ${listNumber}`}</h1>
                {
                    list.map(contact => {
                        return <p>{contact.first_name} {contact.last_name}</p>
                    })
                }
            </div>
        )

    }

}

export default List;
