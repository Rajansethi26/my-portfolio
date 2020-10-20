import React, { Component } from 'react';
import './contactus.css'
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="contact" id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  <a href={resumeData.linkedinId} target="blank_">{resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
