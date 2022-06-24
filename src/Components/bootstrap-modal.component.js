// src/components/bootstrap-carousel.component.js
import React, { Component } from "react";
import ReactPlayer from "react-player"

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyModalComponent extends Component {

    render() {

        return (
            <div>
                <Modal show={this.props.show} size='lg' onHide={() => this.props.onHide()}>

                    <Modal.Header closeButton>
                        <Modal.Title className="modal_titles">
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         <div className="video-responsive">
                              <ReactPlayer url= {this.props.video_url}/>
                        </div>
                        <div className="description">
                            {this.props.description_elaborate}
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onClick()} >Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default MyModalComponent;