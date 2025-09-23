'use client';
import {useState,useEffect} from "react";
import Link from "next/link";

export default function Header(){
  const [isVisible,setVisible] = useState(true);
  const [lastScrollY,setLastScrollY] = useState(0);


    useEffect(()=>{
     const controlHeader = ()=>{
        const currentScrollY = window.scrollY;

        if(currentScrollY >lastScrollY && currentScrollY >50){
            setVisible(false);
        }
        else{
            setVisible(true);
        }
        setLastScrollY(currentScrollY);
     };
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY])

    return(
      <header className={`bg-white shadow-md m-7 rounded-4xl fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
         isVisible 
          ? 'transform translate-y-0 opacity-100' 
          : 'transform -translate-y-full opacity-0 pointer-events-none'
      }`}>
    <div className="max-w-8xl mx-auto  sm:px-4 lg:px-6 ">
        <div className="flex justify-between items-center h-20">
         <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-serif font-medium text-gray-900 tracking-tight">
              whattaplace
            </Link>
          </div>

          <nav className="hidden md:flex space-x-12">
           <Link 
              href="/find-a-place" 
              className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-200"
            >
              Find a Place
            </Link>

             <Link 
              href="/host-your-space" 
              className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-200"
            >
              Host Your Space
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors duration-200"
            >
              How it Works
            </Link>
          </nav>
    <div className="flex items-center space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Get in Touch
            </button>

             <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
             <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          </div>
           <div className="md:hidden border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/find-a-place" 
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Find a Place
            </Link>
            <Link 
              href="/host-your-space" 
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Host Your Space
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              How it Works
            </Link>
          </div>
          </div>
   </div>
      </header>
    )
}