import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addPerfumeThunk, createPerfume } from "../../store/perfumes";
import "./PerfumeForm.css";

const PerfumeForm = () => {
  const history = useHistory();

  // logged in user
  const loggedInUser = useSelector((state) => state.session.user);

  // useStates
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [masterPerfumer, setMasterPerfumer] = useState("");
  const [perfumeImg, setPerfumeImg] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  // Validation Errors
  useEffect(() => {
    const errors = [];
    if (name === "" && brand === "" && masterPerfumer === "" && perfumeImg === "") {
      errors.push("")
    }
    else if (name.length < 2) {
      errors.push("Name must be at least 2 characters");
    }
    else if (name.length > 250) {
      errors.push("Name must be less than 250 characters");
    }
    else if (brand.length < 2) {
      errors.push("Brand must be at least 2 characters ");
    }
    else if (brand.length > 250) {
      errors.push("Brand must be less than 250 characters");
    }
    else if (masterPerfumer.length < 2) {
      errors.push("Perfumer must be at least 2 characters");
    }
    else if (masterPerfumer.length > 250) {
      errors.push("Perfumer must be less than 250 characters");
    }
    else if (perfumeImg.length < 10) {
      errors.push("Perfume image URL must be at least 10 characters")
    }
    else if (perfumeImg.length > 500) {
      errors.push("Perfume image URL must be less than 500 characters");
    }
    else if ((!perfumeImg.endsWith(".jpg")) && (!perfumeImg.endsWith(".png")) && (!perfumeImg.endsWith(".gif"))) {
      errors.push("Image URL must end with .jpg, .png, or .gif");
    }
    else if((!perfumeImg.startsWith("http://")) && (!perfumeImg.startsWith("https://"))) {
      errors.push("Image URL must start with http:// or https://")
    }
    setValidationErrors(errors);
  }, [name, brand, masterPerfumer, perfumeImg]);

  const dispatch = useDispatch();

  const perfumeSubmitted = async (e) => {
    e.preventDefault();
    const perfumeToCreate = {
      userId: loggedInUser.id,
      name,
      brand,
      masterPerfumer,
      perfumeImg,
    };

    dispatch(addPerfumeThunk(perfumeToCreate));
    reset();
  };

  const reset = () => {
    setName("");
    setBrand("");
    setMasterPerfumer("");
    setPerfumeImg("");

    history.push("/");
  };

  return (
    loggedInUser && (
      <div className="perfume-form-container">
        <h1 className="add-perfume">Add a Perfume</h1>
        <div className="error-message-container">
        <ul className="add-perfume-form-errors">
          {validationErrors.map((validationError) => (
            <li className="error-message" key={validationError}>{validationError}</li>
          ))}
        </ul>
        </div>
        <form className="add-perfume-form" onSubmit={perfumeSubmitted}>
          
          <label className="add-perfume-form-label"> Add Name </label>
            
            
            <input className="add-perfume-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Blue de Chanel"
              name="name"
            />
            
          <label className="add-perfume-form-label" >
            Add Brand </label>
            <input className="add-perfume-field"
              type="text"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              placeholder="Chanel"
              name="brand"
            />
          
          <label className="add-perfume-form-label">
            Add Perfumer </label>
            <input className="add-perfume-field"
              type="text"
              onChange={(e) => setMasterPerfumer(e.target.value)}
              value={masterPerfumer}
              placeholder="Jacques Polge"
              name="masterPerfumer"
            />
          
          <label className="add-perfume-form-label">
            Add Image URL </label>
            <input className="add-perfume-field"
              type="text"
              onChange={(e) => setPerfumeImg(e.target.value)}
              value={perfumeImg}
              placeholder="https://www.theperfumeshop.com/-Boss-Bottled.jpg"
              name="perfumeImg"
            />
          
          <button className="add-perfume-button" type="submit" disabled={validationErrors.length > 0}> Add Perfume</button>
        </form>
      </div>
    )
  );
};

export default PerfumeForm;
