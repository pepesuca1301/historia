$(document).ready(() => {
    function crear_comentario(nombre_usuario, correo_usuario, comentario_usuario) {
        let burbuja = document.createElement("li");
        burbuja.className = "burbuja";
        let contenedor_avatar = document.createElement("div");
        contenedor_avatar.className = "contenedor-avatar";
        let avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = "imagenes/avatar.jpg";
        let uname = document.createElement("span");
        uname.className = "uname";
        uname.innerText = nombre_usuario;
        let email = document.createElement("span");
        email.className = "email";
        email.innerText = correo_usuario;
        let comment = document.createElement("span");
        comment.className = "comment";
        comment.innerText = comentario_usuario;
        let fecha_publicacion = document.createElement("span");
        fecha_publicacion.className = "datetime";
        fecha_publicacion.innerText = new Date().toUTCString();
        burbuja.appendChild(contenedor_avatar);
        contenedor_avatar.appendChild(avatar);
        burbuja.appendChild(uname);
        burbuja.appendChild(email);
        burbuja.appendChild(comment);
        burbuja.appendChild(fecha_publicacion);
        return burbuja;
    }
    $("#formulario").submit(function(event) {
        event.preventDefault();
        const $this = $(this);
        let nombre_usuario = $this.children("#uname").val();
        let correo_usuario = $this.children("#email").val();
        let comentario_usuario = $this.children("#comment").val();
        let comentario = crear_comentario(nombre_usuario, correo_usuario, comentario_usuario);
        let lista_comentarios = $(".mostrar-comentarios #comentarios");
        lista_comentarios.append(comentario);
        lista_comentarios.children("h4").remove();
        let contador = $(".mostrar-comentarios #contador-comentarios");
        let nuevaCuenta = parseInt(contador.attr("data-count")) + 1;
        contador.attr("data-count", nuevaCuenta);
        contador.text("(" + nuevaCuenta + ")");


    });


});