const container_img_img = document.querySelector(".container_img-img");

const cargarImagen = () => {
  let armadoHTML = "";

  Array.forEach((imagen) => (armadoHTML += retornoImagen(imagen)));
};
