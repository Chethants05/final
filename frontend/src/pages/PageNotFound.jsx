import { color } from 'chart.js/helpers';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// currently set as global variable, can be moved into function itself.
var pagesUnderConstruction = ['career-paths', 'forums', 
  'articles', 'careers', 'paid-memberships', 'for-students', 
  'business-solutions', 'events', 'professional-certification', 
  'go', 'sql', 'nosql', 'csharp', 'html-css', 'privacy-policy',
  'cookie-policy', 'terms'];

const PageNotFound = () => {
  const [isOurPage, setIsOutPage] = useState(false);
  useEffect(() => {
    let currentPath = window.location.pathname.replace('/','');
    if (pagesUnderConstruction.includes(currentPath)) {
      setIsOutPage(true);
    };
  }, []) // empty array to make sure it runs only on rendering.

  return (
    <section className="p-[40px] bg-white pt-[100px] ">
      <div>
        <div>
          <div>
            <div className="text-center">
              {
                isOurPage ?
                  <div className="h-[400px] bg-center bg-[url(https://pixelgraphics.co.in/img/maintenance/mt-mode.gif)] bg-no-repeat">
                    <h1 className="text-center text-6xl font-extrabold text-black ">Hold tight, we're coming soon!</h1>
                    <br/><p style={{color: "black"}}>The page you are looking for is still being designed.</p>
                  </div>
                  : <div className="h-[400px] bg-center bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] ">
                    <h1 className="text-center text-6xl font-extrabold text-black ">404</h1>
                    <p style={{color: "black"}}>The page you are looking for not available!</p>
                  </div>
              }

              <div className="-mt-12 ">
                {/* <h3 className="text-4xl mb-1 ">
                  Look like you're lost
                </h3>

                <p>The page you are looking for not available!</p> */}

                <Link to='/'
                  className=" py-[13px] px-10 text-lg bg-caribbeangreen-200 hover:bg-caribbeangreen-400 my-5 inline-block rounded-full font-semibold duration-300"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound