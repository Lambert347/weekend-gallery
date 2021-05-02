import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';




function App() {
    const [galleryList, setGalleryList] = useState([]);

    const getGallery = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      })
        .then((response) => {
          console.log(response.data)
          setGalleryList(response.data);
        })
        .catch(function (error) {
          console.log('Error with getting data from server', error);
        });
    }

    useEffect( () => {
      getGallery();
    }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list={galleryList}/>

      </div>
    );
}

export default App;
