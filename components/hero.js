import Image from 'next/image'
import React from 'react'
import Astroboy from "./astro_image"

const hero = () => {
  return (
    <section className="bg-transparent z-10 relative">

        <div class="text-center mt-7">
            <h1 class="text-4xl font-bold text-white astro-title">astroCET</h1>
            <p class="text-white mt-2 font-thin">COLLEGE OF ENGINEERING TRIVANDRUM</p>
            <div className="mx-auto max-w-xs">
        <Image
          src="/images/Astroboy.png"
          alt="Astro-boy"
          width={200} // Set the desired width
          height={200} // Set the desired height
          layout="responsive" // Allows adjusting height based on width
          class="mt-5" // Add additional classes for margins or styles
        />
      </div>
            
            <p class="text-white font-bold text-lg mt-8 mx-auto max-w-3xl px-20 md:px-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div class="mt-4 md:mt-16 mx-auto max-w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-0">
                <div class="bg-gray-300 p-4 flex flex-col items-center justify-center text-center bg-opacity-0 text-white md:mx-0 mx-20 md:my-0 mt-10">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
           
                    <h2 class="text-xl font-bold">Vision</h2>
                    <p class="px-10 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div class="bg-gray-300 p-4 flex flex-col items-center justify-center text-center bg-opacity-0 text-white md:mx-0 mx-20 md:my-0 mt-5">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              </div>
            
                    <h2 class="text-xl font-bold">Mission</h2>
                    <p class="px-10 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
            </div>
        </div>

        <hr class="mx-auto max-w-3xl border-t border-gray-300 mt-20 mb-16"/>
  
    </section>
  )
}

export default hero
