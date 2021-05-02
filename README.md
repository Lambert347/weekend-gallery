# Project Name: Gallery of my Life



## Description
The first step to this project was to conduct a wireframe exercise to get  better understanding of the logic flow of each component. It was during this time that I determined that the bulk of the logic would be contained in the gallery item component and so I zeroed in on that initially as the primary starting point because it would be the most difficult component. The rest, I figured, would be largely straightforward. Additionally, it was the component that was the furthest down the chain and was the component that all the others needed to work properly. 

Before that, however, I first went to the server file and inserted some picture data that I wanted to use later. I added new ids with a short description and a placeholder path for me to remember to fill out later. It was not until the styling process towards the end of the project that I circled back to these and actually inserted the images and their correct paths. My testing was primarily done with the provided goat image.

Like I said, I started the actual coding with the gallery item component. This was by far the hardest component of the assignment because it contained the most work of any of the components. The first major issue I ran into was conceptualizing and implementing the logic behind clicking an image to show the description. After much deliberation and then some trial and error, I settled on a ternary operator to show two distinctly different div elements depending on if the element was clicked or not. I devised a clicked variable that contained a boolean value of true or false which was initially set to false. Clicking on the div would set that variable's value to the opposite value and display that information. Since it was initially set to false, I constructed the function with the ternary operator in such a way that the image was the default div shown. This is supposed to follow the logic that the div is "clicked" and then the description is shown meaning that the description is only shown if the clicked variable is set to true. This was intended to be a more intuitive way to track the logic in the program. Clicking the description then sets that clicked boolean to false and image is shown again. I made sure to export this component to be used by the GalleryList component.

After that, I needed to fill out the GalleryList component to map through the array of information and display each piece of information as one of those GalleryItem divs from the GalleryItem component. Once that was set up, I then went back to the App file and imported the GalleryList component and inserted it into the return function. I then created the axios get request function of getGallery that requested the server for the data and inserted that data into a galleryList array to be used by the program.  

Having done that, I tested to make sure that the toggle between true and false states worked and that the goat and its description were displayed correctly. I also went back to the GalleryItem component to create a renderMessage function that displayed a different message to the DOM for each div depending on how many likes each image had.

The second major problem with this project appeared when I had to create the logic around the like button in the GalleryItem component. Setting up the axios put request was straightforward enough through the handleLikeClick function but getting that result to show on the DOM was the difficult part. I discovered that I needed to pass the getGallery function through the GalleryList component and into the GalleryItem component. That getGallery function was then called by the function that handled the like button click to redisplay the information to the DOM and update those like counts every time the like button was clicked on any of the photos. It was also at this point that I caught a bug with the toggle between states. I initially set that toggle to happen when the div was clicked which had the side effect of also triggering if the like button or the space around the image was also clicked. I moved that behavior down to the image level so that the toggle occurs only if the image itself is clicked. 

With the logic completed, I did some styling to make the presentation of the app look nice. It was at this time that I also inserted the images into the folder on the server and updated the paths and descriptions for those images. Unfortunately, I also had to say goodbye to the goat image but I thanked him (or her) for their service in helping me test this monster of a program. These images were resized to be a consistent size throughout the app and to insure that the presentation was consistent. I also changed the icon for the like button to be more modern and stylized.

## Usage:
The app is pretty straightforward to use and follows basic logic of user interfaces. If the user wants to see the description for an image, then only need to click on that image to see that description. If they want the image back, they just have to click again. The like button is prominently displayed and the user receives real-time feedback on their like clicks. There was a lot of work done under the hood of the program but the outcome the user sees is very simple; as all good programs should be.

## Built With Javascript, react, CSS, node, and HTML 

## Thanks to Prime Digital Academy for the instruction and knowledge to create this application 

## Support 
Email lambe347@umn.edu for any suggestions or problems. 
