console.log("Hello")
firebase.firestore().collection("pictures").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        document.getElementById("container").innerHTML += `
        <div> 
        <h3>${doc.data().name}</h3>
        <img src="${doc.data().img_source}" alt="">
        <hr>
        <br>
      </div>`

    });
});