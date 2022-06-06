import React from "react";
import './header.scss';

const Header = (props) => {
  const { name, carrer, picture, description } = props
  console.log('props: ', props)
  return (
    <>
      <div className="header">
        <div className="container">
          <picture style={{
            height: "150px",
            width: "150px",
            display: "inline-block",
            overflow:"hidden",
            border: "4px solid #cf491a"
          }}>
          <img src={picture ? picture[0] : ''} alt={name} />
          </picture>
          <h2 className="text-highlight">{name.toUpperCase()}</h2>
          <h3 className="text-orange text-highlight">{carrer.toUpperCase()}</h3>
          <p className="text-semiBold">
            {description}
          </p>
        </div>
      </div>

    </>
  )
}

export default Header