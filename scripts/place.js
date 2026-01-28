// Update footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation (Metric Formula)
function calculateWindChill(tempC, windKPH) {
  // Only calculate if conditions are met
  if (tempC > 10 || windKPH <= 4.8) {
    return "N/A";
  }
  
  const chill = 13.12 
    + 0.6215 * tempC 
    - 11.37 * Math.pow(windKPH, 0.16) 
    + 0.3965 * tempC * Math.pow(windKPH, 0.16);
    
  return chill.toFixed(1) + "°C";
}

// Static weather data (matches HTML)
const temperature = 8;   // °C
const windSpeed = 12;   // km/h

// Display wind chill
const windChillElement = document.getElementById("windChill");
if (windChillElement) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed);
}