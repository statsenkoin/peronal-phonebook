import React from 'react';
import {
  Formik,
  Form,
  Field,
  // ErrorMessage
} from 'formik';

export function LoginForm() {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { resetForm }) => {
          //   handleSubmit({
          //     ...values,
          //   });
          console.log('LoginForm values :>> ', values);
          resetForm();
        }}
      >
        <Form>
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
