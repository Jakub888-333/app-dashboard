import React, { useState } from 'react';
import { Title, LineChartComponent } from '../components';
import "./css/vyvojPrijmov.css"
import {  getAllCustomers } from '../utils/storage';


const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const VyvojPrijmov = ({data}) => {
  const [customers] = useState(getAllCustomers())
 
  const aggregatedData = customers.reduce((result, customer) => {
    const date = formatDate(customer.createdDate);
    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(customer);
    return result;
  }, {});

    const dailySumData = Object.entries(aggregatedData).map(([date, customers]) => ({
      date,
      sum: customers.reduce((total, customer) => total + parseInt(customer.suma), 0),
    }));

  return (
    <div id="vyvojPrijmov">
      <Title text="Vývoj"/>
      <LineChartComponent data={dailySumData}/>
    </div>
  );
};

export default VyvojPrijmov;
