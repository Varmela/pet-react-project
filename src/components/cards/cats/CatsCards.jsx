import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const CatsCards = ({ cats }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '100%', paddingTop: '30px' }}>
        <Card.Img
          variant="top"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          src={cats.image}
          alt={cats.name}
        />
        <Card.Body>
          <Card.Title>{cats.name}</Card.Title>
          <Card.Text>
            Origin: {cats.origin}
          </Card.Text>
          <Button onClick={handleShow}>
           Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cats.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Origin:</strong> {cats.origin}</p>
          <p><strong>Temperament:</strong> {cats.temperament}</p>
          <p><strong>Colors:</strong> {cats.colors}</p>
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

export default CatsCards;
