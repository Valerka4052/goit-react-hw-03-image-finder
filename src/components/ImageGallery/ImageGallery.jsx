import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

export function ImageGallery ({array,getLargeImage}) {
    return (
        <List onClick={getLargeImage}>
            {array.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem getLargeImage={getLargeImage} key={id}
                    imageUrl={webformatURL}
                    largeImageURL={largeImageURL} />
            })}
        </List>
    );
};

ImageGallery.propTytpes = {
    getLargeImage: PropTypes.func.isRequired,
    array: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
};
