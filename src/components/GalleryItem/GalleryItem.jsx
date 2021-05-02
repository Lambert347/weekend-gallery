import {useState} from 'react';


function GalleryItem(props){
    const item = props.item;

    const [clicked, setClicked] = useState(false);
    const [likes, setLikes] = useState(0);

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
                    <div onClick={ () => {setClicked(true)}}>
                    {item.path}
                    <button onClick={() => setLikes(like + 1)}></button>
                    {likes &&
                        renderMessage()
                    }
                    </div>
            ) : (
                    <div onClick={ () => {setClicked(false)}}>
                        {item.description}
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