function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function downloadCV() {
    const link = document.createElement('a');
    link.href = 'files/Wacera_CV.pdf';
    link.download = 'Wacera_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
  }
  
  function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  