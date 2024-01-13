import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AssignmentThree() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className='container2'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, lacus non sollicitudin euismod, mauris risus blandit justo, sit amet accumsan ligula justo sit amet purus. Donec vitae mauris quis neque imperdiet accumsan. Aliquam neque nulla, scelerisque eget euismod in, maximus dictum lacus. Curabitur vel maximus nisi, id iaculis ante. Vivamus vitae lorem vitae mauris accumsan iaculis id et enim. Aliquam vehicula gravida metus eget fermentum. Nullam porttitor eros ante, at suscipit urna suscipit at.</p>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, lacus non sollicitudin euismod, mauris risus blandit justo, sit amet accumsan ligula justo sit amet purus. Donec vitae mauris quis neque imperdiet accumsan. Aliquam neque nulla, scelerisque eget euismod in, maximus dictum lacus. Curabitur vel maximus nisi, id iaculis ante. Vivamus vitae lorem vitae mauris accumsan iaculis id et enim. Aliquam vehicula gravida metus eget fermentum. Nullam porttitor eros ante, at suscipit urna suscipit at.</p>
      <Button variant="primary" className='open' onClick={handleShow}>
        Open Dialog
      </Button>

      <Modal show={showModal} onHide={handleClose} centered size="lg" className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body>
          {/* Your modal content with space */}
          <p></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AssignmentThree;
