document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var data = document.getElementById('fname').value.trim();

    if (data !== '') {
        var paragraph = document.createElement('p');
        paragraph.classList.add('task-item'); 

        var circleIcon = document.createElement('i');
        circleIcon.classList.add('far', 'fa-circle', 'circle-icon'); 
        paragraph.appendChild(circleIcon);

        var textSpan = document.createElement('span');
        textSpan.textContent = '\u00A0\u00A0' + data + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
        paragraph.appendChild(textSpan);

        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-times', 'delete-icon');
        paragraph.appendChild(deleteIcon);

        document.getElementById('tasks').appendChild(paragraph);

        document.getElementById('fname').value = '';
    }
});

document.getElementById('tasks').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-icon')) {
        event.target.parentNode.remove(); 
    }

    if (event.target && event.target.classList.contains('circle-icon')) {
        var paragraph = event.target.parentNode; 
        var textSpan = paragraph.querySelector('span');

        if (event.target.classList.contains('fa-circle')) {
            event.target.classList.remove('fa-circle');
            event.target.classList.add('fa-check-circle');
            textSpan.style.textDecoration = 'line-through'; 
        } else {
            event.target.classList.remove('fa-check-circle');
            event.target.classList.add('fa-circle');
            textSpan.style.textDecoration = 'none'; 
        }
    }
});
