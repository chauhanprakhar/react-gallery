import React from 'react';
// import PropTypes from 'prop-types';

/**
 *
 * @param {String} imageSrc - Image URL
 * @param {String} imageAlt - Alternative text of the image.
 * @param {Function} showImageModal - Function to show the image in a modal box when clicked.
 * @returns {Component} Returns an image component
 */

const Card = ({ imageSrc, imageAlt, showImageModal }) => (
  <>
    <div className="col">
      <div className="card mx-3 my-3" style={{ border: 'none', borderRadius: '10px' }}>
        <img
          src={imageSrc}
          className="img-fluid card-img-top"
          alt={imageAlt}
          style={{ borderRadius: '10px' }}
          onClick={() => showImageModal(imageSrc, imageAlt)}
        />
      </div>
    </div>
  </>
);

export default Card;
