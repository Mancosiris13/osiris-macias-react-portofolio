import Modal from 'react-modal';
import React, { useState } from 'react';
const customStyles = {
  overlay: 'fixed inset-0 bg-black opacity-75',
  content:
    'flex items-center justify-center w-full h-full max-w-full max-h-full',
};

const ImageModal = ({ imageUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>
        <div className="basis-1/3 flex-1 shadow-xl">
          <img
            src={imageUrl}
            alt=""
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
          />
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <img
          src={imageUrl}
          alt=""
          className="rounded-lg object-contain max-w-full max-h-full"
        />
      </Modal>
    </>
  );
};

export default ImageModal;
