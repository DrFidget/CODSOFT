import styles from "./Services.module.css";
import puzzle from "../assets/puzzle.png";
import build from "../assets/build.png";
import deploy from "../assets/deploy2.png";
const Services = () => {
  return (
    <>
      <div className="container text-center " id="H2">
        <div className="row py-5">
          <div className="col-12 my-3 ">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6  m3">
                  <img
                    src={puzzle}
                    alt=""
                    className={`img-fluid ${styles.mainimg}`}
                  ></img>
                </div>
                <div className="col-sm-12 col-lg-6  px-5 d-flex align-items-center ">
                  <div className="d-flex flex-column gap-4 ">
                    <div className={`${styles.h2}  w-100 fw-bold text-center`}>
                      Design
                    </div>
                    <div className={`${styles.innertext} fs-5 fst-italic`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta odio autem incidunt magnam dolorum facere rerum
                      tempore cum est dolore, provident dolores vero omnis et
                      expedita vel cumque! Suscipit, iure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 my-3 ">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6  px-5 d-flex align-items-center ">
                  <div className="d-flex flex-column gap-4 ">
                    <div className={`${styles.h2}  w-100 fw-bold text-center`}>
                      Create
                    </div>
                    <div className={`${styles.innertext} fs-5 fst-italic`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta odio autem incidunt magnam dolorum facere rerum
                      tempore cum est dolore, provident dolores vero omnis et
                      expedita vel cumque! Suscipit, iure.
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6  m3">
                  <img
                    src={build}
                    alt=""
                    className={`img-fluid ${styles.mainimg}`}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 my-3 ">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6  m3">
                  <img
                    src={deploy}
                    alt=""
                    className={`img-fluid ${styles.mainimg}`}
                  ></img>
                </div>
                <div className="col-sm-12 col-lg-6  px-5 d-flex align-items-center ">
                  <div className="d-flex flex-column gap-4 ">
                    <div className={`${styles.h2}  w-100 fw-bold text-center`}>
                      Deploy
                    </div>
                    <div className={`${styles.innertext} fs-5 fst-italic`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta odio autem incidunt magnam dolorum facere rerum
                      tempore cum est dolore, provident dolores vero omnis et
                      expedita vel cumque! Suscipit, iure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
