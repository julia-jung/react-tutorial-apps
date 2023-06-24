import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (msg, type) => {
    setAlert({ show: true, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert('Please enter value.', 'danger');
      return;
    }
    if (editId) {
      setList(
        list.map((item) => (item.id === editId ? { ...item, name } : item))
      );
      setEditId(null);
      showAlert('Item changed.', 'success');
    } else {
      setList([...list, { id: new Date().getTime().toString(), name }]);
      showAlert('Item added.', 'success');
    }
    setName('');
  };

  const clearList = () => {
    setList([]);
    showAlert('List is now empty', 'danger');
  };

  const editItem = (id) => {
    setEditId(id);
    const item = list.find((item) => item.id === id);
    setName(item.name);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert('Item removed', 'danger');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            {...alert}
            removeAlert={() => setAlert({ show: false, msg: '', type: '' })}
          />
        )}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            name='name'
            id='name'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {editId ? 'change' : 'add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} editItem={editItem} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
