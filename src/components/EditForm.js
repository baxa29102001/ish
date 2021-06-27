import React, { useState } from 'react';

function EditForm({ editForm, editCollectData }) {
  const [data, setData] = useState({
    lastName: editForm.dataItem.lastName,
    firstName: editForm.dataItem.firstName,
    age: editForm.dataItem.age,
    id: editForm.dataItem.id,
  });
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    let obj = {
      ...data,
    };

    editCollectData(obj);

    setData({
      lastName: '',
      firstName: '',
      age: '',
    });
  };

  const { lastName, firstName, age } = data;
  return (
    <div>
      <form onSubmit={editHandler}>
        <div className='form-group'>
          <label htmlFor='nameLast'>Last Name</label>
          <input
            type='text'
            name='lastName'
            className='form-control'
            id='nameLast'
            value={lastName}
            onChange={changeHandler}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='nameFirst'>First Name</label>
          <input
            type='text'
            name='firstName'
            className='form-control'
            id='nameFirst'
            value={firstName}
            onChange={changeHandler}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='age'>Age</label>
          <input
            type='text'
            name='age'
            onChange={changeHandler}
            className='form-control'
            value={age}
            id='age'
          />
        </div>

        <button type='submit'>Edit </button>
      </form>
    </div>
  );
}

export default EditForm;
