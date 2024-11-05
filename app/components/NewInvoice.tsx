"use client";
import Form from 'next/form'
import React, { useState } from 'react'
import Input from './Input'
import { ProductType, Invoice } from '../types/all';

const NewInvoice = () => {
  const [productData, setProductData] = useState<ProductType>({
    product_name: "",
    product_price: 0,
    product_qty: 0,
  });
  const [products, setProducts] = useState<ProductType[]>([]);
  const [invoice, setInvoice] = useState<Invoice>({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    products: [],
    totalPrice: 0,
  });

  const addData = () => {
    setProducts([...products, productData]);
    const subPrice = productData.product_price * productData.product_qty;
    const totalPrice = subPrice + invoice.totalPrice;
    setInvoice({ ...invoice, totalPrice: totalPrice, products: [...products, productData] })

    setProductData({
      product_name: "",
      product_price: 0,
      product_qty: 0,
    });
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData(prevData => ({ ...prevData, [name]: value }));

  };

  const onchange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvoice(prevInvoice => ({ ...prevInvoice, [name]: value }));
  };

  const action = () => {
    if (localStorage.getItem('invoices')) {
      let oldData: Invoice[] = JSON.parse(localStorage.getItem('invoices') || "");
      let updateData = [...oldData, invoice];
      let stringifyIt = JSON.stringify(updateData);
      localStorage.setItem("invoices", stringifyIt)
    } else {
      let dataArray = [invoice];
      let info = JSON.stringify(dataArray);
      localStorage.setItem('invoices', info);
    }

    setInvoice({
      customerEmail: "", customerName: "", customerPhone: "", products: [], totalPrice: 0
    })
    setProducts([]);
    alert('Data Saved Successfully!')
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-2 md:px-10">
      <div className="w-full md:w-1/2 px-2 md:px-10">
        <Form action={action}>
          <Input
            label="Customer Name"
            name="customerName"  
            placeholder="E.g, John"
            onchange={onchange2}
            value={invoice.customerName} 
          />
          <Input
            label="Customer Email"
            name="customerEmail"  
            placeholder="E.g, abc@xyz.com"
            onchange={onchange2}
            value={invoice.customerEmail} 
          />
          <Input
            label="Customer Phone"
            name="customerPhone"  
            placeholder="E.g, +1 301 2345678"
            onchange={onchange2}
            value={invoice.customerPhone} 
          />
          <h5 className="text-2xl pt-5 font-semibold text-white text-left">
            Add Items
          </h5>
          <div className="grid grid-cols-5 items-center gap-3 justify-center">
            <div className="col-span-5 md:col-span-2">
              <Input
                onchange={onchange}
                name="product_name"
                placeholder="Name"
                value={productData.product_name}
              />
            </div>
            <div className='col-span-5 md:col-span-1'>
            <Input
              onchange={onchange}
              name="product_qty"
              placeholder="Quantity"
              value={productData.product_qty}
              inputType="number"
            />
            </div>
            <div className='col-span-5 md:col-span-1'>
            <Input
              onchange={onchange}
              name="product_price"
              placeholder="Price"
              inputType="number"
              value={productData.product_price}
            />
            </div>
            <button
              type="button"
              onClick={addData}
              className="px-4 py-2 col-span-5 md:col-span-1 rounded-md bg-blue-500 text-white text-xl"
            >
              Add
            </button>
          </div>
          <button type="submit" className='w-full py-2 outline-none rounded-full my-5 hover:bg-gray-200 text-blue-950 bg-white font-semibold border border-transparent transition-all duration-200 hover:bg-transparent hover:border-white hover:text-white'>Save Record</button>
        </Form>
      </div>
      <div className='w-full md:w-1/2 px-4 md:px-10 py-5 flex flex-col bg-gray-800'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-white py-5'>Products: {products.length}</h1>
          <h1 className='text-2xl font-semibold text-white py-5'>Total: {invoice.totalPrice}</h1>
        </div>
        <table className='overflow-x-scroll'>
          <thead>
            <tr className='bg-gray-700 px-3 py-5 font-semibold rounded-md my-2 text-center'>
              <td>Name</td>
              <td>Qty</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index} className='px-5 py-3 text-center font-semibold border-b border-gray-500'>
                  <td className='text-white pl-3 text-left'>{product.product_name}</td>
                  <td className='text-gray-200 font-normal'>{product.product_qty}</td>
                  <td className='text-white font-semibold'>{product.product_price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default NewInvoice;
