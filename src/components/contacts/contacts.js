import React from "react";
import { GrMail, GrSkype } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker } from "react-icons/hi";



import './contacts.scss'

const Contacts = (props) => {
  const { mail, phone, linkedin, skype, location } = props.contacts

  let linkdnTrim = linkedin.replace('https://', '')
  return (
    <div className=" wh-contact-block">
      <div className="container ">
        <ul className="row d-flex justify-content-between align-items-center">
          {mail && (
            <li className="">
              <a href={"mailto:" + mail}>
                <GrMail />
                {mail}
              </a>
            </li>
          )}
          {phone && (
            <li className="">
              <a href={"tel:" + phone}>
                <BsWhatsapp />
                {phone}
              </a>
            </li>
          )}
          {location && (
            <li className="">
              <span >
                <HiLocationMarker />
                {location}
              </span>
            </li>
          )}
          {linkedin && (
            <li className="">
              <a href={linkedin} target="_blank">
                <FaLinkedinIn />
                {linkdnTrim}
              </a>
            </li>
          )}
          {skype && (
            <li className="">
              <a href={"skype:" + skype}>
                <GrSkype />
                {skype}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Contacts