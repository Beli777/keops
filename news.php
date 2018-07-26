<!DOCTYPE html>
<html>
<head>
<?php include 'includes/head.php' ?>
</head>
<body>
<div class="homepage news">
  <?php include 'includes/header.php' ?>
<div class="slider">
  <picture>
    <source srcset="img/vesti-mobile.jpg" media="(max-width: 1024px)">
    <img src="img/news.png"/>
  </picture>
  <div class="slider__holder">
    <h1>PRATITE Najnovije vesti</h1>
  </div>
  <div class="slider__icons">
    <a href="https://www.facebook.com/keopspalacinkarnica/?ref=br_rs" target="_blank"><i class="fab fa-facebook-square"></i></a>
    <a href="https://www.instagram.com/keops.rs/" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://goo.gl/maps/TrQNCpGbgRK2" target="_blank"><i class="fab fa-google-plus-g"></i></a>
    <a href="https://www.linkedin.com/company-beta/18156616/" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.youtube.com/channel/UCDnyazKhgFrQmXdyFEHB79g" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="https://www.tripadvisor.com/Restaurant_Review-g294472-d7780477-Reviews-Keops_Palacinkarnica-Belgrade.html" target="_blank"><i class="fab fa-tripadvisor"></i></a>
    <div class="follow">
      <img src="img/follow.png"/>
    </div>
  </div>
</div>
<?php include 'includes/blog.php' ?>
<?php include 'includes/location.php' ?>
<?php include 'includes/newsletter.php' ?>
<?php include 'includes/footer.php' ?>
</div>
</body>
<?php include 'includes/scripts.php' ?>
</html>
