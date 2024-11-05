import Link from "next/link";
import NewInvoice from "./components/NewInvoice";

export default function Home() {

  return (
    <section>
      <h1 className="text-5xl pt-10 md:pt-0 md:text-6xl font-semibold text-center text-white">Welcome to Invoicy!</h1>
      <p className="text-center md:text-xl text-gray-100">Create and Manage Invoices in one place!</p>
      <div className="w-full md:px-20 flex items-center py-10 justify-between">
        <h1 className="font-semibold text-gray-200 text-xl md:text-3xl">Create Invoice</h1>
        <Link href={"/invoices"} className="px-3 py-2 bg-white font-semibold text-black rounded-md border border-transparent transition-all duration-200 hover:bg-transparent hover:border-white hover:text-white">View Invoices</Link>
      </div>
      <NewInvoice />
    </section >
  );
}
