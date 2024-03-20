import React from 'react'
import { useNavigate } from 'react-router-dom';

function Aboutus() {
   const navigate = useNavigate();
  return (
    <section id="About Us">
    <div className="container mt-4 pt-4" />
        <h1 className="text-center">About Us</h1>
        <div className="row mt-4">
            <div className="col-lg-4">
                <img src="https://threebestrated.in/images/RelianceDigital-Mangalore-KA.jpeg" className= "imageAboutPage" alt="" />
            </div>
  
            <div className="col-lg-8">
                <p>A consumer electronics store, in the United States and some other countries, is a physical store that sells consumer electronics. As technology has progressed, the United States has known variations such as phonograph dealers, radio stores, hi-fi stores, stereo stores, and audio video stores.
                </p>
  
                <div className="row mt-3">
                    <p> The origins of the consumer electronics store can be traced back to phonograph dealers in 1893,[1] including specialized phonograph stores, 
                      as well as music stores which carried a wider array of music-related merchandise.With the advent of radio, with radio receiving equipment being 
                      sold by specialist electric hardware shops, there was controversy as to whether radio equipment manufactures should sell wholesale to phonograph and music stores, and to department stores,
                    </p>
                </div>
            </div>
        </div>
        <button
   onClick={() => {
    navigate("/");
   }}
 >
  GoBack
 </button>
  </section>
  )
}

export default Aboutus