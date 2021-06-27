import React from 'react';

function Render({ items, deleteHandler, editFunc }) {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First NAME</th>
            <th scope='col'>Last NAME</th>
            <th scope='col'>O'zgartirish</th>
            <th scope='col'>O'chirish</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <th scope='row'>{index + 1}</th>
              <td>{item.lastName}</td>
              <td>{item.firstName}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={editFunc} data-id={item.id}>
                  edit
                </button>
              </td>
              <td>
                <button data-id={item.id} onClick={deleteHandler}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Render;
