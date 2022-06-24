// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";
import ReactPlayer from "react-player"

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyModalComponent extends Component {

    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHide({ msg: `https://www.youtube.com/embed/{this.props.embedId}` })}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.body}
                         <div className="video-responsive">
                              <ReactPlayer
                                url= {this.props.video_url}

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