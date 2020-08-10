import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Header from '../layout/header/Header';
import Button from '../../styles/Button';
import ErrorMsg from './error/ErrorMsg';
import Input from './Input';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape( {
    firstName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters!' )
        .required( "First name is required" ),
    lastName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters!' )
        .required( "Last name is required" ),
    phone: yup
        .string()
        .matches( phoneRegExp, 'Please enter a valid phone number.' )
        .required( "A valid phone number is required." ),
    email: yup
        .string()
        .email( "Please enter a valid email" )
        .required( "A valid email address is required" ),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const { register, handleSubmit, errors } = useForm( {
        validationSchema: schema,
    } );

    function onSubmit( data ) {
        setFormSent( true );
        console.log( 'Form was submitted. Thank you! ' + JSON.stringify( data ) );
    }

    return (
        <>
            <Header>Contact form</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {formSent && <p>Thanks for registrating your contact information at our site.</p>}<Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Input type="text" name="firstName" placeholder="First name" ref={register( { required: true } )} />
                    {errors.firstName && <ErrorMsg>{errors.firstName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Input type="text" name="lastName" placeholder="Last name" ref={register( { required: true } )} />
                    {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <Input type="phone" name="phone" placeholder="Phone number" ref={register( { required: true } )} />
                    {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Input type="email" name="email" placeholder="Email address" ref={register( { required: true } )} />
                    {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default Contact;