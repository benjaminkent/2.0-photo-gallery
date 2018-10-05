import React, { Component } from 'react'
import Data from './Data.json'

class PhotoList extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">
                  <span className="icon is-small">
                    <i className="fas fa-home" aria-hidden="true" />
                  </span>
                  <span>Home</span>
                </a>
              </li>
              <li className="is-active">
                <a href="#">
                  <span>{Data['pandas'].title}</span>
                </a>
              </li>
            </ul>
          </nav>
          <h3 className="title">{Data['pandas'].title}</h3>
          <h4 className="subtitle">{Data['pandas'].description}</h4>
          <div className="columns is-multiline">
            {Data['pandas'].photos.map(photo => {
              return (
                <div className="column">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-image">
                        <figure className="image">
                          <a>
                            <img src={photo.imageURL} alt="Panda Waving" />
                          </a>
                          <figcaption>
                            <a>{photo.title}</a>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default PhotoList
