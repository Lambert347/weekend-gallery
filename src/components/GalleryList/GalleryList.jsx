import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props){
    return (
        <>
        <h2>Gallery of My Life:</h2>
        <div>
            {props.list.map(item => 
                (<GalleryItem key={item.id} item={item} />)
            )}
        </div>
        </>
    )
}

export default GalleryList;