// ######################## Defining consts ########################

const unitPriceGas = 120;
const unitPriceEl = 40;
const unitPriceWaterAndCan = 1200;

const displayGasPrice = $('#priceGas');
const displayElPrice = $('#priceEl');
const displayWaterCanPrice = $('#priceWaterCan');

const calculateButton = $('#btnCalculate');
const resetButton = $('#btnReset');

const inputActualElState = $('#actualElState');
const inputActualGasState = $('#actualGasState');
const inputActualWaterCanState = $('#actualWaterCanState');

const inputMarchElState = $('#marchElState');
const inputMarchGasState = $('#marchGasState');
const inputMarchWaterCanState = $('#marchWaterCanState');

const elResultModal = $('#elResult');
const gasResultModal = $('#gasResult');
const waterCanResultModal = $('#waterCanresult');
const sumResultModal = $('#sum');

// ######################## Onready ########################


$(function () {
   displayElPrice.text(unitPriceEl);
   displayGasPrice.text(unitPriceGas);
   displayWaterCanPrice.text(unitPriceWaterAndCan);
});

// ######################## Event Listeners ########################

calculateButton.click(function () {
   let elResult = (inputActualElState.val() - inputMarchElState.val()) * unitPriceEl;
   let gasResult = (inputActualGasState.val() - inputMarchGasState.val()) * unitPriceGas;
   let waterCanResult = (inputActualWaterCanState.val() - inputMarchWaterCanState.val()) * unitPriceWaterAndCan;
   let sum = elResult + gasResult + waterCanResult;

   elResultModal.text('Elmű: ' + elResult + ' Ft');
   gasResultModal.text('Gáz: ' + gasResult + ' Ft');
   waterCanResultModal.text('Víz + csatorna: ' + waterCanResult + ' Ft');
   sumResultModal.text('Összesen: ' + sum + ' Ft')
});

resetButton.click(function () {
   inputActualElState.val('');
   inputActualGasState.val('');
   inputActualWaterCanState.val('');
   inputMarchElState.val('');
   inputMarchGasState.val('');
   inputMarchWaterCanState.val('');
});

// ######################## Functions ########################