const Top = () => {
  return (
    <div className="top-section">
      <div className="container-fluid">
        <div className="row main-row gy-5">
          <div className="col-xxl-4 col-xl-5">
            <h4 className="mb-2">Update / Logs</h4>
            <div className="text-green mb-1">Version 1.0.0</div>

            <div className="text-start">
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                voluptatibus labore tempore beatae!
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
  );
};

export default Top;
