<img align="right" width="300" style="border-radius: 10%" src="https://user-images.githubusercontent.com/42489409/193446094-bf082ec4-d8b7-485c-963d-ba544ecc521a.png">


# KokoAI - We change - Smart Cocoa. 

KokoAI is a cocoa diseases detection app for Ghanaian farmers.

## Inspiration
Challenge setter: KNUST
*Sustainable Cocoa Farming and Social Rise We live on a planet with challenges in energy demand and the depletion of natural resources*. Sustainable agriculture not only benefits the environment by helping maintain soil quality but also supports local communities. Cocoa production is the backbone of Ghana's economy and is the main cash crop. **It contributes about 35% of the country’s export earnings.** Over the years the production has been faced with structural problems. Plant diseases, lack of innovative farm practices, and illegal deforestation due to lack of knowledge of how to reuse land, have resulted in low productivity per acre and hence low incomes for the farmers. **Our solution is to provide a user-friendly mobile app that predicts diseases of cocoa trees and suggests sustainable treatments. The app's design is adapted to the needs of Ghanaian cocoa farmers.**

## What it does
The goal is to increase the farmers' productivity through early detection of plant diseases and digital treatment learning. After the farmer has taken a photo of his cocoa fruit, the photo will be uploaded to the picture library. Through simple icons we identify three states: Healthy, Alert, Emergency. Fruits tagged as alerts are affected by diseases that can be treated by sustainable measures by the farmer himself. In contrast, fruits tagged as emergencies are affected by highly devastating diseases such as cocoa swollen shoot virus disease. In this case, the farmer can immediately call the ministry of Agriculture and Food to receive service and help from an expert.

## How we built it
We use React for the front end showing a demo version in the web browser. The backend (node.js) is running locally so that the app can work offline. For training the AI Model we use Microsoft Azure Computer Vision service for fast prototyping. We trained a compact object detection model that we could export to tensorflow.js to run it in the backend.

## Challenges we ran into
The research on the situation of Ghana's cocoa production took a lot of time since many problems and effects are linked to each other. Furthermore, we are new to React and Frontend development so the learning took time. Moreover, we had to deal with unexpected technical difficulties on the server such as getting the data on the web browser.

## Accomplishments that we're proud of
We were very concentrated even late at night. Despite the pressure of time, we were able to solve the challenges we ran into. On top of that, we are proud that we had a very creative exchange of ideas within our team and a fruitful discussion with the challenge setters.

## What we learned
We learned how to choose the right business model (tech nonprofit) with our product vision and user group. Furthermore, we learned how to collaboratively collect information and organize it on the platform Notion. Plus we learnt how to develop an app.

## What's next for KokoAi
Participate in other hackathons tackling environmental challenges.
