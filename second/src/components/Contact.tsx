import styles from "./Contact.module.css";
import logo from "../assets/atech.png";
import { BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div
        className={`${styles.container} container-fluid bg-black px-5 `}
        id="H3"
      >
        <div className="row   py-5">
          <div className="col-md-4 text-center ">
            <div className="container-fluid row m-0 p-0 ">
              <div className="col-md-12 col-sm-5 col py-3">
                <img className={styles.iii} src={`${logo}`} alt="" />
              </div>
              <div className="col-md-12 col-sm-5 col py-3 d-flex  justify-content-center align-items-center gap-5">
                <BsGithub color="white" size="2rem"></BsGithub>
                <BsFacebook color="white" size="2rem"></BsFacebook>
                <BsTwitter color="white" size="2rem"></BsTwitter>
              </div>
            </div>
          </div>

          <div className="col-md-4 offset-md-4 text-center  d-flex flex-column justify-content-center align-items-center">
            <div className=" w-100 my-1 text-white fw-bold fs-2 fst-italic">
              Contact Us
            </div>
            <div className=" w-100 my-1 rounded-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="abc@xyz.com"
                />
              </div>
            </div>
            <div className=" w-100 my-1 rounded-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="input message"
                />
              </div>
            </div>
            <button
              className={`${styles.submit}  py-1 fw-bold w-25 rounded-5 my-1 fst-italic`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
