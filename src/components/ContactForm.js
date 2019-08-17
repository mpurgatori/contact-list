import React, {Component} from 'react';
import '../styles/ContactForm.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonGroup, FormFeedback } from 'reactstrap';



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
        },
        validate: {}
    }

    onChangeHandler = (e) => {

        this.setState({[e.target.name]: e.target.value});

    }

    validateEmail = (emailVal) => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        let failed = false;
          if (emailRex.test(emailVal)) {
            validate.emailState = 'has-success'
          } 
          else {
            validate.emailState = 'has-danger'
            failed = true;
          }
          this.setState({ validate })
          return failed;
        }
    
    validateFirst = (firstName) => {
        const { validate } = this.state
        let failed = false;
        if (firstName) {
            validate.firstState = 'has-success'
        } 
        else {
            validate.firstState = 'has-danger'
            failed = true;
        }
        this.setState({ validate })
        return failed;
    }

    validateLast = (lastName) => {
        const { validate } = this.state
        let failed = false;
        if (lastName) {
            validate.lastState = 'has-success'
        } 
        else {
            validate.lastState = 'has-danger'
            failed = true;
        }
        this.setState({ validate })
        return failed;
    }

    validateAll = () => {

        const {email, first_name, last_name} = this.state;
        const {validateEmail, validateFirst, validateLast} = this;

        let emailFailed = validateEmail(email);
        let firstNameFailed = validateFirst(first_name);
        let lasttNameFailed = validateLast(last_name)


        return (emailFailed || firstNameFailed || lasttNameFailed);

    }

    submitContact = () => {

        if (this.validateAll()) {
            console.log('validation failed')
        }
        else {
            console.log('validation passed')
        }
        console.log('State',this.state);
        

    }

    render() {

        const { listSelect, email, first_name, last_name } = this.state;
        const { onChangeHandler, submitContact } = this;

        return (
        <div className="ContactForm">
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="first_name">First</Label>
                            <Input  valid={ this.state.validate.firstState === 'has-success' }
                                    invalid={ this.state.validate.firstState === 'has-danger' } 
                                    onChange={onChangeHandler} type="text" name="first_name" 
                                    id="first_name" 
                                    value={first_name} 
                                    placeholder="Enter First Name" 
                                />
                            <FormFeedback invalid>Please enter a first name.</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="last_name">Last</Label>
                            <Input  valid={ this.state.validate.lastState === 'has-success' }
                                    invalid={ this.state.validate.lastState === 'has-danger' }
                                    onChange={onChangeHandler} 
                                    type="text" 
                                    name="last_name" 
                                    id="last_name" 
                                    value={last_name} 
                                    placeholder="Enter Last Name" 
                               />
                            <FormFeedback invalid>Please enter a last name.</FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input valid={ this.state.validate.emailState === 'has-success' }
                               invalid={ this.state.validate.emailState === 'has-danger' }
                               onChange={onChangeHandler} 
                               type="email" 
                               name="email" 
                               id="email" 
                               value={email} 
                               placeholder="Enter Email" 
                            />
                            <FormFeedback invalid>Please enter a valid email address.</FormFeedback>
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
                <FormGroup>
                    <ButtonGroup>
                        <Button color="primary" name="listSelect" value="One" onClick={onChangeHandler} active={listSelect === "One"}>One</Button>
                        <Button color="primary" name="listSelect" value="Two" onClick={onChangeHandler} active={listSelect === "Two"}>Two</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button onClick={submitContact} color="primary">Add Contact</Button>
                    </ButtonGroup>
                </FormGroup>
            </Form>
        </div>
        );
    }

}

export default ContactForm;
