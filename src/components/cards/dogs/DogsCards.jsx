import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const DogsCards = ({ dogs }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '100%', paddingTop: '30px' }}>
        <Card.Img
          variant="top"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          src={dogs.image}
          alt={dogs.name}
        />
        <Card.Body>
          <Card.Title>{dogs.name}</Card.Title>
          <Card.Text>
            Origin: {dogs.origin}
          </Card.Text>
          <Button onClick={handleShow}>
           Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dogs.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Breed Group::</strong> {dogs.breed_group}</p>
          <p><strong>Lifespan::</strong> {dogs.lifespan}</p>
          <p><strong>Origin:</strong> {dogs.origin}</p>
          <p><strong>Temperament:</strong> {dogs.temperament}</p>
          <p><strong>Colors:</strong> {dogs.colors.join(', ')}</p>
          <p><strong>Description:</strong> {dogs.description}</p>
          <p><strong>Size:</strong> {dogs.size}</p>
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

export default DogsCards;
