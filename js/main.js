const toggleModal1 = ((e) => {
    const modal = document.getElementById("modalContainer--Voice");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    } 
  })
  const toggleModal2 = ((e) => {
    const modal = document.getElementById("modalContainer--Desarrollo");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    } 
  })
  const toggleModal3 = ((e) => {
    const modal = document.getElementById("modalContainer--Articulos");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    } 
  })
  const toggleModal4 = ((e) => {
    const modal = document.getElementById("modalContainer--Customer");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    } 
  })
