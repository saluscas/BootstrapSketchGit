<?php
session_start();
$con = mysqli_connect("localhost", "root", "", "database");

if (isset($_POST['insert_data'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (username,email,gender,password) VALUES ('$username','$email','$gender','$password')";
    $query_run = mysqli_query($con, $query);

    if ($query_run) {
        $_SESSION['status'] = "Inserted Successfully";
        header("Location: ../../pages/signup.html");
    } else {
        $_SESSION['status'] = "Data Not Inserted";
        header("Location: ../../pages/signup.html");
    }
}
