// document.getElementById("about").addEventListener("click", function () {
//     Swal.fire({
//         position: "top",
//         title: "در حال حاظر این صفحه در دسترس نیست",
//         showConfirmButton: false,
//         timer: 3000,
//         showClass: {
//             popup: `
//               animate__animated
//               animate__fadeInDown
//               animate__faster
//             `
//         },
//     });
// })

document.getElementById("about").addEventListener("click", function() {
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
    // Swal.fire({
    //     position: "top",
    //     title: "در حال حاظر این صفحه در دسترس نیست",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     showClass: {
    //         popup: `
    //           animate__animated
    //           animate__fadeInDown
    //           animate__faster
    //         `
    //     },
    // });
    window.open("https://t.me/+dt91SeNbyclhODFk")
})

document.getElementById("github").addEventListener("click", function () {
    window.open("https://github.com/Kiiarash49/Gudleon")
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
            title: "Hmmm, you'r not allowed to do this action. sorry buddy!",
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

    if (code === "what is 7749?") {
        Swal.fire({
            position: "top",
            title: "Well, it can be anything",
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

    if (code === "nzc0oq==") {
        $("#notification").text("Nzc0OQ==/Nzc0OQ==.txt")
        $("#notification").css("color", "white")
        $("#notification").css("fontFamily", "monospace")
        $("#notification").css("userSelect", "all")
    }

    if (code === "memory reboot") {
        window.open("https://youtu.be/wL8DVHuWI7Y?si=GxJ2LPsBmImsxzks")
    }

    if (code === "english or spanish" || code === "english or spanish?") {
        document.body.style.overflow = "hidden"
    }

    if (code === "go back in time") {
        Swal.fire({
            position: "top",
            title: "Oh! i think i broke the time machin. just let me fix that thing!",
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