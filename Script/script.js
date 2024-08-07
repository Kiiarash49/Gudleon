document.getElementById("about").addEventListener("click", function () {
    Swal.fire({
        position: "top-end",
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
        position: "top-end",
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
        position: "top-end",
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
            position: "top-end",
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
})