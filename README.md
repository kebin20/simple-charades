# simple-charades
A simple app that helps with the english game for charades

The basic functions are that firstly, a random image will appear after clicking a button. These images are provided by providing them within a source folder. 

Buttons and counters are displayed below the image to keep track of scores and number of skips. 

This project was mainly a practice for DOM manipulating and basic Vanilla Javacsript. 

23/09/22

- Added an extra 3rd solution, where I refactored the code using a combination of .map, new Array() and .fill in order to easily populate the image files and insert them into the HTML. 

I feel like this solution is the most time saving as you do not need to hard-code the image numbers in the array anymore. If you need to increase or decrease the number of images, simply change the number of arrays needed in Array() and change the value in the random function.  In addition, this also helps to reduce the lines of code making my code DRYer. 

25/09/22

- Had a pair programming session with a friend. He helped me to change the code so that the same image won't appear twice when clicking through the next button. We used the .sort() function to pass in a function that produces a random number in order to randomise the numbers in the array. 

- One thing to note is to NOT use .map() with DOM manipulation as the use for .map() as it is not good practice and shouldn't be used for DOM manipulation (such as using .innerHTML)




Future function to add:

- The function for users to upload their own images in the app so that it can render other people's images.