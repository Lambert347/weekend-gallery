import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';



//function for the main app
function App() {
    //declares both a galleryList variable, a set function to set it to the data from the server, and the useState function to set it initially to an empty array.
    const [galleryList, setGalleryList] = useState([]);

    //function to get the information from the server
    const getGallery = () => {
      //axios to get the information from the gallery array on the server 
      axios({
        method: 'GET',
        url: '/gallery'
      })
      //once request is made, then the function takes the data (the array of information) from the server and then fill the galleryList variable with that data using setGalleryList.
        .then((response) => {
          console.log(response.data)
          setGalleryList(response.data);
        })
        //Error for if there is an error with receiving the data from the server
        .catch(function (error) {
          console.log('Error with getting data from server', error);
        });
    }
    //function to make sure that the gallery's information is grabbed when the page loads
    useEffect( () => {
      getGallery();
    }, [])

    //displays the information onto the DOM
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* brings in the GalleryList component which handles the specifics of getting the information to the DOM */}
        <GalleryList galleryList={galleryList} getGallery={getGallery}/>
      </div>
    );
}
//exports the app
export default App;
