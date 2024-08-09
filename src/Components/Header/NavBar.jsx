import navImage from '../../assets/img/burger-king-en.png'

const NavBar = () => {
    return (
        <div>
            
            <div className="navbar mt-3 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="font-semibold"><a>Home</a></li>
        <li className="font-semibold"><a>Recipes</a></li>
        <li className="font-semibold"><a>About</a></li>
        <li className="font-semibold"><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe-Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-semibold menu-horizontal px-1">
    <li><a>Home</a></li>
        <li className="font-semibold"><a>Recipes</a></li>
        <li className="font-semibold"><a>About</a></li>
        <li className="font-semibold"><a>Search</a></li>
    </ul>
  </div>
 <div className=" flex gap-5  navbar-end">
 <div className="">
    <button className=" ">  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /></button>
  </div>
  <div className="w-10 rounded-full">
          <img className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={navImage} />
            {/* <img src="../../assets/img/pexels-goumbik-952478.jpg" alt="" srcset="" /> */}
        </div>
 </div>
</div>

        </div>
    );
};

export default NavBar;