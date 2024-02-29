/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputBox = document.getElementById('input');
const btn = document.getElementById('button');
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass');




 function meterToFeet(number) {
    let feet = number * 3.28084
   return parseFloat(feet.toFixed(3));
 }

 function feetToMeter(number) {
    let meter = number * 0.3048
   return parseFloat(meter.toFixed(3));
 }
 function literToGallon(number) {
    let gallon = number * 0.264172
   return parseFloat(gallon.toFixed(3));
 }
 function gallonToLitter(number) {
    let liter = number * 3.78541
   return parseFloat(liter.toFixed(3));
 }
 function kilogramToPound(number) {
    let pound = number * 2.20462
   return parseFloat(pound.toFixed(3));
 }
 function poundToKilogram(number) {
    let kilogram = number * 0.453592
   return parseFloat(kilogram.toFixed(3));
 }



 unitConversion = () => {
    let mAndF = '';
    let lAndG = '';
    let kAndP = '';


    mAndF  += ` <p>Length (Meter/Feet)</p>
     ${inputBox.value} meters = ${meterToFeet(inputBox.value)} feet | ${inputBox.value} feet = ${feetToMeter(input.value)} meters`;

     lAndG += ` <p>Volume (Liters/Gallons)
     </p>
     ${inputBox.value} liters = ${literToGallon(inputBox.value)} gallons | ${inputBox.value} gallons = ${gallonToLitter(input.value)} liters`;

     kAndP += ` <p>Mass (Kilograms/Pounds)</p>
     ${inputBox.value} kilos = ${kilogramToPound(inputBox.value)} pounds | ${inputBox.value} pounds = ${poundToKilogram(input.value)} kilos`;



    length.innerHTML = mAndF;
    volume.innerHTML = lAndG;
    mass.innerHTML = kAndP;
    
};
 

 btn.addEventListener('click', unitConversion)

        