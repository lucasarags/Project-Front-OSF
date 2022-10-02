import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const containerCookies = {
  backgroundColor: '#ffffff',
  position: 'fixed',
  width: '1000px',
  height: 'auto',
  top: '50%',
  left: '300px',
  borderRadius: '8px',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-around',
}
const buttonAccept = {
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: 'rgb(133, 188, 35)',
  border: '1px solid #E8E1D6',
  padding: '10px 30px',
  color: '#ffffff',
  borderRadius: '20px',
  margin: '0px 0px 0px 840px',
  cursor: 'pointer'
}
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
      <Modal style={containerCookies}
        show={show}
        onHide={handleClose}
        backdrop="static"
        dialogClassName="modal-90w"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#85BC23', fontWeight: 'bold' }}>This website uses cookies</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingRight: '200px' }}>
          OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance and interaction with media offering publicity tailored to your interests. if you continue browsing, we consider that you accept its use. You can expand this information consulting our Cookies Policity Page
        </Modal.Body>
        <Button style={buttonAccept} onClick={handleClose} variant="primary">ACCEPT</Button>
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









