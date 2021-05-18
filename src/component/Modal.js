function Modal(props){

    function goBackHandler(){
        props.onGoBack();
    }

    return(
        <div className='modal'>
            <p>This artist...</p>
            <button className='btn' onClick={goBackHandler}>Go Back</button>
        </div>
    )
}

export default Modal;