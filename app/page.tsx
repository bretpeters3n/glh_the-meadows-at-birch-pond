'use client'

import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { FaWalking } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { MdDriveEta } from 'react-icons/md'
import { LuBike } from 'react-icons/lu'
import { FaRegMap } from 'react-icons/fa6'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// import './globals.js'

export default function Home() {
  return (
    <>
      <div className="bg-[#1b5a7d]">
        <Image
          className="absolute top-[-3rem] left-[-4rem] scale-50 sm:scale-75 sm:top-[-1rem] sm:left-[-1rem] md:scale-100 md:top-[1rem] md:left-[1rem]"
          src="/static/images/logo-theMeadowsAtBirchwood.png"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '330px', height: '278px', objectFit: 'cover' }} // optional
          alt="Picture of the author"
        />
        <nav className="h-[90vh] bg-white">
          <Image
            src="/static/images/Meadows-Building-PNG-noLogo.jpg"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
            alt="Picture of the author"
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl sm:text-6xl md:text-7xl font-bold text-center drop-shadow-xl">
            <h1>
              Ready. Set. <i>SOLD!</i>
            </h1>
            <a className="w-full" href="#main">
              <div className="mx-auto bg-[#E51E50] hover:bg-[#D41142] text-xl text-white text-center font-semibold py-2 px-4 rounded shadow mt-5 w-[300px]">
                <p className="select-none">Get Started</p>
              </div>
            </a>
          </div>
        </nav>
        <main id="main" className="mt-10 mx-5">
          <figure className="container mx-auto">
            <h2 className="text-3xl font-bold py-5">
              The Meadows at Birch Pond
            </h2>
            <div>
              <LightGallery
                elementClassNames="grid grid-rows-4 grid-cols-2 sm:grid-rows-2 sm:grid-cols-4 gap-1"
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                <a
                  href="/static/images/MeadowsBuildingPNG.jpg"
                  className="row-span-2 col-span-2 bg-white rounded-tl-xl rounded-tr-xl rounded-bl-none sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none pb-0 pr-0 sm:pb-0 sm:pr-0"
                >
                  <Image
                    src="/static/images/MeadowsBuildingPNG.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} // optional
                    alt="Picture of the author"
                    className="rounded-tl-xl rounded-tr-xl rounded-bl-none sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none pb-0 pr-0 sm:pb-0 sm:pr-0"
                  />
                </a>
                <a
                  href="/static/images/The Meadows at Birch Pond.jpg"
                  className="row-span-1 col-span-1 bg-white"
                >
                  <Image
                    src="/static/images/The Meadows at Birch Pond.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} // optional
                    alt="Picture of the author"
                  />
                </a>
                <a
                  href="/static/images/Meadows Landscape D3.PNG"
                  className="row-span-1 col-span-1 bg-white rounded-tr-none sm:rounded-tr-xl"
                >
                  <Image
                    src="/static/images/Meadows Landscape D3.PNG"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} // optional
                    alt="Picture of the author"
                    className="rounded-tr-none sm:rounded-tr-xl"
                  />
                </a>
                <a
                  href="/static/images/The Meadows Birch Pond 2nd Floor.jpg"
                  className="row-span-1 col-span-1 bg-white rounded-bl-xl sm:rounded-bl-none"
                >
                  <Image
                    src="/static/images/The Meadows Birch Pond 2nd Floor.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} // optional
                    alt="Picture of the author"
                    className="rounded-bl-xl sm:rounded-bl-none"
                  />
                </a>
                <a
                  href="/static/images/The Meadows at Birch Pond Aerial View.jpg"
                  className="row-span-1 col-span-1 bg-white rounded-br-xl"
                >
                  <Image
                    src="/static/images/The Meadows at Birch Pond Aerial View.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }} // optional
                    alt="Picture of the author"
                    className="rounded-br-xl"
                  />
                </a>
              </LightGallery>
            </div>
            <div className="flex flex-row flex-wrap bg-slate-100 rounded-xl p-0 md:p-0 bg-transparent bg-clip-border">
              <div className="basis-full sm:basis-1/2">
                <LightGallery
                  // onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                >
                  <a href="/static/images/MeadowsBuildingPNG.jpg">
                    <Image
                      src="/static/images/MeadowsBuildingPNG.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }} // optional
                      alt="Picture of the author"
                      className="rounded-tl-xl rounded-tr-xl rounded-bl-none sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none pb-1 pr-0 sm:pb-0 sm:pr-1"
                    />
                  </a>
                </LightGallery>
              </div>
              <div className="basis-full sm:basis-1/2">
                <div className="grid grid-cols-2 gap-1">
                  <div>
                    <a href="/static/images/The Meadows at Birch Pond.jpg">
                      <Image
                        src="/static/images/The Meadows at Birch Pond.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }} // optional
                        alt="Picture of the author"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="/static/images/Meadows Landscape D3.PNG">
                      <Image
                        src="/static/images/Meadows Landscape D3.PNG"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }} // optional
                        alt="Picture of the author"
                        className="rounded-tr-none sm:rounded-tr-xl"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="/static/images/The Meadows Birch Pond 2nd Floor.jpg">
                      <Image
                        src="/static/images/The Meadows Birch Pond 2nd Floor.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }} // optional
                        alt="Picture of the author"
                        className="rounded-bl-xl sm:rounded-bl-none"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="/static/images/The Meadows at Birch Pond Aerial View.jpg">
                      <Image
                        src="/static/images/The Meadows at Birch Pond Aerial View.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }} // optional
                        alt="Picture of the author"
                        className="rounded-br-xl"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </figure>
          <figure className="mb-[100px] pt-5 container mx-auto">
            <div className="flex flex-row flex-wrap-reverse box-content">
              <div className="max-[767px]:basis-full min-[768px]:basis-2/3 box-border">
                <h3 className="text-2xl font-bold pb-0">
                  Townhouse in Eagan, MN
                </h3>
                <p className="text-md pt-0 text-gray-300">
                  4 bedrooms • 3 bathrooms • 2,561 square feet
                </p>
                <div className="flex flex-col mr-5 max-w-[90%]">
                  <div className="flex flex-row justify-start items-center gap-3 my-6">
                    <Image
                      src="/static/images/dickBraun-profile-sm.png"
                      width={0}
                      height={0}
                      sizes="100vh"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                      }} // optional
                      alt="Picture of the author"
                    />
                    <div className="flex flex-col justify-start gap-none">
                      <p className="text-lg font-bold py-0 my-0 text-white">
                        Dick Braun
                      </p>
                      <p className="text-md py-0 my-0 text-gray-300">Realtor</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold pb-0 pt-4 border-t border-white/[.15]">
                    Availability
                  </h4>
                  <p className="text-md pt-0 text-gray-300">
                    16 units available
                  </p>

                  <h4 className="text-lg font-semibold pb-0 pt-4 mt-4 border-t border-white/[.15]">
                    Location
                  </h4>
                  <ul className="text-md pt-2 text-gray-300 list-none ml-3">
                    <li className="my-1 flex flex-row gap-2">
                      <FaHome className="block w-[10%] sm:w-[5%] lg:w-[3%]" />
                      <p className="w-[90%] sm:w-[95%] lg:w-[97%]">
                        1650 Hunt Dr,  Eagan, MN 55122
                      </p>
                    </li>
                    <li className="my-1 flex flex-row gap-2">
                      <FaWalking className="block w-[10%] sm:w-[5%] lg:w-[3%]" />
                      <p className="w-[90%] sm:w-[95%] lg:w-[97%]">
                        Walkable from Central Park Commons, the Promenade
                        shopping mall & Eagan Town Centre
                      </p>
                    </li>
                    <li className="my-1 flex flex-row gap-2">
                      <MdDriveEta className="block w-[10%] sm:w-[5%] lg:w-[3%]" />
                      <p className="w-[90%] sm:w-[95%] lg:w-[97%]">
                        Short drive from The Outlet Mall, Mall of America & the
                        Airport
                      </p>
                    </li>
                    <li className="my-1 flex flex-row gap-2">
                      <FaRegMap className="block w-[10%] sm:w-[5%] lg:w-[3%]" />
                      <p className="w-[90%] sm:w-[95%] lg:w-[97%]">
                        Minneapolis/St. Paul downtown access through 35 E &
                        Cedar Ave
                      </p>
                    </li>
                    <li className="my-1 flex flex-row gap-2">
                      <LuBike className="block w-[10%] sm:w-[5%] lg:w-[3%]" />
                      <p className="w-[90%] sm:w-[95%] lg:w-[97%]">
                        Situated in the heart of walking and biking trails along
                        with two City Parks Quarry & Sky Hill that are within
                        walking distance from your community
                      </p>
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold pb-0 pt-4 mt-4 border-t border-white/[.15]">
                    Description
                  </h4>
                  <ul className="text-md pt-0 text-gray-300 list-none ml-0">
                    <li className="mt-1">
                      Eagan's newest premier townhome development with just 16
                      units available, it's clear that location & exclusivity is
                      a priority for most new buyers. The location has excellent
                      walkability and proximity to key amenities for shopping
                      including Central Park Commons, the Promenade shopping
                      mall & Eagan Town Centre. The Outlet Mall, Mall of America
                      & the Airport are all located a few minutes from your new
                      home. 35 E & Cedar Ave allow easy access to downtown
                      Minneapolis/St. Paul. Situated in the heart of walking and
                      biking trails along with two City Parks Quarry & Sky Hill
                      that are within walking distance from your community.
                      These Parks offer a large area for family gatherings,
                      playgrounds for kids & access to pickleball courts,
                      emphasizing the commitment to an active lifestyle and
                      community engagement.
                    </li>
                    <li className="my-4">
                      The spacious two-story layout of 2,561 square feet, a
                      two-car garage, along with the option for either three or
                      four bedrooms & a generous second-floor family room,
                      allows flexibility to accommodate different lifestyles.
                      The addition of options of a four- season porch,
                      elevators, selections of interior amenities and views of
                      wooded areas and ponds enhances the appeal, providing
                      residents with opportunities for relaxation and enjoyment
                      of nature.
                    </li>
                    <li className="my-4">
                      With late fall occupancy on the horizon, now seems like
                      the perfect time for interested buyers to reserve their
                      unit and secure a place in this desirable development.
                    </li>
                    <li className="my-4">
                      <i>GREATLAND HOMES LLC</i>
                    </li>
                  </ul>

                  <h4 className="text-lg font-semibold pb-0 pt-4 mt-4 border-t border-white/[.15]">
                    MLS #6544321
                  </h4>
                </div>
              </div>

              <div className="max-[767px]:basis-full min-[768px]:basis-1/3 box-border outline outline-1 outline-white/[.15] rounded-xl p-5 h-full mb-5 md:mb-auto">
                <div className="flex flex-row justify-center items-center gap-3">
                  <p className="text-4xl font-semibold pt-0">$560,000</p>
                  <p className="text-md pt-0 text-gray-300 leading-[18px] leading-md-none">
                    For&nbsp;
                    <br className="inline md:hidden " />
                    Sale
                  </p>
                </div>
                <div className="flex flex-row justify-center">
                  <details className="w-full">
                    <summary className="w-full block">
                      <div className="mx-auto bg-[#E51E50] hover:bg-[#D41142] text-white text-center font-semibold py-2 px-4 rounded shadow mt-5 w-full">
                        <p className="select-none">Contact</p>
                      </div>
                    </summary>
                    <div className="flex flex-row justify-center items-baseline gap-3">
                      <a className="w-full" href="tel:415-939-1779">
                        <div className="flex flex-row justify-center gap-2 mx-auto bg-[#E51E50] hover:bg-[#D41142] text-white text-center font-semibold py-2 px-4 rounded shadow mt-3 w-full">
                          <FaPhone className="inline-block my-auto" />
                          <p className="select-none">Phone</p>
                        </div>
                      </a>
                      <a
                        className="w-full"
                        href="mailto:bretpetersen@gmail.com"
                      >
                        <div className="flex flex-row justify-center gap-2 mx-auto bg-[#E51E50] hover:bg-[#D41142] text-white text-center font-semibold py-2 px-4 rounded shadow mt-3 w-full">
                          <MdEmail className="inline-block my-auto" />
                          <p className="select-none">Email</p>
                        </div>
                      </a>
                    </div>
                  </details>
                </div>
                <div className="flex flex-row justify-center items-baseline gap-3 mt-5">
                  <p className="text-xs text-center pt-0 text-gray-300">
                    See listing on
                    <br />
                    <a
                      href="https://www.greatlandhomesllc.com/"
                      target="_blank"
                      className="underline"
                    >
                      GreatLandHomesLLC.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </main>
        <footer className="">
          <div className="grid grid-rows-4 grid-cols-2 sm:grid-rows-2 sm:grid-cols-4 gap-1">
            <div className="row-span-2 col-span-2 bg-white rounded-tl-xl rounded-tr-xl rounded-bl-none sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-tr-none pb-1 pr-0 sm:pb-0 sm:pr-1">
              01
            </div>
            <div className="row-span-1 col-span-1 bg-white">02</div>
            <div className="row-span-1 col-span-1 bg-white rounded-tr-none sm:rounded-tr-xl">
              03
            </div>
            <div className="row-span-1 col-span-1 bg-white rounded-bl-xl sm:rounded-bl-none">
              04
            </div>
            <div className="row-span-1 col-span-1 bg-white rounded-br-xl">
              05
            </div>
          </div>
          {/* <LightGallery
            // onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          > */}
          <a href="/static/images/Meadows Landscape D3.PNG">
            <img alt="img1" src="/static/images/Meadows Landscape D3.PNG" />
          </a>
          <a href="img/img2.jpg">
            <img alt="img2" src="img/thumb2.jpg" />
          </a>
          ...
          {/* </LightGallery> */}
          <p>footer</p>
        </footer>
      </div>
    </>
  )
}