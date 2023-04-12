import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  FormWrapper,
  Label,
  AddContactButton,
  ErrorText,
  InputField,
} from './ContactsForm.styled';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    const { name: newName } = newContact;
    let isContactExists = contacts.some(({ name }) => name === newName);
    if (isContactExists) {
      return alert(`${newName} is already in contacts!`);
    }
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({
            ...values,
          });
          resetForm();
        }}
      >
        <FormWrapper>
          <Label htmlFor="name">
            Name:
            <InputField type="text" name="name" />
          </Label>
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <Label htmlFor="number">
            Number:
            <InputField type="tel" name="number" />
          </Label>
          <ErrorText name="number" component="span"></ErrorText>

          <AddContactButton type="submit">Add contact</AddContactButton>
        </FormWrapper>
      </Formik>
    </div>
  );
}

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
