
i=0
document.getElementById('header-title').addEventListener('click', (e) => {
    i++;
    if (i == 10) {
        var passwd = prompt('Password: ');
        if (passwd == 'kok') {
            localStorage.userIsAdmin = true;
            window.location.href = '/admin/'
        } else {
            alert('Wrong Password!');
            i = 0;
        }
    }
})