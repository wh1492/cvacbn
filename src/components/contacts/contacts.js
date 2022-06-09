import React from "react";

import './contacts.scss'

const Contacts = (props) => {
  const { mail, phone, linkedin, skype } = props.contacts

  let linkdnTrim = linkedin.replace('https://', '')
  return (
    <div className="py-4 wh-contact-block">
      <div className="container ">
        <ul className="row d-flex justify-content-between align-items-center">
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