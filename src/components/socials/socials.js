import React from "react";

const Socials = (props) => {
  const { mail, phone, linkedin, skype } = props.socials

  let linkdnTrim = linkedin.replace('https://', '')
  return (
    <div style={{ background: '#2c343f', color: 'white' }}>
      <div className="container mx-auto">
        <ul>
          <li>
            <a href={"mailto:" + mail}>{mail}</a>
          </li>
          <li>
            <a href={"tel:" + phone}>{phone}</a>
          </li>
          <li>
            <a href={linkedin} target="_blank">{linkdnTrim}</a>
          </li>
          <li>
            <a href={"skype:" + skype}>{skype}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Socials