//import the gallery item component to use for displaying the information
import GalleryItem from '../GalleryItem/GalleryItem';


//function to map through the array of information (the gallery list array) and display the information to the DOM
function GalleryList({galleryList, getGallery}){
    return (
        <>
        <div id="display">
            {/* maps through the array, adding each item to the DOM */}
            {galleryList.map(item => 
            // brings in the gallery item component, gives each item in the array a unique key corresponding to the item.id from the server. 
            // Also passes in an item object and the getGallery function to be used by the GalleryItem component
                (<GalleryItem key={item.id} item={item} getGallery={getGallery} />)
            )}
        </div>
        </>
    )
}
//export the galleryList to be used by the app.jsx file
export default GalleryList;