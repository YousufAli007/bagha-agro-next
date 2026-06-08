import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="navbar bg-green-700 text-white shadow-lg px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-50 mt-3 w-52 p-2 shadow"
      >
        <li><a href="/">হোম</a></li>
        <li><a href="/krishi">কৃষি সেবা</a></li>
        <li><a href="/fisheries">মৎস্য সেবা</a></li>
        <li><a href="/livestock">প্রাণিসম্পদ</a></li>
        <li><a href="/weather">আবহাওয়া</a></li>
        <li><a href="/contact">যোগাযোগ</a></li>
      </ul>
    </div>

    <a className="text-2xl font-bold">
      🌾 Smart Krishi BD
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li><a href="/">হোম</a></li>
      <li><a href="/krishi">কৃষি সেবা</a></li>
      <li><a href="/fisheries">মৎস্য সেবা</a></li>
      <li><a href="/livestock">প্রাণিসম্পদ</a></li>
      <li><a href="/weather">আবহাওয়া</a></li>
      <li><a href="/contact">যোগাযোগ</a></li>
    </ul>
  </div>

  <div className="navbar-end">
    <a
      href="/login"
      className="btn bg-yellow-500 border-none text-black hover:bg-yellow-400"
    >
      Login
    </a>
  </div>
</div>
        <div className="hero">
           <h1>Hello Yousuf Ali</h1>
        </div>
         
      </section>

      <div className="ticks"></div>

       
    </>
  )
}

export default App
