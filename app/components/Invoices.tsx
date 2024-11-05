"use client";
import React, { useEffect, useState } from 'react'
import { Invoice } from '../types/all';
import Link from 'next/link';

const Invoices = () => {
    const [invoices, setInvoices] = useState<Invoice[]>();
    const [singleInvoice, setSingleinvoice] = useState<Invoice>()
    useEffect(() => {
        if (localStorage.getItem('invoices')) {
            const data = localStorage.getItem('invoices');
            const finaldata = JSON.parse(data || "");
            setInvoices(finaldata);
        }
    }, [])
    return (
        <>
            {!invoices || invoices?.length == 0 && (
                <div className='py-10 px-3 flex justify-center flex-col gap-2'>
                    <h3 className='text-center font-semibold text-3xl text-white'>No Invoices Found!</h3>
                    <Link href={"/"} className="px-3 py-2 bg-white font-semibold text-black rounded-md border border-transparent transition-all duration-200 hover:bg-transparent hover:border-white hover:text-white">Create Invoice</Link>
                </div>
            )}
            <div className='overflow-x-scroll md:overflow-hidden'>
            <table className='w-full  md:w-3/4 mx-auto rounded-md bg-gray-800 p-3'>
                <thead>
                    <tr className='bg-gray-950  text-center text-white font-semibold'>
                        <td className='px-2 py-4 border border-gray-400'>Invoice Id</td>
                        <td className='px-2 py-4 border border-gray-400'>Customer Name</td>
                        <td className='px-2 py-4 border border-gray-400'>Customer Email</td>
                        <td className='px-2 py-4 border border-gray-400'>Customer Phone</td>
                        <td className='px-2 py-4 border border-gray-400'>No. of Products</td>
                        <td className='px-2 py-4 border border-gray-400'>Total Amount</td>
                        <td className='px-2 py-4 border border-gray-400'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {invoices?.map((invoice, index) => {
                        return (
                            <tr key={index} className='bg-gray-800 text-center text-white'>
                                <td>{index + 1}</td>
                                <td>{invoice.customerName}</td>
                                <td>{invoice.customerEmail}</td>
                                <td>{invoice.customerPhone}</td>
                                <td>{invoice.products.length}</td>
                                <td>{invoice.totalPrice}</td>
                                <td><button className='px-3 py-2 bg-white text-black rounded-md' popoverTarget='productsdata' onClick={() => setSingleinvoice(invoice)} popoverTargetAction='toggle'>View Products</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <div id='productsdata' className='w-1/2 bg-gray-800 rounded-md backdrop:bg-[#0707078c]' popover='manual' >
                <button className='absolute right-10 border rounded-full w-8 h-8 bg-transparent  text-white text-xl' popoverTarget='productsdata' popoverTargetAction='hide' title='Close'>x</button>
                <div className='px-10 py-5 flex flex-col '>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-semibold text-white py-5'>Products: {singleInvoice?.products.length}</h1>
                        <h1 className='text-2xl font-semibold text-white py-5'>Total: {singleInvoice?.totalPrice}</h1>
                    </div>
                    <table>
                        <thead>
                            <tr className='bg-gray-700 px-3 py-5 font-semibold rounded-md my-2 text-center'>
                                <td>Product Name</td>
                                <td>Product Qty</td>
                                <td>Product Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {singleInvoice?.products.map((product, index) => {
                                return (
                                    <tr key={index} className='px-5 py-3 text-center font-semibold border-b border-gray-500'>
                                        <td className='text-white text-left'>{product.product_name}</td>
                                        <td className='text-gray-200 font-normal'>{product.product_qty}</td>
                                        <td className='text-white font-semibold'>{product.product_price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Invoices
