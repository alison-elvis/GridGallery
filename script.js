const images = document.querySelectorAll("img");
const dialog = document.querySelector("#dialog-imagem");
const imagemDialog = document.querySelector("#imagem-dialog");
const fecharDialog = document.querySelector("#fechar-dialog");

images.forEach(image => {
    image.addEventListener("click", () => {
        imagemDialog.src = image.src;
        dialog.showModal();
    });
});

fecharDialog.addEventListener("click", () => {
    dialog.close();
});
