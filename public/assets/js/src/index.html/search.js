document.getElementById('search').addEventListener('keydown', (e) => {
    query = e.target.value.toLowerCase().replace(' ', '')
    if (query.length >= 2) {
        let index = document.getElementById('glads').childNodes
        for (let i = 0; i < index.length; i++) {
            if (index[i].nodeName == 'DIV') {
                index[i].style.display = 'none';
                var name = index[i].getElementsByClassName('glad-name')[0].textContent.toLowerCase()
                if (query == name.substring(0, query.length)) {
                    index[i].style.display = 'block'
                }
            }
        }
    } else {
        let index = document.getElementById('glads').childNodes
        for (let i = 0; i < index.length; i++) {
            if (index[i].nodeName == 'DIV') {
                index[i].style.display = 'block';
            }
        }
    }
})