import { useState } from 'react';

function Dashboard() {

  

  return (
    <>
      <div class="relative min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" class="hidden" />

        <label for="menu-open" class="absolute right-2 top-2 shadow-lg rounded-full p-2 bg-gray-light text-gray-dark md:hidden" data-dev-hint="floating action button">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        <header class="bg-gray-dark text-gray-light flex justify-between" data-dev-hint="mobile menu bar">
          <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
            Your App is cool
          </a>

          <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 text-gray bg-gray-light rounded md:hidden block">
            <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </header>

        <aside id="sidebar" class="bg-blue text-white md:w-64 w-2/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
          
          
        </aside>

        <main id="content" class="flex-1 p-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
          
            <div class="px-4 py-6 sm:px-0">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 mt-12"></div>
            </div>
          
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
