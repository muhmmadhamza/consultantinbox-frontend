import React from 'react'

const HomeCommen = ({Chooseleft, dataAbout, otherData2 , className, htmlTag}) => {
    const {data} = dataAbout;
    const apiUrl = process.env.REACT_APP_API_URL;

    const renderRichText = (content) => {
      return content?.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index}>
                {block.children.map((child, idx) => (
                  <span key={idx}>{child.text}</span>
                ))}
              </p>
            );
          default:
            return null;
        }
      });
    };
  return (
    <>
       <div className={`why-choose-comply ${className}`}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="choose-comply-left">
                      <h1>{otherData2?.attributes?.title}</h1>
                      <p>
                      {renderRichText(otherData2?.attributes?.description)}
                      </p>
                     {htmlTag}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="chose-right">
                      <img src={`${apiUrl}${otherData2?.attributes?.image?.data?.attributes?.url}`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default HomeCommen