import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addPerfume, createPerfume } from '../../store/perfumes';
import './PerfumeForm.css';


const PerfumeForm = () => {
  const history = useHistory();
  // loged in user
  const loggedInUser = useSelector(state => state.session.user)

 // useStates
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [masterPerfumer, setMasterPerfumer] = useState('');
  const [perfumeImg, setPerfumeImg] = useState('');



  const dispatch = useDispatch();

  const perfumeSubmitted = async (e) => {
    e.preventDefault();
    const perfume = {
        userId: loggedInUser.id,
        name,
        brand,
        masterPerfumer,
        perfumeImg
    }
  
     dispatch(addPerfume(perfume))
    reset();
  };

  const reset = () => {
    setName('');
    setBrand('');
    setMasterPerfumer('');
    setPerfumeImg('');

    history.push('/');

  };


  return loggedInUser && (
    <div>
      <h1>Add a Perfume!</h1>
      <form onSubmit={perfumeSubmitted}>
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
       
        <button type='submit'>Add Your New Perfume!</button>
      </form>
    </div>
  );
};

export default PerfumeForm;
