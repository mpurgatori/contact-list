import React, {Fragment} from 'react';
import Octicon, {ChevronDown, ChevronUp} from '@primer/octicons-react';


const TableHeader = (direction, sortColumn, lastSortAscend, listNumber) => {

    return (
        <tr>
            {direction &&
                <Fragment>
                    <th>Move</th>
                    <th>Delete</th>
                </Fragment>
            }
            <th onClick={() => sortColumn('first_name', listNumber)}>First <Octicon icon={lastSortAscend['first_name'] ? ChevronUp: ChevronDown}/></th>
            <th onClick={() => sortColumn('last_name', listNumber)}>Last <Octicon icon={lastSortAscend['last_name'] ? ChevronUp: ChevronDown}/></th>
            <th onClick={() => sortColumn('gender', listNumber)}>Gender <Octicon icon={lastSortAscend['gender'] ? ChevronUp: ChevronDown}/></th>
            <th onClick={() => sortColumn('email', listNumber)}>Email <Octicon icon={lastSortAscend['email'] ? ChevronUp: ChevronDown}/></th>
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