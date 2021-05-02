import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';


function GalleryList({galleryList, getGallery}){
    return (
        <>
        <div id="display">
            {galleryList.map(item => 
                (<GalleryItem key={item.id} item={item} getGallery={getGallery} />)
            )}
        </div>
        </>
    )
}

export default GalleryList;