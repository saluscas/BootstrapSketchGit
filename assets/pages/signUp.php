<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Sign-up</title>

    <!-- Bootstrap CSS NPM -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/sass/style.css">

    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="../dist/css/sidebar.css">

    <!-- Bootstrap-icon CSS -->
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
</head>

<body>

    <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" data-bs-interval="100000000000000">
                <iframe src="dataScience.html"></iframe>
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
                <li class="">
                    <a href="../../index.php">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                </li>
            </ul>
            </li>
            <li class="">
                <a href="about.html">About me</a>
            </li>
            <li class="">
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
            </li>
            <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="statistic.html">Statistic</a>
                </li>
                <li>
                    <a href="dataScience.html">Data Science</a>
                </li>
                <li>
                    <a href="python.html">Python</a>
                </li>
                <li>
                    <a href="r.html">R</a>
                </li>
                <li>
                    <a href="powerBi">Power BI</a>
                </li>
                <li>
                    <a href="powerBi">SQL</a>
                </li>
                <li>
                    <a href="math">Math</a>
                </li>
            </ul>
            </li>
            <li>
                <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="contact.html">Contact</a>
            </li>
            <div class="dropdown">
                <li class="">
                    <a href="#" data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle">
                        <i class=""><img src="../dist/misc/img/avatar.jpeg" alt="mdo" width="17.6" height="17.6" class="rounded-circle">
                        </i>
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
                            <a class="dropdown-item" href="signUp.php">
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
                                <a class="nav-link" href="statistic.html">Statistic</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="dataScience.html">Data Science</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="python.html">Python</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="r.html">R</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="powerBi.html">Power BI</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="sql.html">SQL</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="math.html">Math</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="jumbotron">
                <h1 class="display-4">Sign-up</h1>
            </div>
            <?php
            if (isset($_SESSION['status'])) {
                echo "<h4>" . $_SESSION['status'] . "</h4>";
                unset($_SESSION['status']);
            }
            ?>
            <hr class="my-4">

            <form action="../dist/php/insert.php" method="POST">
                <!-- area de campos do form -->
                <div class="row">
                    <div class="form-group col-md-3">
                        <label for="campo2">Data</label>
                        <input type="text" name="username" class="form-control" id="campo1">
                    </div>
                    <div class="form-group col-md-2 my-1">
                        <label for="campo1">Hormônio</label>
                        <select name="Hormonios" class="form-control" id="sel1">
                            <option>Select...</option>
                            <option>Dopamina</option>
                            <option>Serotonina</option>
                            <option>Ocitocina</option>
                            <option>Endorfina</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="campo2">Data</label>
                        <input type="text" name="username" class="form-control" id="campo1">
                    </div>
                    <div class="form-group col-md-3">
                        <label for="campo2">Mês</label>
                        <input type="text" name="username" class="form-control" id="campo1">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-3">
                        <label for="campo2">Ano</label>
                        <input type="text" name="username" class="form-control" id="campo1">
                    </div>
                    <div class="form-group col-md-3 my-1">
                        <label for="campo2">Produto</label>
                        <input type="text" class="form-control" id="campo3">
                    </div>
                </div>

                <hr class="my-4">

                <div id="actions" class="row">
                    <div class="col-md-10">
                        <button type="submit" name="insert_data" class="btn btn-primary">Send</button>
                    </div>
            </form>

        </div>

        <div class=" container">
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
                            </ul>
            </footer>
        </div>
    </div>
    </div>
    <!-- </div>
            <div class="carousel-item" data-bs-interval="100000000000000">
                <iframe src="r.html"></iframe>
            </div>
        </div>
    </div> -->
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
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small> -->
                        </div>
                        <hr class="my-1" style="border: transparent;">
                        <label for="inputPassword5">Password</label>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Enter password">
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

<!-- jQuery CDN - Slim version -->
<script src="../node_modules/jquery/dist/jquery.slim.min.js"></script>
<!-- Popper.JS -->
<script src="../node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="../node_modules/bootstrap/dist/js/bootstrap-v-4-1-0.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

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