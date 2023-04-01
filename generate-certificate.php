<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $eventName = $_POST['eventName'];
  $eventDate = $_POST['eventDate'];

  // Generate certificate
  $text = "This certificate is awarded to $name for attending $eventName on $eventDate.";
  $image = imagecreatefromjpeg('template.jpg');
  $font = 'arial.ttf';
  $fontSize = 24;
  $fontColor = imagecolorallocate($image, 0, 0, 0);
  $x = 200;
  $y = 400;
  imagettftext($image, $fontSize, 0, $x, $y, $fontColor, $font, $text);
  header('Content-Type: image/jpeg');
  imagejpeg($image);
  imagedestroy($image);
}
?>
