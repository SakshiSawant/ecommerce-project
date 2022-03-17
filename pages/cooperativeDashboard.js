// import '../styles/globals.css'
import Link from 'next/link'
import logo from '../public/logo.jpeg'
import Image from 'next/image'

function CoopDashboard({ Component, pageProps }) {
  return (
    <div>
        <div class="flex items-center justify-between flex-wrap p-6">

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="/create-item" class="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Create Item
                    </a>
                    <a href="/my-assets" class="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        MyItem
                    </a>
                    <a href="/creator-dashboard" class="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Dashboard
                    </a>
                    <a href="/transaction" class="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        My Transactions
                    </a>
                </div>
            <div>     
        </div>
        </div>
    </div>

      {/* <Component {...pageProps} /> */}
    
    </div>
  
  )
}

export default CoopDashboard


