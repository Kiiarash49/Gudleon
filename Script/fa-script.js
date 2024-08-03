document.getElementById("about").addEventListener("click", function () {
    Swal.fire({
        position: "top-end",
        title: "در حال حاظر این صفحه در دسترس نیست",
        showConfirmButton: false,
        timer: 3000,
        showClass: {
            popup: `
              animate__animated
              animate__fadeInRight
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
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg')"
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
                  animate__fadeInRight
                  animate__faster
                `
              },
          });
    }
})