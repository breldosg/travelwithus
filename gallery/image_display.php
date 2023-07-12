<?php
// Define the path to the image folder on your website
$imageFolder = '../pics/other/';

// Fetch the image file names in the folder
$imageFiles = glob($imageFolder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

// Send the image URLs as a JSON response
header('Content-Type: application/json');
echo json_encode($imageFiles);
?>
