import React, { useState } from 'react';
import Form from './components/Form';
import Render from './components/Render';
import EditForm from './components/EditForm';

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editForm, setEditForm] = useState({
    dataItem: null,
    index: '',
  });

  const add = (item) => {
    setData((prev) => [...prev, item]);
  };

  const deleteFunc = (e) => {
    const id = e.target.dataset.id;
    const arr2 = data.filter((item) => item.id !== id);
    setData(arr2);
  };

  const editFunc = (e) => {
    setShow(!show);
    const id = e.target.dataset.id;
    const itemIndex = data.findIndex((item) => item.id === id);
    const dataItem = data[itemIndex];
    setEditForm({ dataItem, index: itemIndex });
  };
  const editCollectData = (item) => {
    data[editForm.index] = item;

    setData(data);
    setShow(!show);
  };

  return (
    <div className='d-flex p-3  '>
      {show ? (
        <EditForm editForm={editForm} editCollectData={editCollectData} />
      ) : (
        <Form add={add} editForm={editForm} />
      )}
      <div className='ml-5'>
        <Render items={data} deleteHandler={deleteFunc} editFunc={editFunc} />
      </div>
    </div>
  );
}

export default App;
