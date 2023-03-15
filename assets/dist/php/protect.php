<?php

if(!isset($_SESSION)) {
    session_start();
}

if(!isset($_SESSION['id'])) {
    die("You can't access this page because you not log-on.<p><a href=\"../../index.php\">Entry</a></p>");
}
