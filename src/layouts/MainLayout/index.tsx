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
      <div className="main-layout-content">
        <div className="top-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <h4 className="mb-2">Update / Logs</h4>
                <div className="text-red">Version 1.0.0</div>
              </div>
              <div className="col-7">
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

        <div className="main-section">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
