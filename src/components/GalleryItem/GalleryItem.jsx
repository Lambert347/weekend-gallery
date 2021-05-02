import axios from 'axios';
import {useState} from 'react';


function GalleryItem(props){
    const item = props.item;

    const [clicked, setClicked] = useState(false);
    const handleLikeClick = () => {
        console.log('click!');
        axios.put(`/gallery/like/${item.id}`,{id: item.id})
        .then(response => {
            // getGallery();
        })
        .catch(error => {
            console.log(`Error on updating likes`, error);
        });
    }

    const renderMessage = () => {
        if (item.likes === 1 ){
            return(<p>This was liked by {likes} people!</p>);
        }
        else {
            return(<p>No likes yet!</p>);
        }
    }

    return (
        <div>
            <main>
                {clicked ?
                (
                    <div>
                        <div onClick={ () => {setClicked(false)}}>
                            {item.description}
                        </div>
                        <button onClick={handleLikeClick}>Like</button>
                        {item.likes &&
                            renderMessage()
                        }
                    </div>
            
            ) : (
                    
                    <div>
                        <img src={item.path} onClick={ () => {setClicked(true)}}></img>
                        <button onClick={handleLikeClick}>Like</button>
                        {item.likes &&
                            renderMessage()
                        }
                    </div>
                )
            }
            </main>
        </div>
    );
}

export default GalleryItem;