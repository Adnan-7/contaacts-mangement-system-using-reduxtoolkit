import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsSlice from '../../slices/contacts';
import { v1 as uuid } from 'uuid';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(
      contactsSlice.actions.add({
        id: uuid(),
        firstName,
        lastName,
        email,
        phone,
      })
    );
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  const onDeletClick = (contact) => {
    dispatch(contactsSlice.actions.remove(contact.id));
  };

  return (
    <div className='container'>
      <h4 className='grid-header'>Contacts</h4>
      <div className='box'>
        <details>
          <summary>New Contact</summary>
          <div className='form-group'>
            <input
              type='text'
              placeholder='FirstName'
              className='form-control'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='LastName'
              className='form-control'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Phone'
              className='form-control'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className='button button-green' onClick={onAddClick}>
            Save
          </button>
        </details>
      </div>

      <div className='grid-container'>
        <table className='grid'>
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    className='button button-red'
                    onClick={() => onDeletClick(contact)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
