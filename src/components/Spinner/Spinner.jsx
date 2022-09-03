import React from "react";
import Text from "../../helpers/lang/Text";

const Spinner = () =>{
return(
  <div className="container-fluid overflow-hidden">
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <span className="spinner-border text-danger fs-1 h1" role='status'>
    </span>
    <span className="text-white h5">&nbsp;&nbsp;<Text tid={"loading"}/></span>
  </div>
  </div>
)
}

export default Spinner;