import React from 'react'
import ReactPlayer from 'react-player'
import './style.scss'
const Videopopup = ({show, setShow, play, setPlay}) => {
    const hidePopup =() =>{
        setShow(false)
        setPlay(false)
    }
  return (
    <>
    <div className={`videopopup ${show ? "visible" : " "}`}>
        <div className="opacityLayer" onClick={hidePopup}></div>
        <div className="videoPlayer" onClick={hidePopup}>
            <div className="close-btn" onClick={hidePopup}>Close</div>
            <ReactPlayer 
            url={`https://youtu.be/z4nO6NuEM3A`}
            controls
            width= "100%"
            height="100%"
           playing={play}
            />
        </div>
    </div>
    </>
  )
}

export default Videopopup