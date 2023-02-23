(function () {
    document.querySelector('form').addEventListener('submit', (evt) => {
        // don't submit ever
        evt.preventDefault();

        console.log('Submitted ...');

        // access the output div
        let output = document.querySelector('.output');

        // access the form elements
        let txtInputValue = evt.target.elements['txt-input'].value;
        let passInputValue = evt.target.elements['pass-input'].value;
        let radioInputValue = evt.target.elements['radio-input'].value;
        // capture the checkbox list, not value
        let checkboxInputValue = evt.target.elements['checkbox-input'];
        let selectInputValue = evt.target.elements['select-input'].value;
        let textareaInputValue = evt.target.elements['textarea-input'].value;

        // display the values in the output
        output.innerHTML = `<p>Text: ${txtInputValue}</p>`;
        output.innerHTML += `<p>Password: ${passInputValue}</p>`;
        output.innerHTML += `<p>Radio: ${radioInputValue}</p>`;

        // would normally loop, but we don't know how to do that yet
        if (checkboxInputValue[0].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInputValue[0].value}</p>`;
        }
        if (checkboxInputValue[1].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInputValue[1].value}</p>`;
        }
        if (checkboxInputValue[2].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInputValue[2].value}</p>`;
        }

        output.innerHTML += `<p>Select: ${selectInputValue}</p>`;
        output.innerHTML += `<p>Texarea: ${textareaInputValue}</p>`;
    });
})();