
function Navbar(){

  return <div className="flex bg-slate-800 h-16 px-16 items-center ">
  <h1 className="text-3xl font-bold text-green-500">Employee Srevice</h1>
  <div className="space-x-4 ml-auto">
    <a href="/" className="hover:text-blue-400">
      Home
    </a>
    <a href="/" className="hover:text-blue-400">
      Profile
    </a>
    <a href="/" className="hover:text-blue-400">
      Logout
    </a>
  </div>
</div>

}

export default Navbar