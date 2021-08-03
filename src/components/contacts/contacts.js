import React from 'react';
import contactsInitialState from '../../data/contacts';

const Contacts = () => {
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
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='LastName'
              className='form-control'
            />
          </div>

          <div className='form-group'>
            <input type='text' placeholder='Email' className='form-control' />
          </div>

          <div className='form-group'>
            <input type='text' placeholder='Phone' className='form-control' />
          </div>

          <button className='button button-green'>Save</button>
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
            {contactsInitialState.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button className='button button-red'>Delete</button>
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