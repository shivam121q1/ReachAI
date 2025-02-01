import React from 'react'
import "./assets/css/flex-slider.css"
import "./assets/css/owl.css"
import "./assets/css/templatemo-sixteen.css"


const TravelMainComponent = ({htmlContent}:any) => {
  return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} >
      
    </div>
  )
}

export default TravelMainComponent
