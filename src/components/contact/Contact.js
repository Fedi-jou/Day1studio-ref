import React from "react";
import { IconContext } from "react-icons/lib";
import { FiPhoneIncoming } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import {
  Buttonsubmit,
  Contactcontainer,
  Contactwrapper,
  Formcontainer,
  Infocontainer,
  Inputbox,
  Inputname,
  Inputwrapper,
} from "./Contact_style";

const Contact1 = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "2.5rem" }}>
        <Contactwrapper>
          <Contactcontainer>
            <Infocontainer>
              <FiPhoneIncoming />
              <br />
              <div>Give us a call :</div>
              <br />
              <div>+216 23 23 8 666 / +216 27 618 164</div>
            </Infocontainer>
            <Infocontainer>
              <HiOutlineMail />
              <br />
              <div>Send us an E-mail :</div>
              <br />
              <div>day1studi0@gmail.com</div>
            </Infocontainer>
            <Infocontainer>
              <GoLocation />
              <br />
              <div>Come see us :</div>
              <br />
              <div>Innovate CoWorking space n°3 2074 Mourouj 1</div>
            </Infocontainer>
          </Contactcontainer>
          <Formcontainer>
            <div>Hello .. write your message</div>
            <Inputwrapper>
              <Inputbox type="text" name="" required="required" />
              <Inputname>Full Name</Inputname>
            </Inputwrapper>
            <Inputwrapper>
              <Inputbox type="email" name="" required="required" />
              <Inputname>E-mail address</Inputname>
            </Inputwrapper>
            <Inputwrapper>
              <Inputbox required="required" />
              <Inputname>Your message...</Inputname>
            </Inputwrapper>
            <Inputwrapper>
              <Buttonsubmit type="submit" value="Send" required="required" />
            </Inputwrapper>
          </Formcontainer>
        </Contactwrapper>
      </IconContext.Provider>
    </>
  );
};

export default Contact1;
