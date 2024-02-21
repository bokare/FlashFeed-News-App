import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageurl, newsurl, time, sourse } = this.props;
    return (
      <>
        <div className="card my-2" style={{ maxWidth: "24rem" }}>
          <span className="position-absolute top-0 z-1 start-50  translate-middle badge rounded-pill bg-danger">
            {sourse}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imageurl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date(time).toLocaleString()}
              </small>
            </p>
            {/* first created new object date so we can apply date method on it */}
            <a href={newsurl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
