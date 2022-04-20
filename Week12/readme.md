
# A Web Page for mask checker


## A. HTML+CSS
I used a simple blue background on which I drew a canvas on one side of the page, and the result on the other side. The user can clearly see on the right hand side whether the person on the webcam is wearing a mask or not.

## B. ml5 library
Although I have heard a lot about machine learning, I have never done anything related to it. This is my first time working with a machine learning library. I knew that one needs to know a lot of math to be able to do machine learning, but the library is so high level that it provides many pre-trained models which make the job so much easier. Among many pre-trained models, I have used an image classification model by mobilenet in my assignment.

## C. Working with ml5
Working with ml5 is so much fun because one can remove the labels associated with the original data set used to train the model available in the library, and using the feature extractor functionality, one can transfer the learning process into something that one desires. For instance, for my assignment, I have used the mobilenet which has images from Imagenet used as the dataset for training the image classification model; however, instead of using the labels from the original dataset, I have used feature extractor to train the model with my own datasets. I thought of using the webcam to take the input data and capture the images of me wearing a mask and without wearing a mask and then train the model. I didn’t know that in machine learning, there is a loss function, which needs to be minimized to get a more accurate result/ prediction. The whole process of going through the ml5 library and working with it to come up with the mask checker was a fun and explorative process. 

I have commented out some code but left them as it is because they were used to train the model, and anyone interested in training this model can uncomment those lines, and make a separate model.json file to come up with a different neural network, so that they can have their own version of the mask checker.


## D. Self-evaluation of the final result

I have self-evaluated my final product, the webpage by talking about some of the strengths and weaknesses from my perspective.

      ### 1. Strengths
          a. It can recognize people (at least me) without masks from people with masks.
      ### 2. Weaknesses
          a. The model was trained on the dataset containing my image, so it might not work properly on everyone. In fact, even for me, the background I used and the light intensity and everything becomes important in the learning process, so the model has a limited dataset which is not enough for supervised learning like this.
      
      
## E. Takeaways from the process
  
  1. I have learned what machine learning is and how it works.
  2. I have learned how to use ml5 functions and features to do high level machine learning tasks on the web.
  
## F. Credits

  1. Professor Mathura Govindarajan 
  2. The Coding Train channel
  3. Ml5 reference documentation

## G. Link of the final webpage : https://dt1930.github.io/connections_labs2022/Week12/index.html


