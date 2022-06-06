import React from "react";
import './header.scss';

const Header = (props) => {
  const { name, carrer, picture, description } = props
  return (
    <>
      <div className="header py-4">
        <div className="container">
          <div className="row justify-content-between align-items-start">
            <div className="col-md-2 order-md-2">
              <picture className="wh-professional-picture">
                <img src={picture ? picture[0] : ''} alt={name} />
              </picture>
            </div>
            <div className="col-md-8  order-md-1">
              <h2 className="wh-professional-name text-highlight">{name.toUpperCase()}</h2>
              <h3 className="wh-carrer-name  text-orange text-highlight">{carrer.toUpperCase()}</h3>
              <p className="wh-carrer-description  text-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header