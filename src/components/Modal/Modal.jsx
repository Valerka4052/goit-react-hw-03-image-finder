import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

export function Modal({LargeImage}) {
    return (
        <Overlay id='overlay'>
            <ModalContainer>
                <img src={LargeImage} alt="" />
            </ModalContainer>
        </Overlay>
    );
};

Modal.propTypes = {
    LargeImage: PropTypes.string.isRequired,
};