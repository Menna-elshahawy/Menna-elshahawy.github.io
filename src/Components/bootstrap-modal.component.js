// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyModalComponent extends Component {

    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHide({ msg: 'Cross Icon Clicked!' })}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.body}
                         <div className="video-responsive">
                            <iframe
                              width="853"
                              height="480"
                              src={`https://www.youtube.com/embed/${this.props.embedId}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Embedded youtube"
                            />
                      </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'Modal Closed!' })} >Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default MyModalComponent;