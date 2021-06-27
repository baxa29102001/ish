import React, { useState } from 'react';

function Form(props) {
  const [data, setData] = useState({
    lastName: '',
    firstName: '',
    age: '',
  });

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      ...data,
      id: Math.random().toFixed(2),
    };
    props.add(obj);

    setData({
      lastName: '',
      firstName: '',
      age: '',
    });
  };
  const { lastName, firstName, age } = data;

  return (
    <form onSubmit={submitHandler}>
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
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default Form;
