document.addEventListener('DOMContentLoaded', function() {

    // Get references to the form and results div
    const form = document.getElementById('inputForm');
    const resultsDiv = document.getElementById('results');

     // Listen for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

         // Retrieve values from form fields
        const field1Value = document.getElementById('field1').value;
        const field2Value = document.getElementById('field2').value;
        const field3Value = document.getElementById('field3').value;

         // Create new paragraph elements

        const paragraph1 = document.createElement('p');
        const paragraph2 = document.createElement('p');
        const paragraph3 = document.createElement('p');
        paragraph1.textContent = `${field1Value}`
        paragraph2.textContent =`${field2Value}`
        paragraph3.textContent = `${field3Value}`

         // Generate random background colors for paragraphs
         // Random color for each paragraph
        const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        paragraph1.style.backgroundColor = randomColor1;
        
        const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        paragraph2.style.backgroundColor = randomColor2;
        
        const randomColor3 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        paragraph3.style.backgroundColor = randomColor3;


 // Append paragraphs to results div
        resultsDiv.appendChild(paragraph1);
        resultsDiv.appendChild(paragraph2);
        resultsDiv.appendChild(paragraph3);

        // Clear form fields
        form.reset();
    });
});
