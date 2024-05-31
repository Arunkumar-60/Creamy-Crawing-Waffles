var footerHTML = `
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  <div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
  </div>
  <div>
    <a href="#" class="me-4 text-reset">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#" class="me-4 text-reset">
      <i class="fab fa-google"></i>
    </a>
    <a href="https://www.instagram.com/creamycravingwaffle?igsh=MWVwdndyNTZ3dHp3ZA==				" class="me-4 text-reset">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/Arunkumar-60" class="me-4 text-reset">
      <i class="fab fa-github"></i>
    </a>
  </div>
</section>
<section class="">
  <div class="container text-center text-md-start mt-5">
    <div class="row mt-3">
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h5 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-solid fa-utensils " style="margin: 1rem;"></i>Creamy craving waffle
        </h5>
        <h6>
          We specialize in freshly made waffles adorned with a wide range of toppings, perfect for any occasion. Indulge in a heavenly treat on the move!
        </h6>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h5 class="text-uppercase fw-bold mb-4">Contact</h5>
        <h6><i class="fas fa-home me-3"></i>Beside Reliance SMart, Korremula Rd, Chowdhariguda, Hyderabad, Telangana 500088</h6>
        <h6>
          <i class="fas fa-envelope me-3"></i>
          susmithautkarsha@gmail.com
        </h6>
        <h6><i class="fas fa-phone me-3"></i> + 91 9491296685</h6>
        <h6><i class="fas fa-print me-3"></i> + 91 8698644007</h6>
      </div>
    </div>
  </div>
</section>
<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
  Copyrights &copy; 2024
  <a style="text-decoration: none;" class="text-reset fw-bold" href="/">creamycravingwaffle.com</a><br> - all rights preserved
</div>
`;

var footerContainers = document.getElementsByClassName("footerContainer");

for (var i = 0; i < footerContainers.length; i++) {
  footerContainers[i].innerHTML += footerHTML;
}
