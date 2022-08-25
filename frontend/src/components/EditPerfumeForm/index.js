import { useState } from 'react';
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
      <form onSubmit={editedPerfumeSubmitted}>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder= "Blue de Chanel"
          name='name'
        />
        <input
          type='text'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          placeholder="Chanel"
          name='brand'
        />
         <input
          type='text'
          onChange={(e) => setMasterPerfumer(e.target.value)}
          value={masterPerfumer}
          placeholder="Jacques Polge"
          name='masterPerfumer'
        />
        <input
          type='text'
          onChange={(e) => setPerfumeImg(e.target.value)}
          value={perfumeImg}
          placeholder="https://www.theperfumeshop.com/-Boss-Bottled.jpg"
          name='perfumeImg'
        />
       
        <button type='submit'>Submit your Perfume!</button>
      </form>
    </div>

    )
}



export default EditForm;


