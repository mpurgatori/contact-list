import React, {Component} from 'react';
import '../styles/ContactForm.css'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class ContactForm extends Component {

    state = {
        listSelect: 'One',
        email: '',
        first_name: '',
        last_name: '',
        gender: 'Female',
        searchQuery: {
            filterBy: 'first_name',
            query: ''
        }
    }

    onChangeHandler = (e) => {

        console.log(e.target);
        if (e.target.name === 'query' || e.target.name === 'filterBy') {

            const newSearchQuery = {...this.state.searchQuery,[e.target.name]: e.target.value};
            this.setState({searchQuery: newSearchQuery}, this.filterOptions);

        }
        else {

            this.setState({[e.target.name]: e.target.value});

        }

    };

    filterOptions = () => {
        
        const { searchQuery, listSelect } = this.state;
        this.props.filterContacts(searchQuery.filterBy, searchQuery.query, listSelect);
        

    }

    render() {

        console.log(this.state)
        const { listSelect, email, first_name, last_name } = this.state;
        const { onChangeHandler } = this;

        return (
        <div className="ContactForm">
            <Form>
                <FormGroup onClick={onChangeHandler} tag="fieldset">
                    <legend>Add Contact</legend>
                    <FormGroup>
                        <Label>
                        <Input checked={listSelect === 'One'} value="One" type="radio" name="listSelect" />{' '}
                        List One
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                        <Input value="Two" type="radio" name="listSelect" />{' '}
                        List Two
                        </Label>
                    </FormGroup>
                </FormGroup>
        
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="first_name">First</Label>
                        <Input onChange={onChangeHandler} type="text" name="first_name" id="first_name" value={first_name} placeholder="Enter First Name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="last_name">Last</Label>
                        <Input onChange={onChangeHandler} type="text" name="last_name" id="last_name" value={last_name} placeholder="Enter Last Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={onChangeHandler} type="email" name="email" id="email" value={email} placeholder="Enter Email" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input onChange={onChangeHandler} type="select" name="gender" id="gender">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Button color="primary">Add Contact</Button>
            </Form>
        </div>
        );
    }

}

export default ContactForm;
