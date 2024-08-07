document.getElementById("about").addEventListener("click", function () {
    Swal.fire({
        position: "top",
        title: "در حال حاظر این صفحه در دسترس نیست",
        showConfirmButton: false,
        timer: 3000,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
    });
})

document.getElementById("telegram").addEventListener("click", function () {
    Swal.fire({
        position: "top",
        title: "در حال حاظر این صفحه در دسترس نیست",
        showConfirmButton: false,
        timer: 3000,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
    });
})

document.getElementById("github").addEventListener("click", function () {
    Swal.fire({
        position: "top",
        title: "در حال حاظر این صفحه در دسترس نیست",
        showConfirmButton: false,
        timer: 3000,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `
        },
    });
})

document.getElementById("codes").addEventListener("click", function () {
    let codeinput = prompt("Enter command")
    let lowercase = codeinput.toLowerCase();
    let code = lowercase

    if (code === "reboot") {
        location.reload()
    }

    if (code === "luna") {
        document.body.style.backgroundColor = "black"
        document.body.style.backgroundImage = "url('Images/ihavenoideawheresheis.jpg')"
    }

    if (code === "hello world") {
        Swal.fire({
            position: "top",
            title: "New programmer?",
            showConfirmButton: false,
            timer: 3000,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `
            },
        });
    }

    if (code === "rewind") {
        window.open("https://images.app.goo.gl/FWDk8Q7rn862f4X27")
    }

    if (code === "my name is john marston") {
        Swal.fire({
            position: "top",
            title: "tbh you'r not!",
            showConfirmButton: false,
            timer: 3000,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `
            },
        });
    }

    if (code === "7749") {
        Swal.fire({
            position: "top",
            title: "Hmmm, you'r not allowed to do this action. sorry dude!",
            showConfirmButton: false,
            timer: 3000,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `
            },
        });
    }

})