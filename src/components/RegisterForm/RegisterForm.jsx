import React from 'react';
import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from 'formik';

export function RegisterForm() {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          //   handleSubmit({
          //     ...values,
          //   });
          console.log('RegisterForm values :>> ', values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="username">User name:</label>
          <Field
            type="text"
            name="username"
            placeholder="Enter user name"
          ></Field>
          {/* <ErrorMessage name="username" component="span"></ErrorMessage> */}

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Enter email"></Field>
          {/* <ErrorMessage name="email" component="span"></ErrorMessage> */}

          <label htmlFor="password">Password: </label>
          <Field
            type="password"
            name="password"
            placeholder="Enter password"
          ></Field>
          {/* <ErrorMessage name="password" component="span"></ErrorMessage> */}

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
