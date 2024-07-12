import React, { useEffect, useState } from 'react';
import { products } from './Local';

function FilterBox() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newItem, setNewItem] = useState({ id: '', name: '', color: '', brand: '', price: '' });

  const sortAscending = () => {
    const sortedItems = [...items].sort((a, b) => a.id - b.id);
    setItems(sortedItems);
  };

  const sortDescending = () => {
    const sortedItems = [...items].sort((a, b) => b.id - a.id);
    setItems(sortedItems);
  };

  
  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <div style={styles.app}>
      <div style={styles.filter}>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
         
          style={styles.input} 
        />
        <button style={styles.button} onClick={sortAscending}>Ascending</button>
        <button style={styles.button} onClick={sortDescending}>Descending</button>
        <input 
          type="text" 
          placeholder="Name" 
          value={newItem.name} 
     
          style={styles.input} 
        />
        <input 
          type="text" 
          placeholder="Color" 
          value={newItem.color} 
          
          style={styles.input} 
        />
        <input 
          type="text" 
          placeholder="Brand" 
          value={newItem.brand} 
     
          style={styles.input} 
        />
        <input 
          type="text" 
          placeholder="Price" 
          value={newItem.price} 
   
          style={styles.input} 
        />
        <button style={styles.button} >Add Item</button>
      </div>
      <div style={styles.itemList}>
        <ul style={styles.ul}>
          {items.map((item) => (
            <li key={item.id} style={styles.li}>
              <h3>{item.id}</h3>
              <h3>{item.name}</h3>
              <p>{item.color}</p>
              <p>{item.brand}</p>
              <p><strong>{item.price}</strong></p>
              <button style={styles.button} >Modify</button>
              <button style={styles.button} >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    height: '100vh',
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  },
  filter: {
    width: '20%',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
  },
  itemList: {
    width: '80%',
    padding: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    margin: '5px'
  },
  input: {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%'
  },
  ul: {
    listStyleType: 'none',
    padding: 0
  },
  li: {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  }
};

export default FilterBox;
