
function LoginUi() {
  return (

    <div class="min-h-full flex items-center justify-center py-20 px-16 sm:px-12 lg:px-16">
    
    <form class="bg-white shadow-md rounded px-16 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border border-cyan-300 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </input>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-cyan-300 rounded w-full py-3 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********">
      </input>
    </div>

    <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="userRole">
        User Role
    </label>    
    <select class="shadow appearance-none border border-cyan-300 rounded w-full py-3 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
    <option>Donor</option>
    <option>NGO/ Beneficiary</option>
    <option>Store</option>
    </select>
    </div>

    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        <a href="/"> Sign In</a>
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/xyz">
        New user?
      </a>
    </div>
  </form>
 
</div>
  );
}

export default LoginUi;