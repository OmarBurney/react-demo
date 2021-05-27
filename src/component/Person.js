import {useState} from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Artist({text, video}){

    const[modalIsOpen, setModalsOpen] = useState(false);

    function learnMoreHandler(){
       setModalsOpen(true);
    }

    function closeModalHandler(){
        setModalsOpen(false);
    }

    return(

        <div className='card'>
        <h2>{text}</h2>
        <div className='actions'> 
          <button className='btn' onClick={learnMoreHandler}>Learn More</button>
        </div>

        {modalIsOpen ? <Modal name={text} videoLink={video} onGoBack={closeModalHandler}/> : null}
        {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}

      </div>
    )
}

export default Artist;