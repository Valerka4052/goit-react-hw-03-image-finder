import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({imageUrl,largeImageURL}) {
    return (<Item>
        <Image id={largeImageURL} src={imageUrl} alt='' />
    </Item>);
};

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};