import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const FormWrapper = styled(Form)`
  width: 70vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  font-family: 'Roboto';
`;

export const ErrorText = styled(ErrorMessage)`
  color: tomato;
  display: block;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const InputField = styled(Field)`
  width: 100%;
`;

export const AddContactButton = styled.button`
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #3acdcd;
  border-radius: 4px;
  transition: 300ms;
  cursor: pointer;
  background-color: #8bc34a;
  &:hover {
    scale: 1.01;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;
