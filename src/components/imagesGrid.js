import React,{useState} from 'react';
// import PropTypes from 'prop-types';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import Card from './imageCard.js';

/**
 * A component to render the images as a responsive image gallery grid.
 * @param {Array} images - An array of objects containting the metadata about the images.
 * @returns {Component} returns an images grid component.
 */

const CardGrid = ({ image }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  const showImageModal = (imageSrc, imageAlt) => {
    setModalOpen(!modalOpen);
    setModalImage(imageSrc);
    setModalImageAlt(imageAlt);
  };

  return (
    <>
    {modalOpen && (
      <MDBModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <MDBModalHeader toggle={() => setModalOpen(!modalOpen)}>{modalImageAlt || 'Image'}</MDBModalHeader>
        <MDBModalBody>
          <img className="img-fluid mx-auto d-block" src={modalImage} alt={modalImageAlt} style={{ borderRadius: '10px' }} />
        </MDBModalBody>
      </MDBModal>
      )}
      <div className="mx-5 my-5 row row-cols-1 row-cols-md-3 g-4">
        {image.map((_image) => <Card imageSrc={`https://live.staticflickr.com/${_image.server}/${_image.id}_${_image.secret}_w.jpg`} 
        imageAlt={_image.title} 
        showImageModal={showImageModal} 
        key={_image.id}/>)}
      </div>
    </>
  );
};


export default CardGrid;
