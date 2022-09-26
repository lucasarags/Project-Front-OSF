import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Cookies() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        dialogClassName="modal-90w"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>This website uses cookies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance and interaction with media offering publicity tailored to your interests. if you continue browsing, we consider that you accept its use. You can expand this information consulting our Cookies Policity Page
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">ACCEPT</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



/*React.useEffect(() => {
  if (window.sessionStorage.getItem('cookies')) {
    setAccepted(true);
  }
}, []);
function acceptPolicy() {
  sessionStorage.setItem('cookies', true);
  setAccepted(true);
}

return !accepted ? (
  <></>) : (<></>)
*/









