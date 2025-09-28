
        document.addEventListener('DOMContentLoaded', function() {
            const celsiusInput = document.getElementById('celsius');
            const fahrenheitInput = document.getElementById('fahrenheit');
            const swapBtn = document.getElementById('swapBtn');
            const resultDiv = document.getElementById('result');
            const formulaDiv = document.getElementById('formula');
            
            let isCtoF = true;
            
            // Function to convert Celsius to Fahrenheit
            function celsiusToFahrenheit(celsius) {
                return (celsius * 9/5) + 32;
            }
            
            // Function to convert Fahrenheit to Celsius
            function fahrenheitToCelsius(fahrenheit) {
                return (fahrenheit - 32) * 5/9;
            }
            
            // Function to update the result display
            function updateResult() {
                const celsiusValue = parseFloat(celsiusInput.value);
                const fahrenheitValue = parseFloat(fahrenheitInput.value);
                
                if (!isNaN(celsiusValue) && isCtoF) {
                    const converted = celsiusToFahrenheit(celsiusValue);
                    fahrenheitInput.value = converted.toFixed(2);
                    resultDiv.textContent = `${celsiusValue}°C = ${converted.toFixed(2)}°F`;
                    highlightResult();
                } else if (!isNaN(fahrenheitValue) && !isCtoF) {
                    const converted = fahrenheitToCelsius(fahrenheitValue);
                    celsiusInput.value = converted.toFixed(2);
                    resultDiv.textContent = `${fahrenheitValue}°F = ${converted.toFixed(2)}°C`;
                    highlightResult();
                } else {
                    resultDiv.textContent = "Enter a temperature to convert";
                    resultDiv.classList.remove('highlight');
                }
            }
            
            // Function to highlight the result
            function highlightResult() {
                resultDiv.classList.add('highlight');
                setTimeout(() => {
                    resultDiv.classList.remove('highlight');
                }, 500);
            }
            
            // Function to swap conversion direction
            function swapConversion() {
                isCtoF = !isCtoF;
                
                if (isCtoF) {
                    formulaDiv.textContent = "Formula: °F = (°C × 9/5) + 32";
                    celsiusInput.placeholder = "Enter temperature in °C";
                    fahrenheitInput.placeholder = "Converted to °F";
                } else {
                    formulaDiv.textContent = "Formula: °C = (°F - 32) × 5/9";
                    fahrenheitInput.placeholder = "Enter temperature in °F";
                    celsiusInput.placeholder = "Converted to °C";
                }
                
                // Clear inputs and result
                celsiusInput.value = '';
                fahrenheitInput.value = '';
                resultDiv.textContent = "Enter a temperature to convert";
                resultDiv.classList.remove('highlight');
                
                // Focus on the appropriate input
                if (isCtoF) {
                    celsiusInput.focus();
                } else {
                    fahrenheitInput.focus();
                }
            }
            
            // Event listeners
            celsiusInput.addEventListener('input', function() {
                if (isCtoF) {
                    updateResult();
                }
            });
            
            fahrenheitInput.addEventListener('input', function() {
                if (!isCtoF) {
                    updateResult();
                }
            });
            
            swapBtn.addEventListener('click', swapConversion);
            
            // Initialize with Celsius to Fahrenheit conversion
            celsiusInput.focus();
        });
    