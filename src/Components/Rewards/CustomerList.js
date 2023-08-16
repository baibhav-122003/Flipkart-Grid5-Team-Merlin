import React, { useState } from 'react';
import './CustomerList.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    { id: 3, name: 'Customer 3', email: 'customer3@example.com' },
    { id: 4, name: 'Customer 4', email: 'customer4@example.com' },
    { id: 5, name: 'Customer 5', email: 'customer5@example.com' },
  ]);

  const sendToken = (customerId) => {
    console.log(`Reward sent to customer with ID ${customerId}`);
    // Remove the rewarded customer from the list
    setCustomers(customers.filter(customer => customer.id !== customerId));
  };

  return (
    <div className="customer-list">
      <h3>Customers Who Bought from You</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button className="reward-button" onClick={() => sendToken(customer.id)}>Reward</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
