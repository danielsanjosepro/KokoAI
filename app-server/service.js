const fs = require("fs");
const cvstfjs = require('@microsoft/customvision-tfjs-node');
const { result } = require("lodash");
const model = new cvstfjs.ObjectDetectionModel();
const modelUtilities = require("./model/util");
const gm = require('gm');

modelName = "model_1"
async function loadModel() { 
  await model.loadModelAsync('file://model/'+ modelName + '/model.json') 
}

modelLoaded = false;
loadModel().then(
  function(value) { console.log("Model Loaded Properly!"); modelLoaded = true;},
  function(err) { console.log("Error while loading model: ", err) }
);
// Read the labels avaiblable in the model. Labels[classId] is the label of the classified object
labels = modelUtilities.getLabels(modelName);
probabilityTreshold = 0.2


async function executeModel(imageToBeProcessed) {
  const result = await model.executeAsync(imageToBeProcessed);
  return result;
}

const dataDir = "./public/data";
const statusIconsDir = "./public/statusIcons";

// values for the random outcome generator
const possibleProcessingOutcomes = [true, false];

const possibleProcessingStatuses = [
  "beetle.svg",
  "cut.svg",
  "evergreenTree.svg",
  "honeybee.svg",
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getImageUrl = (data) => {
  return `${dataDir}/${data.dir}/${data.imageName}`;
};

const getRandomOutcome = (previousOutcome, imageToBeProcessed) => {
  const newOutcome = {
    ...previousOutcome,
    outcome:
      possibleProcessingOutcomes[
        getRandomInt(possibleProcessingOutcomes.length)
      ],
    statusIcon:
      possibleProcessingStatuses[
        getRandomInt(possibleProcessingStatuses.length)
      ],
    description:
      possibleProcessingDescription[
        getRandomInt(possibleProcessingDescription.length)
      ],
  };
  return newOutcome;
};

// TODO
// const drawBoundaryBox = (outcome, boundingBox) => {
//   image = gm(dataDir+"/"+outcome.id+"/"+outcome.imageName);
//   image.identify(function(err, value) {
//     console.log(value.size.width)
//   })
//   // image.drawRectangle(30, 40, 200, 400)
// }

const setOutcome = (previousOutcome, imageToBeProcessed) => {
  
  executeModel(imageToBeProcessed).then(
    function(modelResultUnparsed) {
      modelResult = modelUtilities.parseModelResult(modelResultUnparsed)
      console.log("Model worked");
      disease = "Healthy";
      for (var i = 0; i < modelResult.numDetectedObjects; i++) {
        if (modelResult.probabilities[i] < probabilityTreshold) {
          break;
        }
        if (labels[modelResult.classIds[i]] !== "Healthy") {
          disease = labels[modelResult.classIds[i]];
          // drawBoundaryBox(previousOutcome, modelResult.boundingBoxes[i])
          break;
        }
      }

      const outcome = {
        ...previousOutcome,
        ...modelUtilities.diseaseToOutcome(disease)
      };
      writeOutcome(outcome);
    },
    function(err) {
      console.log("Model can not be executed: ", err)
    }
  );
};
//
exports.dirs = { dataDir, statusIconsDir };
exports.getRandomInt = getRandomInt;

const writeOutcome = (outcome) => {
  fs.writeFileSync(
    `${dataDir}/${outcome.dir}/result.json`,
    JSON.stringify(outcome, null, 2)
  );  
}

exports.processFile = async (previousOutome, onProcessed) => {
  //change this value to 0, for no processing delay;
  const simulatedDelayInMseconds = 0;

  setTimeout(() => {
    //image file to be processed
    const imageData = fs.readFileSync(getImageUrl(previousOutome));

    // *** uncomment this for the real processing ***
    if (!modelLoaded) {
      console.log("Model needs to load")
    }
    else if (previousOutome.reqCount == 0) {
      setOutcome(previousOutome, imageData);
    } else {
      console.log("We already set an outcome, wait a bit for answer...")
      const outcome = {
        ...previousOutome,
        reqCount: previousOutome.reqCount + 1,
      }
      writeOutcome(outcome)
    }
    console.log("Processeed finished. Result will be set soon.");

    onProcessed();
  }, simulatedDelayInMseconds);
};
