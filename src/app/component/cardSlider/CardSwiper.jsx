
import React from 'react'
// import '../../pages/style.scss'
const apiUrl = process.env.REACT_APP_API_URL;

const CardSwiper = ({curElem}) => {
    // const {image, title , description} = curElem;
  return (
    <>
    <li className="feature-card-li">
          <div className="feature-card">
            <div className="card-imgs">
              <img src={`${apiUrl}${curElem?.attributes?.image?.data?.attributes?.url}`} alt="" />
            </div>
            <div className="f-card-body">
              <h3>{curElem?.attributes?.primaryheading}</h3>
              <p>
              {curElem?.attributes?.description[0]?.children[0]?.text}
              </p>
            </div>
          </div>
        </li>
    
    </>
  )
}

export default CardSwiper