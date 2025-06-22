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
  

  const PortfolioApp = {
    // Existing methods...
  
    showToast(id) {
      const toast = document.getElementById(id);
      if (toast) {
        toast.style.display = "block";
        setTimeout(() => {
          toast.style.display = "none";
        }, 4000);
      }
    }
  };
  
  // Listen to iframe load to detect submit
  document.getElementById('formResponse').addEventListener('load', function () {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    if (name === "" || email === "" || message === "") {
      PortfolioApp.showToast("toast-error");
    } else {
      // clear the form
      form.reset();
      PortfolioApp.showToast("toast");
    }
  });
  
  