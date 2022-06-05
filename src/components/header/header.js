import React from "react";
import './header.scss';

const Header = (props) => {
  const { name, carrer, picture, description } = props
  console.log('props: ', props)
  return (
    <>
      <div className="header">
        <div className="container">
          <img src={picture[0]} />
          <h2>{name}</h2>
          <h3>{carrer}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>

    </>
  )
}

export default Header