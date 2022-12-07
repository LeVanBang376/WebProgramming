import React, { useState } from 'react'
import Image from '../../assets/images/home_introduction.png'
import './styles.css'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'
import parse from "html-react-parser";
export default function HomeNews(props) {
    const [title, setTitle] = React.useState("")
    const [newContent, setNewContent] = React.useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{parse(newContent)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="card mb-3 maxW cur" onClick={() => { setTitle(props.title); setNewContent(props.content); handleShow() }}>
                <div class="row g-0 pt-2 pb-2">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src={props.thumbnail} alt="image" class="rounded-start" width="100%" height="100%" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" >{props.title}</h5>
                            <p class="card-text">{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
