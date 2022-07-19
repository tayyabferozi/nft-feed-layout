import React from "react";

type Props = { children?: any };

const MainLayout = ({ children }: Props) => {
  return (
    <div id="main-layout">
      <div className="nav">
        <div className="logo">Logo</div>

        <div className="nav-main">
          <a href="#0">
            <img src="/assets/vectors/nav-1.svg" alt="nav-1" />
          </a>
          <a href="#0">
            <img src="/assets/vectors/nav-2.svg" alt="nav-2" />
          </a>
          <a href="#0">
            <img src="/assets/vectors/nav-3.svg" alt="nav-3" />
          </a>
          <a href="#0">
            <img src="/assets/vectors/nav-4.svg" alt="nav-4" />
          </a>
        </div>
      </div>

      <div className="right-wrap">
        <div className="container-fluid px-0">
          <div className="row gx-0 layout-right-main-row">
            <div className="col-xxl-8 col-xl-7">
              <div className="main-layout-content">
                <div className="top-section">
                  <div className="container-fluid">
                    <div className="row main-row">
                      <div className="col-4">
                        <h4 className="mb-2">Update / Logs</h4>
                        <div className="text-green mb-1">Version 1.0.0</div>

                        <div className="text-start">
                          <p className="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora voluptatibus labore tempore beatae!
                          </p>

                          <ul className="mt-3">
                            <li>+ Added Discord</li>
                            <li>- Removed Bugs</li>
                            <li>
                              + Added{" "}
                              <a className="text-secondary-1" href="#0">
                                Read More
                              </a>
                            </li>
                          </ul>

                          <div className="mt-2">
                            <button className="btn">
                              <div className="btn-text">Download Update</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="mb-2">License Section</h4>

                        <input type="text" placeholder="XXXXX-XX-XX-XXX-XXX" />

                        <div className="cards mt-4">
                          <div className="card">
                            <div className="card-head">Type</div>
                            <div className="card-body">Monthly</div>
                          </div>
                          <div className="card">
                            <div className="card-head">Expiry</div>
                            <div className="card-body">July 2</div>
                          </div>
                          <div className="card">
                            <div className="card-head">Price</div>
                            <div className="card-body">$50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="main-section">{children}</div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-3">
              <div className="p-4">
                <h3 className="text-center">Stats</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
