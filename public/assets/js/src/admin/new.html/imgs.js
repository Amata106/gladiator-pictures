// const fileInput = document.getElementById('img-plus-file')


imgs_list = []

// fileInput.onclick = function (e) {
//     fileInput.value = null;
// };

function uploadImg(file) {
    var uuid = uuidv4()

    document.getElementById('imgs-container').innerHTML += `
    <div id="${uuid}">
        <i onclick="delImg('${uuid}')" class="fa-regular fa-trash-can"></i>
        <img src="../assets/img/loading.gif">
    </div>
    `
    var storage = firebase.storage().ref(`gladiator_pictures/${uuid}.jpg`);
    var upload = storage.put(file);

    upload.on("state_changed",
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(parseInt(percentage)+'%');
        },
        function error(e) {
            console.error(e);
            alert("error uploading file");
        },
        function complete() {
            storage.getDownloadURL().then((url) => {
                console.log(url);
                imgs_list.push(url);
                document.getElementById(uuid).childNodes[3].src = url
            })
        }
    );
}


function delImg(uuid) {
    document.getElementById(uuid).style.display = 'none';
}


function handleFileSelect(evt) {
    var files = evt.target.files; 
    for (var i = 0, f; f = files[i]; i++) {
        uploadImg(files[i])
    }
}

document.getElementById('img-plus-file').addEventListener('change', handleFileSelect, false);