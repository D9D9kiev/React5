import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'

const ModalWindow = ({ content: { header, text, actions }, close, show }) => {
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>{actions}</Modal.Footer>
      </Modal>
    </>
  )
}

ModalWindow.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.element,
  }).isRequired,
  close: PropTypes.func,
}

export default ModalWindow
