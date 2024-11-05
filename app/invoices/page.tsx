import Link from 'next/link'
import React from 'react'
import Invoices from '../components/Invoices'

const InvoicesPage = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">All Invoices</h1>
      <div className="w-full px-2 md:px-20 flex items-center py-10 justify-between">
        <h1 className="font-semibold text-gray-200 text-xl md:text-3xl">All Invoices</h1>
        <Link href={"/"} className="px-3 py-2 bg-white font-semibold text-black rounded-md border border-transparent transition-all duration-200 hover:bg-transparent hover:border-white hover:text-white">Create Invoice</Link>
      </div>
      <Invoices />
    </div>
  )
}

export default InvoicesPage
