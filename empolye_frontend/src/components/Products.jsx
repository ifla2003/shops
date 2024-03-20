import React from "react";
import { useNavigate } from "react-router-dom";
const Products = () => {
    const navigate = useNavigate()
  return (
    <>
      <section id="product">
        <div>
          <h1 className="pdt">product</h1>
          <h2>
            <ul>
              <li>
                Laptops
              </li>
              <img
                  src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg"
                  width="100"
                  height="100"
                  alt=""
                />
              <li>
                phone
              </li>
              <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                  width="200"
                  height="200"
                />
              <li>
                cooler
              </li>
              <img
                  src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-57856,resizemode-75,msid-98502005/top-trending-products/electronics/air-coolers/6-best-mini-coolers-in-india-starting-at-rs-2999-for-affordable-cooling-this-summer.jpg"
                  width="200"
                  height="200"
                  alt=""
                />
              <li>
                inveter
              </li>
              <img
                  src="https://www.elprocus.com/wp-content/uploads/2013/02/Home-Inverver.jpg"
                  width="200"
                  height="200"
                />
              <li>
                bag
              </li>
              <img
                  src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-2905238.jpg&fm=jpg"
                  width="200"
                  height="200"
                  alt=""
                />
              <li>
                mouse
              </li>
              <img
                  src="https://m.media-amazon.com/images/I/41vH6OPk8HL.jpg"
                  width="200"
                  height="200"
                  alt=""
                />
            </ul>
          </h2>
        </div>
        <button
   onClick={() => {
    navigate("/");
   }}
 >
  GoBack
 </button>
      </section>
    </>
  );
};

export default Products;
