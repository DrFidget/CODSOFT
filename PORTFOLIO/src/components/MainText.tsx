import styles from "./MainText.module.css";
import mainpic from "../assets/mainpic.png";
const MainText = () => {
  return (
    <div
      className={`row justify-content-center align-items-center ${styles.main} w-100`}
      id="HOME"
    >
      <div
        className={`col-12 col-sm-8 col-lg-4  mt-5 mt-sm-4 px-5 px-sm-5 ${styles.c1}`}
      >
        <div className="d-flex flex-column justify-content-center ">
          <div className={`${styles.a} fw-bold fs-1 `}>
            Lorem ipsum dolor sit amet ?
          </div>
          <div className={`${styles.a} fw-bolder  mt-5`}>ATECH</div>
          <div className={`${styles.a} fst-italic fs-3 mt-4`}>
            Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </div>
        </div>
      </div>
      <div className={`col-12 col-sm-8 col-lg-6  ${styles.c2}`}>
        <img
          src={mainpic}
          alt=""
          className={`img-fluid ${styles.mainimg}`}
        ></img>
      </div>
    </div>
  );
};

export default MainText;
