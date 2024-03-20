import React from 'react'
import { useNavigate } from 'react-router-dom';
function Contacts() {
    const navigate=useNavigate();
  return (
    <section id="Contacts">
    <div className="container mt-3 contactContent">
        <h1 className="text-center">Contact Me</h1>
  
        <div className="row mt-4" >

  
            <div className="col-lg-6">
                {/* <!-- form fields --> */}
                <form >
                    <input type="text" className="form-control form-control-lg" placeholder="Name"/>
                    <input type="email" className="form-control mt-3" placeholder="Email" />
                    <input type="text" className="form-control mt-3" placeholder="product"/>
                    <div className="mb-3 mt-3">
                        <textarea className="form-control" rows="5" id="comment" name="text" placeholder="product Details"></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-success mt-3">Contact Me</button>
                
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

export default Contacts