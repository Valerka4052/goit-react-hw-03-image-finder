import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const ModalRoot = document.querySelector('#modal-root')
console.log(ModalRoot)

export class Modal extends Component {
    static propTypes = {
        LargeImage: PropTypes.string.isRequired,
        toggleModal: PropTypes.func.isRequired,
    };

     componentDidMount() {
       window.addEventListener('click', this.ModalEventLisetener)
  };
     componentWillUnmount() {
   window.removeEventListener("click", this.ModalEventLisetener);
  };

      ModalEventLisetener = (e) => {
          console.log(e.target);
    if (e.target.id === 'overlay') { return this.props.toggleModal() };
  };

    render() {
    const { LargeImage } = this.props;

    return createPortal (<Overlay id='overlay'>
            <ModalContainer>
                <img src={LargeImage} alt="" />
            </ModalContainer>
        </Overlay>,
        ModalRoot
        );
    };
};







