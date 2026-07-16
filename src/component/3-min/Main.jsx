import { useState } from "react";
import "./main.css";
import { useFormState } from "react-dom";

const myProjects = [
  { projectTitle: "react project", category: ["react"], imgPath: "./1.png" },
  { projectTitle: "css project", category: ["react"], imgPath: "./2.png" },
];

const Main = () => {
  const [currentActiv, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handelClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ[0] === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className=" flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActiv === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handelClick("css");
          }}
          className={currentActiv === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handelClick("js");
          }}
          className={currentActiv === "js" ? "active" : null}
        >
          Java Script
        </button>
        <button
          onClick={() => {
            handelClick("react");
          }}
          className={currentActiv === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handelClick("nod");
          }}
          className={currentActiv === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className="flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">tic tak toe game</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a href="https://github.com/m1852210-collab">
                      <div className="icon-link"></div>
                    </a>
                    <a href="https://github.com/m1852210-collab">
                      <div className="icon-github"></div>
                    </a>
                  </div>
                  <a className="link flex" href="https://github.com/m1852210-collab">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right2"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
