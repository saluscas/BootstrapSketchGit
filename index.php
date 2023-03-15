<?php
session_start();

include('assets/dist/php/connection.php');

if (isset($_POST['email']) || isset($_POST['password'])) {

    if (strlen($_POST['email']) == 0) {
        echo "Enter your e-mail.";
    } else if (strlen($_POST['password']) == 0) {
        echo "Enter your password.";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $password = $mysqli->real_escape_string($_POST['password']);

        $sql_code = "SELECT * FROM users, adm WHERE email = '$email' AND password = '$password'";
        $sql_query = $mysqli->query($sql_code) or die("SQL code execution failed: " . $mysqli->error);

        $amount = $sql_query->num_rows;

        if ($amount == 1) {

            $user = $sql_query->fetch_assoc();

            if (!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            header("Location: assets/pages/adm/insight.php");
        } else {
            echo "Failed to login! Incorrect email or password.";
        }
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Insight I</title>

    <!-- Bootstrap CSS NPM -->
    <link rel="stylesheet" href="assets/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/dist/sass/style.css">

    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="assets/dist/css/sidebar.css">

    <!-- Bootstrap-icon CSS -->
    <link rel="stylesheet" href="assets/node_modules/bootstrap-icons/font/bootstrap-icons.css">
</head>

<body>

    <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item" data-bs-interval="100000000000000">
            <iframe src="assets/pages/math.html"></iframe>
        </div>
        <div class="carousel-item active" data-bs-interval="100000000000000"> -->
    <div class="wrapper">
        <!-- Sidebar Holder -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>MY SKETCH DASHBOARD</h3>
            </div>

            <ul class="list-unstyled components">
                <p>MY INITIAL SKETCH:</p>
                <li class="active">
                    <a href="index.php">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">

                </li>
            </ul>
            <li>
                <a href="assets/pages/about.html">About me</a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="assets/pages/statistic.html">Statistic</a>
                    </li>
                    <li>
                        <a href="assets/pages/dataScience.html">Data Science</a>
                    </li>
                    <li>
                        <a href="assets/pages/python.html">Python</a>
                    </li>
                    <li>
                        <a href="assets/pages/r.html">R</a>
                    </li>
                    <li>
                        <a href="assets/pages/powerBi">Power BI</a>
                    </li>
                    <li>
                        <a href="assets/pages/SQL">SQL</a>
                    </li>
                    <li>
                        <a href="assets/pages/math">Math</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="assets/pages/portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="assets/pages/contact.html">Contact</a>
            </li>
            <div class="dropdown">
                <li class="">
                   <a href="#" data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle">
                    <i class="bi bi-person-circle"></i> 
                        User
                    </a>
                    <ul class="dropdown-menu text-small shadow" style="  background-color:#fafafa">
                        <li type="button" data-toggle="modal" data-target="#exampleModalLong">
                            <a class="dropdown-item">
                                <i class="bi bi-box-arrow-in-right"></i>
                                Sign-in
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li type="button">
                            <a class="dropdown-item" href="assets/pages/signUp.php">
                                <i class="bi bi-person"></i>
                                Sign-up
                            </a>
                        </li>
                    </ul>
                </li>
            </div>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://twitter.com/saa_luscas" class="article">Go to my twitter</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/saa.luscas/" class="download">Go to my instagram</a>
                </li>
            </ul>
        </nav>

        <!-- Page Content Holder -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <button type="button" id="barCollapse" class="navbar-btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto col-md-12 justify-content-end list-unstyled d-flex">
                            <li class="nav-item active">
                                <a class="nav-link" href="assets/pages/statistic.html">Statistic</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/dataScience.html">Data Science</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/python.html">Python</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/r.html">R</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/powerBi.html">Power BI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/SQL.html">SQL</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="assets/pages/math.html">Math</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="jumbotron">
                <h1 class="display-4">Hello, World!</h1>
                <p class="lead">Building this site to try to build sketches of various types of dashboards on the web
                    somehow and make their tools available as an easily accessible service.</p>
                <!--
                            <div class="container-fluid">
                                <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                                    <div class="col-md-4 d-flex align-items-center">
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                            <span class="bi bi-arrow-left-circle"></span>
                                        </button>
                                    </div>
                              
                                  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        <span class="bi bi-arrow-right-circle"></span>
                                    </button>
                                </div>
                            </div>
                            -->
            </div>

            <hr class="my-4">

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                Sign-in
            </button>
            <a href="assets/pages/signUp.php">
                <button type="button" class="btn btn-primary">
                    Sign-up
                </button>
            </a>
            <hr class="my-4">
            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            <div class="line"></div>
            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            <div class="line"></div>
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>

            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="#" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <span class="bi bi-bootstrap text-muted""> © 2022, Lucas Sá.</span>
                            </a>
                          </div>
                      
                          <ul class=" nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li class="ms-3"><a class="text-muted" href="https://twitter.com/saa_luscas"><i class="bi bi-twitter" width="24" height="24"></i></a></li>
                                <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/saa.luscas"><i class="bi bi-instagram" width="24" height="24"></i></a></li>
                                <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/lucassa.luca"><i class="bi bi-facebook" width="24" height="24"></use></i></a>
                                </li>
                </footer>
            </div>
        </div>
    </div>
    <!-- </div>
        <div class="carousel-item" data-bs-interval="100000000000000">
            <iframe src="assets/pages/statistic.html"></iframe>
        </div>
    </div>
</div> -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Sign-in</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span class="bi bi-x-lg" aria-hidden="true"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="" method="POST">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small> -->
                        </div>
                        <hr class="my-1" style="border: transparent;">
                        <label for="inputPassword5">Password</label>
                        <input type="password" name="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter password">
                        <!-- <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not
                            contain spaces, special characters, or emoji.
                        </small> -->
                        <hr class="my-1" style="border: transparent;">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <hr class="my-1" style="border: transparent;">
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</body>

<!-- jQuery NPM - Slim version -->
<script src="assets/node_modules/jquery/dist/jquery.slim.min.js"></script>
<!-- Popper.JS -->
<script src="assets/node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="assets/node_modules/bootstrap/dist/js/bootstrap-v-4-1-0.min.js"></script>
<script src="assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

<script type="text/javascript">
    $(document).ready(function() {
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
    $(document).ready(function() {
        $('#barCollapse').on('click', function() {
            $(this).toggleClass('active');
        });
    });
</script>

</html>