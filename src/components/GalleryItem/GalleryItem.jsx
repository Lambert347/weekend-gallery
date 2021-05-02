import Axios from 'axios';
import {useState} from 'react';


function GalleryItem(props){
    const item = props.item;

    const [clicked, setClicked] = useState(false);
    const [likes, setLikes] = useState(0);
    const handleLikeClick = (event) => {
        Axios({
            method: 'PUT',
            url: `/gallery/like/:id`,
            data: {
                id: item.like
            }
        })
        .then(response => {
            getGallery();
        })
        .catch(error => {
            console.log(`Error on updating likes`, error);
        })
    }

    const renderMessage = () => {
        if (likes === 1 ){
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
                    <div onClick={ () => {setClicked(false)}}>
                        {item.description}
                        <button onClick={() => handleLikeClick}>Like</button>
                        {likes &&
                            renderMessage()
                        }
                    </div>
            
            ) : (
                    
                    <div onClick={ () => handleLikeClick}>
                        <img src={item.path}></img>
                        <button onClick={() => setLikes(like + 1)}>Like</button>
                        {likes &&
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