function Modal({name, videoLink, onGoBack}){

    function goBackHandler(){
        onGoBack();
    }

    return(
        <div className='modal'>
            <p>{name}</p>
            <iframe  className="youtubeVideo"
                src={videoLink}
                title={"Education is Free: " + name + " Video"}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <button className='btn' onClick={goBackHandler}>Go Back</button>
        </div>
    )
}

export default Modal;