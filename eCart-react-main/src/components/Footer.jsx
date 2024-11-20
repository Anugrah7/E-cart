import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-5 mx-auto bg-amber-600" style={{width:'100vw',paddingTop:'80px'}}>
      <div className="flex justify-evenly">
        {/* Intro */}
        <div className="h-[250px]">
          <h5 className="flex items-center text-lg font-bold mb-2">
          <Link className='text-2xl font-bold text-white' to={'/'}><i className="fa-solid fa-truck me-2"></i>Daily Cart</Link>
          </h5>
          <p className="text-gray-300">
            Designed and built with all the love in the world by the Kochi team with the help of our contributors.
          </p>
          <p className="text-gray-300">Code licensed Luminar, docs CC BY 3.0.</p>
          <p className="text-gray-300">Currently v5.3.3.</p>
        </div>
        
        {/* Links */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2 text-white">Links</h5>
          <Link to="/" className="text-white hover:underline">Home Page</Link>
          <Link to="/cart" className="text-white hover:underline">Cart</Link>
          <Link to="/wishlist" className="text-white hover:underline">Wishlist</Link>
        </div>
        
        {/* Guide */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2 text-white">Guides</h5>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">React</a>
          <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">React Router</a>
          <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">React Bootstrap</a>
        </div>
        
        {/* Contact */}
        <div className="flex flex-col">
          <h5 className="text-lg font-bold mb-2 text-white">Contact</h5>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Email here"
              className="form-control me-2 bg-gray-700 text-white rounded-md px-4 py-2 mr-2"
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex justify-between mt-3 space-x-3">
            <a href="https://x.com/?lang=en&mx=2" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/home?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="tel:7025707936" className="text-white">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-300 mt-4">Copyright &copy; July 2024 Batch, Daily Cart App. Built with React</p>
    </div>
  )
}

export default Footer
