import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Spiritual Offerings</h2>
          {/* <p>
         Data will be added
          </p> */}
        </div>
        <div className="row">
          <h1>Coming Soon</h1>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"} */}
        </div>
      </div>
    </div>
  );
};
