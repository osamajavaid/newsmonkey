import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, urlNews, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:'1'}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span>
              <small>
                By: {author ? author : "John Doe"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </span>
            <br />
            <span></span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={urlNews} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
