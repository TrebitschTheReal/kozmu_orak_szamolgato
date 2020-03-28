// ######################## Defining consts ########################

const unitPriceGas = 120;
const unitPriceEl = 40;
const unitPriceWaterAndCan = 1200;

const marchElStatus = 986;
const marchGasStatus = 1127;
const marchWaterStatus = 208;

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

   inputMarchElState.val(marchElStatus);
   inputMarchElState.attr('disabled', true);

   inputMarchGasState.val(marchGasStatus);
   inputMarchGasState.attr('disabled', true);

   inputMarchWaterCanState.val(marchWaterStatus);
   inputMarchWaterCanState.attr('disabled', true);


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
});

// ######################## Functions ########################