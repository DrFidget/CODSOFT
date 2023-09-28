import { BiShoppingBag } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import styles from "./SecondMain.module.css";
const SecondMain = () => {
  return (
    <>
      <div className=" d-flex flex-column  align-items-center">
        <div
          className={`${styles.h1} row fw-bolder justify-content-center align-content-center  w-50 w-sm-25`}
        >
          What We Do ?
        </div>
        <div
          className={`row fw-light fst-italic fs-4 justify-content-center align-content-center px-5  w-75 w-sm-50 mt-3 ${styles.ftshadow}`}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At mollitia
          eaque, ullam quidem necessitatibus eligendi architecto similique quia
          fugit doloribus. Maxime nisi perferendis ipsum nostrum natus aut fugit
          veritatis molestiae.
        </div>
        <div className="row gap-5 justify-content-center w-75 w-sm-50 my-5">
          <div
            className={` card shadow-lg my-4  p-3 rounded-3`}
            style={{ width: "18rem", backgroundColor: "#894eff" }}
          >
            <BiShoppingBag color="white" size="auto"></BiShoppingBag>
            <div className="card-body">
              <p className={`text-white fs-5 card-text fst-italic`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur quas eveniet minima dicta esse culpa, tempora
                dolorum voluptatem eligendi optio!
              </p>
            </div>
          </div>
          <div
            className={`  card shadow-lg my-4  p-3 rounded-3`}
            style={{ width: "18rem", backgroundColor: "#894eff" }}
          >
            <BsChatLeftText color="white" size="auto"></BsChatLeftText>
            <div className="card-body">
              <p className={`text-white fs-5  card-text fst-italic`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur quas eveniet minima dicta esse culpa, tempora
                dolorum voluptatem eligendi optio!
              </p>
            </div>
          </div>
          <div
            className={`  card shadow-lg my-4  p-3 rounded-3`}
            style={{ width: "18rem", backgroundColor: "#894eff" }}
          >
            <BsRocketTakeoff color="white" size="auto"></BsRocketTakeoff>
            <div className="card-body">
              <p className={`text-white fs-5  card-text fst-italic`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur quas eveniet minima dicta esse culpa, tempora
                dolorum voluptatem eligendi optio!
              </p>
            </div>
          </div>
        </div>
        <div
          className={`row fw-light fst-italic fs-4 justify-content-center align-content-center px-5 w-75 w-sm-50 mt-3 ${styles.ftshadow}`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quod
          repellendus placeat. Sequi quae laudantium aspernatur voluptatum
          numquam odit sapiente est sed aliquam omnis! Voluptatem.
        </div>
      </div>
    </>
  );
};

export default SecondMain;
