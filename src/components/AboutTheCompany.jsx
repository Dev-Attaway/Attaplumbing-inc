import React from 'react';

function AboutTheCompany() {
  return (
    <div className="container m-2">
      <div className="row m-3">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card text-bg-dark">
            <img
              src="vecteezy_ai-generated-beautiful-photography-for-plumbing-services_38813454.png"
              className="card-img"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-end m-3">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card text-bg-dark">
            <img
              src="pexels-wdnet-14953886.png"
              className="card-img"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-start m-3">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card text-bg-dark">
            <img
              src="pexels-thirdman-8470830.png"
              className="card-img"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutTheCompany;