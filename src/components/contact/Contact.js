import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Header from '../layout/headings/Heading1';
import Button from './Button';
import ErrorMsg from './error/ErrorMsg';
import Input from './Input';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers';
import SubHeading from '../layout/headings/SubHeading';
import Container from 'react-bootstrap/Container';

const StyledLabel = styled( Form.Label )`
    color: ${function ( props ) {
        return props.theme.colors.primaryColor;
    }};
    font-weight: bold;
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape( {
    firstName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters' )
        .required( "Please enter your first name" ),
    lastName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters' )
        .required( "Please enter your last name" ),
    phone: yup
        .string()
        .matches( phoneRegExp, 'Please enter a valid phone number.' )
        .required( "Please enter your phone number" ),
    email: yup
        .string()
        .email( "Please enter a valid email" )
        .required( "Please enter your email address" ),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit( data ) {
        setFormSent( true );
        console.log( 'The data that was submitted: ' + JSON.stringify( data ) );
    }

    return (
        <Container>
            <Header>Contact information registration</Header>
            <SubHeading>Be the first to see our special offer. Submit your contact information under.</SubHeading>
            <Form onSubmit={handleSubmit( onSubmit )}>
                {formSent && <p>Thanks for registrating your contact information at our site.</p>}<Form.Group>
                    <StyledLabel>First Name</StyledLabel>
                    <Input type="text" name="firstName" placeholder="First name" ref={register( { required: true } )} />
                    {errors.firstName && <ErrorMsg>{errors.firstName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Last Name</StyledLabel>
                    <Input type="text" name="lastName" placeholder="Last name" ref={register( { required: true } )} />
                    {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Phone number</StyledLabel>
                    <Input type="phone" name="phone" placeholder="Phone number" ref={register( { required: true } )} />
                    {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <StyledLabel>Email</StyledLabel>
                    <Input type="email" name="email" placeholder="Email address" ref={register( { required: true } )} />
                    {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </Form.Group>

                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default Contact;