import React from 'react'

const Commen = ({Chooseleft, dataAbout, className, htmlTag}) => {
    const {data} = dataAbout;
 
  return (
    <>
       <div className={`why-choose-comply ${className}`}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="choose-comply-left">
                      <h1>{dataAbout.title}</h1>
                      <p>
                     {dataAbout.description}
                      </p>
                     {htmlTag}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="chose-right">
                      <img src={Chooseleft} alt="" />
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Commen