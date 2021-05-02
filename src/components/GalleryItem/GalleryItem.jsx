//imports axios, useState from react, and the css file for styling
import axios from 'axios';
import {useState} from 'react';
import './GalleryItem.css';


//function to render each item from the galleryList array to the DOM with conditional rendering of content from each item and a like button to like the photo
function GalleryItem({item, getGallery}){
    
    //creates a clicked variable and state to track whether or not a photo has been clicked
    const [clicked, setClicked] = useState(false);
    //function to handle when someone clicks the like button on one of the photos
    const handleLikeClick = () => {
        //axios put request to the server to find the item id in the array that corresponds to the div element with the button that was clicked.
        //on the server, will update the likes count by 1, and then this function updates the gallery by receiving it again.
        axios.put(`/gallery/like/${item.id}`,{id: item.like})
        .then(response => {
            console.log('Response from server', response)
            getGallery();
        })
        //error handling in case one occurs with making the request
        .catch(error => {
            console.log(`Error on updating likes`, error);
        });
    }

    //function to render a different message depending on if any likes are present
    const renderMessage = () => {
        //if there are no likes on an image, display this message
        if (item.likes === 0 ){
            return(<p>No likes yet!</p>)
        }
        //else if there are likes on the image, display this message
        else if (item.likes >= 1){
            return(<p>This was liked by {item.likes} people!</p>)
        }
    }
    //return to actually display items on the DOM
    return (
        <div>
            <main>
                {/* ternary operator function to alternate between the div with just the image and the div with the description */}
                {clicked ?
                (
                    // if the image was clicked, set the clicked status to false and then display the description 
                    <div className="card">
                        <div onClick={ () => {setClicked(false)}}>
                            {item.description}
                        </div>
                        {/* button to allow users to like picture, and to call the renderMessage function above */}
                        <button id="button" onClick={handleLikeClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/></svg>
                        </button>
                        {/* calls the render message function */}
                        {item.likes &&
                            renderMessage()
                        }
                    </div>
            
            ) : (
                    //if the clicked is set to false, show the image.
                    <div className="card">
                        {/* if the image is clicked on, the clicked variable is set to true and it swaps back to the description above */}
                        <img src={item.path} className="image" onClick={ () => {setClicked(true)}}></img>
                            {/* same button as before to allow users to like an image */}
                            <button id="button" onClick={handleLikeClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/></svg>
                            </button>
                            {/* renders the message using the renderMessage function */}
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
//exports this component to be used by the gallery list component.
export default GalleryItem;