import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

//Filter designed to allow user to filter by any category as opposed to just first name
const Filter = (filterHandler) => {

    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="filterBy">Filter By:</Label>
                        <Input onChange={filterHandler} type="select" name="filterBy" id="filterBy">
                            <option value="first_name">First Name</option>
                            <option value="last_name">Last Name</option>
                            <option value="email">Email</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup onChange={filterHandler} >
                        <Label for="query">Search</Label>
                        <Input type="query" name="query" id="query" placeholder="Enter Query" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                </Col>
            </Row>
        </Form>
    )
    
};

export default Filter;