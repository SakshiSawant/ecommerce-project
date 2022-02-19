import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <nav className="border-b p-6">
        <p className="text-4xl font-bold">Charity Store</p>
        <div className="flex mt-4"></div>
        <Link href="/">
          <a className="mr-4 text-blue-800 font-bold">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-blue-800 font-bold">Create Item</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-blue-800 font-bold">My Items</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-blue-800 font-bold">Dashboard</a>
        </Link>
      </nav>  */}


<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    {/* <!-- Image --> */}
    <span class="font-semibold text-xl tracking-tight">Helping Hands</span>
  </div>
 
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="/create-item" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Create Item
      </a>
      <a href="/my-assets" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        MyItem
      </a>
      <a href="/creator-dashboard" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Dashboard
      </a>
      <a href="/transaction" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        My Transactions
      </a>
    </div>
    <div>
      <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Signup</a>
    </div>
  </div>
</nav>





      <Component {...pageProps} />
    </div>
  
  )
}

export default MyApp


