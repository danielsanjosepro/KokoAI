const fs = require("fs");

exports.getLabels = (modelName) => {
  return fs.readFileSync('model/'+modelName+'/labels.txt').toString().split('\n');
}


exports.diseaseToIcon = (diseaseName) => {
  // TODO
  if ( diseaseName === "Fito" || diseaseName === "Monilia") {
    return "cut.png"
  } else if ( diseaseName === "CSSV" ) {
    return "telephone.svg"
  } else {
    return "healthyTree.svg"
  }
}

exports.diseaseToDescription = (diseaseName) => {
  if ( diseaseName === "Fito" || diseaseName === "Monilia") {
    return "Black Pod infection: contaminated pods should be removed and apply potassium bicarbonate (better option than copper fungicide) \n \n  Black pod ɔyare mmoawa. Yi nnuadewa a efĩ wom no na fa Potassium bicarbonate gu so";
  } else if (diseaseName === "CSSV") {
    return "Cocoa Swollen Shoot Virus: Call the autorities +233 30 266 2961 (Ministry of Food&Agriculture). Devastating virus, all trees in a 5 meters diameter should be treated. \n \n Frɛ atumfoɔ no +233 30 266 2961. Virus a ɛsɛe ade.";
  } else {
    return "These pods seem to be in perfect form. \n \n Pods yɛ papa"
  }
}

exports.diseaseToOutcomeStatus = (diseaseName) => {
  if ( diseaseName === "Fito" || diseaseName === "Monilia") {
    return "alarm";
  } else if (diseaseName === "CSSV") {
    return "fatal";
  } else {
    return "good"
  }
}
  
exports.diseaseToOutcome = (diseaseName) => {
  return {
    outcome: this.diseaseToOutcomeStatus(diseaseName),
    statusIcon: this.diseaseToIcon(diseaseName),
    description: this.diseaseToDescription(diseaseName),
  }
}

exports.parseModelResult = (modelResultUnparsed) => {
  return {
    boundingBoxes: modelResultUnparsed[0],
    probabilities: modelResultUnparsed[1],
    classIds: modelResultUnparsed[2],
    numDetectedObjects: modelResultUnparsed[2].length,
  };
}
