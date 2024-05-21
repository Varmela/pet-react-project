import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const BirdsCards = ({ birds }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '100%', paddingTop: '30px' }}>
        <Card.Img
          variant="top"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          src={birds.image}
          alt={birds.name}
        />
        <Card.Body>
          <Card.Title>{birds.name}</Card.Title>
          <Card.Text>
            Family: {birds.family}
          </Card.Text>
          <Button onClick={handleShow}>
           Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{birds.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Species:</strong> {birds.species}</p>
          <p><strong>Family:</strong> {birds.family}</p>
          <p><strong>Habitat:</strong> {birds.habitat}</p>
          <p><strong>Place of Found:</strong> {birds.place_of_found}</p>
          <p><strong>Diet:</strong> {birds.diet}</p>
          <p><strong>Description:</strong> {birds.description}</p>
          <p><strong>Wingspan:</strong> {birds.wingspan_cm} cm</p>
          <p><strong>Weight:</strong> {birds.weight_kg} kg</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BirdsCards;
