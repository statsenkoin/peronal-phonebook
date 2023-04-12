import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  max-width: 700px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactsTitle = styled.h2`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 16px;
`;

export const ContactListBox = styled.div`
  font-size: 18px;
`;

export const Notification = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff9800;
`;
