import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const ModalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    static propTypes = {
        LargeImage: PropTypes.string.isRequired,
        toggleModal: PropTypes.func.isRequired,
    };
    
    ModalEventLisetener = (e) => {
        if (e.target.id === 'overlay') { return this.props.toggleModal() };
    };

    render() {

        const { props: { LargeImage }, ModalEventLisetener } = this;

        return createPortal(<Overlay onClick={ModalEventLisetener} id='overlay'>
            <ModalContainer>
                <img src={LargeImage} alt="" />
            </ModalContainer>
        </Overlay>,
            ModalRoot
        );
    };
};







