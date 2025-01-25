document.getElementById('report-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const fields = [
        { id: 'location', errorId: 'location-error', message: 'Location is required.' },
        { id: 'date', errorId: 'date-error', message: 'Date is required.' },
        { id: 'time', errorId: 'time-error', message: 'Time is required.' },
        { id: 'details', errorId: 'details-error', message: 'Details are required.' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        if (!input.value) {
            valid = false;
            error.textContent = field.message;
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    });

    if (valid) {
        alert('Form submitted successfully!');
        // Submit form data here
    }
});
