import React, { useState } from 'react';
import User from '.';

function Form() {
  const [ID, setID] = useState('');
  const [user, setUser] = useState('');
  const [product, setProduct] = useState('');
  const [offers, setOffers] = useState('');
  const [orders, setOrders] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting ${ID} ${user} ${product} ${offers} ${orders}`);
    // You can send the data to a server or update the state of a parent component here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID
        <input type="text" value={ID} onChange={e => setID(e.target.value)} />
      </label>
      <label>
        User
        <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      </label>
      <label>
        Products
        <input type="text" value={product} onChange={e => setProduct(e.target.value)} />
      </label>
      <label>
        Offers
        <input type="text" value={offers} onChange={e => setOffers(e.target.value)} />
      </label>
      <label>
        Orders
        <input type="text" value={orders} onChange={e => setOrders(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;