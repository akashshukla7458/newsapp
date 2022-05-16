import React, { Component } from "react";
import PropTypes from "prop-types";
import { getByTitle } from "@testing-library/react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author}on
                {new Date(date).toGmtString}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary bg-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
