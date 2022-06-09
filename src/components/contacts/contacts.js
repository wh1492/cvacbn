import React from "react";

const Contacts = (props) => {
  const { mail, phone, linkedin, skype } = props.contacts

  let linkdnTrim = linkedin.replace('https://', '')
  return (
    <div className="py-4" style={{ background: '#2c343f', color: 'white' }}>
      <div className="container ">
        <ul className="row justify-content-between">
          <li className="col">
            <a href={"mailto:" + mail}>{mail}</a>
          </li>
          <li className="col">
            <a href={"tel:" + phone}>{phone}</a>
          </li>
          <li className="col">
            <a href={linkedin} target="_blank">{linkdnTrim}</a>
          </li>
          <li className="col">
            <a href={"skype:" + skype}>{skype}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts