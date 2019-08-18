import React, {Component} from 'react';
import '../styles/ContactForm.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Select from 'react-select';

import { emailRex } from '../Helpers';


class ContactForm extends Component {

    state = {
        listSelect: 'One',
        email: '',
        first_name: '',
        last_name: '',
        gender: 'Male',
        listNumber:'',
        searchQuery: {
            filterBy: 'first_name',
            query: ''
        },
        validate: {}
    }

    componentWillReceiveProps (nextProps) {

        if (nextProps.loadedContact !== this.props.loadContact) {

            this.setState({...nextProps.loadedContact});

        }

    }

    onChangeHandler = (e) => {

        this.setState({[e.target.name]: e.target.value});

    }

    onSelectChange = (options) => {

        this.setState({gender: options.value});

    }

    validateFields = (param, value) => {

        const { validate } = this.state
        let failed = false;
        const isEmail = param === 'emailState' ? true : false;
          if ((isEmail && emailRex.test(value)) || (!isEmail && value)) {
            validate[param] = 'has-success'
          } 
          else {
            validate[param] = 'has-danger'
            failed = true;
          }
          this.setState({ validate })
          return failed;
    }
    
    validateAll = () => {

        const { email, first_name, last_name } = this.state;
        const { validateFields } = this;

        let emailFailed = validateFields('emailState',email);
        let firstNameFailed = validateFields('firstState',first_name);
        let lasttNameFailed = validateFields('lastState',last_name);

        return (emailFailed || firstNameFailed || lasttNameFailed);

    }

    submitContact = () => {


        if (this.validateAll()) {

            return false;

        }
        else {

            const { id, first_name, last_name, email, gender, listNumber, listSelect} = this.state;            
            this.props.addEditContact({id, first_name, last_name, email, gender, listNumber}, listSelect);
            this.setState({validate:{}});
     
        }        

    }

    render() {

        const { listSelect, email, first_name, last_name, gender, validate } = this.state;
        const { onChangeHandler, onSelectChange, submitContact } = this;

        const genderOptions = [
            { value: 'Female', label: 'Female'},
            { value: 'Male', label: 'Male'}
          ];

        return (
        <div className="ContactForm">
            <h4 className="mb-2">Add new or double click existing contact to edit</h4>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="first_name">First</Label>
                            <Input  valid={ validate.firstState === 'has-success' }
                                    invalid={ validate.firstState === 'has-danger' } 
                                    onChange={onChangeHandler} type="text" name="first_name" 
                                    id="first_name" 
                                    value={first_name} 
                                    placeholder="Enter First Name" 
                                />
                            <FormFeedback>Please enter a first name.</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="last_name">Last</Label>
                            <Input  valid={ validate.lastState === 'has-success' }
                                    invalid={ validate.lastState === 'has-danger' }
                                    onChange={onChangeHandler} 
                                    type="text" 
                                    name="last_name" 
                                    id="last_name" 
                                    value={last_name} 
                                    placeholder="Enter Last Name" 
                               />
                            <FormFeedback>Please enter a last name.</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input valid={ validate.emailState === 'has-success' }
                               invalid={ validate.emailState === 'has-danger' }
                               onChange={onChangeHandler} 
                               type="email" 
                               name="email" 
                               id="email" 
                               value={email} 
                               placeholder="Enter Email" 
                            />
                            <FormFeedback>Please enter a valid email address.</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Select
                            value={{value:gender, label: gender}}
                            onChange={onSelectChange}
                            options={genderOptions}
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <h4>Add/Edit contact to list: </h4>
                        <Button className="mr-2" color={listSelect === "One" ? "warning" :"primary"} name="listSelect" value="One" onClick={onChangeHandler}>One</Button>
                        <Button className="mr-5" color={listSelect === "Two" ? "warning" :"primary"} name="listSelect" value="Two" onClick={onChangeHandler}>Two</Button>
                        <Button onClick={submitContact} color="primary">Submit</Button>
                </FormGroup>
            </Form>
        </div>
        );
    }

}

export default ContactForm;
