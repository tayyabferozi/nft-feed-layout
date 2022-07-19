import { useState } from "react";
import clsx from "clsx";

import Stats from "../../components/Stats";
import Top from "./Top";

type Props = { children?: any };

const MainLayout = ({ children }: Props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <div id="main-layout">
      <div className="nav-sm d-sm-none d-flex">
        <div className="logo">Logo</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={clsx("nav", isMenuActive && "active")}>
        <div className="close d-sm-none d-block" onClick={toggleMenu}>
          &times;
        </div>
        <div className="logo">Logo</div>

        <div className="nav-main">
          <a onClick={toggleMenu} href="#0">
            <img src="/assets/vectors/nav-1.svg" alt="nav-1" />
          </a>
          <a onClick={toggleMenu} href="#0">
            <img src="/assets/vectors/nav-2.svg" alt="nav-2" />
          </a>
          <a onClick={toggleMenu} href="#0">
            <img src="/assets/vectors/nav-3.svg" alt="nav-3" />
          </a>
          <a onClick={toggleMenu} href="#0">
            <img src="/assets/vectors/nav-4.svg" alt="nav-4" />
          </a>
        </div>
      </div>

      <div className="right-wrap">
        <div className="container-fluid px-0">
          <div className="row gx-0 layout-right-main-row">
            <div className="col-xxl-8 col-xl-9 col-lg-8">
              <div className="main-layout-content">
                <Top />

                <div className="py-40 px-sm-4 px-575-20">
                  <div className="main-section">{children}</div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-3 col-lg-4">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
