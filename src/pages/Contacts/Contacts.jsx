import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ContactList, ContactsFilter, ContactsForm } from 'components';

import {
  PageWrapper,
  ContactsTitle,
  ContactListBox,
  Notification,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PageWrapper>
      {/* <h2>Phonebook</h2> */}
      <ContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      {contacts.length ? (
        <ContactListBox>
          <ContactsFilter />
          <ContactList />
        </ContactListBox>
      ) : (
        <Notification>No any contacts in phonebook</Notification>
      )}
      {isLoading && !error && <Notification>Loading...</Notification>}
    </PageWrapper>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
