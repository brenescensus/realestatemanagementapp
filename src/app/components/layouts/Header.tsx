import react from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav
        className="relative flex w-full  justify-between   text-blue-200 py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4 "
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            {/* <!-- Hamburger menu button --> */}
            <button
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContentX"
              aria-controls="navbarSupportedContentX"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- Hamburger menu icon --> */}
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* <!-- Navigation links --> */}
          <div
            className="!visible hidden grow basis-[100%] items-center justify-end text-center lg:!flex lg:basis-auto lg:text-left"
            id="navbarSupportedContentX"
            data-twe-collapse-item
          >
            <ul
              className="me-auto  flex flex-col lg:flex-row  "
              data-twe-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a href="#!"
                  className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  
                  data-twe-nav-link-ref
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a href="#!"
                  className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  
                  data-twe-nav-link-ref
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                    <Link href ="/property">  Houses</Link>
                
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a  href="#!"
                  className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                 
                  data-twe-nav-link-ref
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Propertys
                </a>
              </li>
              <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a  href="#!"
                  className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  
                  data-twe-nav-link-ref
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Team
                </a>
              </li>
            </ul>

            <div className="flex items-center">
               <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-blue-600 text-white hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500">
                 <Link href ="/login">Login</Link>
                
              </button> 
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="me-3 inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                      <Link href ="/register">Signup</Link> 

                
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
