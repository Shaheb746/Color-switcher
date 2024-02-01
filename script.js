let buttons = document.querySelectorAll('.btn');
let body = document.querySelector('.screen');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'magenta':
                body.style.backgroundColor = 'magenta'
                break;
            case 'green':
                body.style.backgroundColor = 'green'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'red':
                body.style.backgroundColor = 'red'
                break;
            case 'indigo':
                body.style.backgroundColor = 'indigo'
                break;
            case 'pink':
                body.style.backgroundColor = 'pink'
                break;

            default:
                alert('invlid choise')
                break;
        }
    })
});