import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { perfumeUpdate } from '../../store/perfumes';



import "./EditForm.css";


// COMPONENT
const EditForm = () => {
    const history = useHistory();
    // logged in user
    const loggedInUser = useSelector(state => state.session.user)

    const {perfumeId} = useParams();

    // useStates 
    const [name, setName] = useState(``);
    const [brand, setBrand] = useState('');
    const [masterPerfumer, setMasterPerfumer] = useState('');
    const [perfumeImg, setPerfumeImg] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    // Validation Errors
    useEffect(() => {
      const errors = [];
      if (name.length < 2) {
        errors.push("Name must be at least 2 characters");
      }
      if (name.length > 250) {
        errors.push("Name must be less than 250 characters");
      }
      if (brand.length < 2) {
        errors.push("Brand must be at least 2 characters ");
      }
      if (brand.length > 250) {
        errors.push("Brand must be less than 250 characters");
      }
      if (masterPerfumer.length > 250) {
        errors.push("Perfumer must be less than 250 characters");
      }
      if (perfumeImg.length < 10) {
        errors.push("Perfume image URL must be at least 10 characters")
      }
      if (perfumeImg.length > 500) {
        errors.push("Perfume image URL must be less than 500 characters");
      }
      setValidationErrors(errors);
    }, [name, brand, masterPerfumer, perfumeImg]);
    

    const dispatch = useDispatch();

    const editedPerfumeSubmitted = async (e) => {
        e.preventDefault();
        const perfume = {
            id: perfumeId,
            userId: loggedInUser.id,
            name,
            brand,
            masterPerfumer,
            perfumeImg
        }
        

         //dispatch(perfumeUpdate(perfume))
         const editedPerfume = await dispatch(perfumeUpdate(perfume))
         if (editedPerfume) {
          history.push('/')
         }
        //  if (perfume) {
        //   history.push(`/`)
        // }
         reset();
      };
    
      const reset = () => {
        setName('');
        setBrand('');
        setMasterPerfumer('');
        setPerfumeImg('');
       // history.push('/')
    
      };


    return loggedInUser && (
        <div>
      <h1>Edit your Perfume!</h1>
      <ul className="error-messages">
          {validationErrors.map((validationError) => (
            <li key={validationError}>{validationError}</li>
          ))}
        </ul>
      <form onSubmit={editedPerfumeSubmitted}>
        <label>
          Edit Name
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder= "Blue de Chanel"
          name='name'
        />
        </label>
        <label>
          Edit Brand
        <input
          type='text'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          placeholder="Chanel"
          name='brand'
        />
        </label>
        <label>
          Edit Perfumer
         <input
          type='text'
          onChange={(e) => setMasterPerfumer(e.target.value)}
          value={masterPerfumer}
          placeholder="Jacques Polge"
          name='masterPerfumer'
        />
        </label>
        <label>
          Edit Perfume Image URL
        <input
          type='text'
          onChange={(e) => setPerfumeImg(e.target.value)}
          value={perfumeImg}
          placeholder="https://www.theperfumeshop.com/-Boss-Bottled.jpg"
          name='perfumeImg'
        />
        </label>
       
        <button type='submit'>Submit your Perfume!</button>
      </form>
    </div>

    )
}



export default EditForm;


