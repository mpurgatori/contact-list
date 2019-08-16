import React, {Fragment} from 'react';
import Octicon, {ChevronDown, ChevronUp} from '@primer/octicons-react';


const TableHeader = (direction, sortColumn, lastSortAscend, listNumber, filterBy) => {

    const filterStyle = {
        'backgroundColor' : 'orange'
    };

    return (
        <tr>
            {direction &&
                <Fragment>
                    <th>Move</th>
                    <th>Delete</th>
                </Fragment>
            }
            <th style={filterBy === 'first_name'? filterStyle: {}} onClick={() => sortColumn('first_name', listNumber)}>First <Octicon icon={lastSortAscend['first_name'] ? ChevronUp: ChevronDown}/></th>
            <th style={filterBy === 'last_name'? filterStyle: {}} onClick={() => sortColumn('last_name', listNumber)}>Last <Octicon icon={lastSortAscend['last_name'] ? ChevronUp: ChevronDown}/></th>
            <th style={filterBy === 'email'? filterStyle: {}} onClick={() => sortColumn('email', listNumber)}>Email <Octicon icon={lastSortAscend['email'] ? ChevronUp: ChevronDown}/></th>
            <th onClick={() => sortColumn('gender', listNumber)}>Gender <Octicon icon={lastSortAscend['gender'] ? ChevronUp: ChevronDown}/></th>
            {!direction &&
                <Fragment>
                    <th>Delete</th>
                    <th>Move</th>
                </Fragment>
            }
        </tr>
    )
};

export default TableHeader;