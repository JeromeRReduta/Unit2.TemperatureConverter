const veryColdMessage = "WINTER HAS FALLEN";
const coldMessage = "It's pretty cold!";
const warmMessage = "It's warm!";
const hotMessage = "It's hot!";
const veryHotMessage =
  "Patrolling the Mojave almost makes you wish for a nuclear winter";
const NaNMessage =
  "what have you done. WHAT HAVE YOU DONE.\n(You didn't input a number!)";
/**
 *
 * @param {number} degreesFahrenheit temp in fahrenheit
 * @returns {number} temp in celsius
 */
function convertToCelusius(degreesFahrenheit) {
  return ((degreesFahrenheit - 32) * 5) / 9;
}

/**
 *
 * @param {number} degreesFahrenheit temp in fahrenheit
 * @example describeTemperature(33) -> "It's cold!"
 * @returns {string} a message dependent on the temperature
 */
function describeTemperature(degreesFahrenheit) {
  let message;
  const degreesCelsius = convertToCelusius(degreesFahrenheit);
  if (isNaN(degreesCelsius)) {
    return NaNMessage;
  }
  if (degreesCelsius >= 40) {
    message = veryHotMessage;
  } else if (degreesCelsius > 30) {
    /* if we get to this conditional, we know degreesCelsius is also < 40 */ message =
      hotMessage;
    message = hotMessage;
  } else if (degreesCelsius > 20) {
    message = warmMessage;
  } else if (degreesCelsius > 0) {
    message = coldMessage;
  } else {
    message = veryColdMessage;
  }
  return `${message}\n(${degreesFahrenheit}°F is ${degreesCelsius}°C.)`;
}

function main() {
  degreesFahrenheit = parseFloat(prompt("Type any temp in fahrenheit"));
  message = describeTemperature(degreesFahrenheit);
  alert(message);
}

main();
