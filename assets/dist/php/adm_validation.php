<?php
include('connection.php');

if (isset($_POST['email']) || isset($_POST['password'])) {

    if (strlen($_POST['email']) == 0) {
        echo "Enter your e-mail.";
    } else if (strlen($_POST['password']) == 0) {
        echo "Enter your password.";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $password = $mysqli->real_escape_string($_POST['password']);

        $sql_code = "SELECT * FROM users WHERE adm_email = '$email' AND adm_password = '$password'";
        $sql_query = $mysqli->query($sql_code) or die("SQL code execution failed: " . $mysqli->error);

        $amount = $sql_query->num_rows;

        if ($amount == 1) {

            $user = $sql_query->fetch_assoc();

            if (!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            header("Location: ../../pages/adm/insight.php");
        } else {
            echo "Failed to login! Incorrect email or password.";
            header("Location: ../../../index.php");
            
        }
    }
}
