function generateNumber() {

    const min = Math.ceil(document.querySelector(".first-number").value)
    const max = Math.floor(document.querySelector(".final-number").value)

    const result = Math.floor(Math.random () * (max - min + 1)) + min;

    alert(result)

}


