import React, { Component } from 'react'
import Data from './Data.json'

class CategoryList extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li className="is-active">
                  <a href="#">
                    <span className="icon is-small">
                      <i className="fas fa-home" aria-hidden="true" />
                    </span>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="columns is-mobile">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>
                        <a>{Data.pandas.title}</a>
                      </h2>
                    </div>

                    <div className="content">{Data.pandas.description}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={Data.pandas.photos[0].imageURL}
                        alt="Panda Bear"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h2>
                        <a>{Data.miniatures.title}</a>
                      </h2>
                    </div>

                    <div className="content">{Data.miniatures.description}</div>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={Data.miniatures.photos[0].imageURL}
                        alt="Panda Bear"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default CategoryList
