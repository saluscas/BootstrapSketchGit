<?php

include('../../dist/php/protect.php');
include('../../dist/php/connection.php');

$consult = "SELECT * FROM users";
$con = $mysqli->query($consult);

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Table</title>

    <!-- Bootstrap CSS NPM -->
    <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../dist/sass/style.css">

    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="../../dist/css/sidebar-2.css">

    <!-- Bootstrap-icon CSS -->
    <link rel="stylesheet" href="../../node_modules/bootstrap-icons/font/bootstrap-icons.css">
</head>

<body>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="100000000000000">
                <div class="wrapper">
                    <!-- Sidebar  -->
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>MY SKETCH DASHBOARD</h3>
                            <strong>MS</strong>
                        </div>

                        <ul class="list-unstyled components">
                            <li class="active">
                                <a href="#tableSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle">
                                    <i class="bi bi-table"></i>
                                    Tables
                                </a>
                                <ul class="collapse list-unstyled" id="tableSubmenu">
                                    <li>
                                        <a href="table.php">Users Table</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="insight.php"
                                    class="">
                                    <i class="bi bi-house"></i>
                                    Home
                                </a>
                            </li>
                            
                            <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle">
                                    <i class="bi bi-journals"></i>
                                    Dash's
                                </a>
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li class="font-reduce" >
                                        <a href="finacial.php">
                                            <i class="bi bi-coin"></i>
                                            Financial
                                        </a>
                                    </li>
                                    <li class="font-reduce" >
                                        <a href="professional.php">
                                            <i class="bi bi-briefcase"></i>
                                            Professional
                                        </a>
                                    </li>
                                    <li class="font-reduce" >
                                        <a href="bodyAndMind.php">
                                            <i class="bi bi-lightning-charge"></i>
                                            Body and Mind
                                        </a>
                                    </li>
                                    <li class="font-reduce" >
                                        <a href="emotional.php">
                                            <i class="bi bi-heart-pulse"></i>
                                            Emotional
                                        </a>
                                    </li>
                                    <li class="font-reduce" >
                                        <a href="relationship.php">
                                            <i class="bi bi-rocket-takeoff"></i>
                                            Relationship
                                        </a>
                                    </li>
                                </ul>
                            </li> 
                                <!-- <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                    class="dropdown-toggle">
                                    <i class="bi bi-journals"></i>
                                    Pages
                                </a>
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
                                        <a href="powerBi.html">Power BI</a>
                                    </li>
                                    <li>
                                        <a href="SQL.html">SQL</a>
                                    </li>
                                    <li>
                                        <a href="math.html">Math</a>
                                    </li>
                                </ul> -->
                            </li>
                            <!-- <li>
                                <a href="portfolio.html">
                                    <i class="bi bi-images"></i>
                                    Portfolio
                                </a>
                            </li> -->
                            <!-- <li>
                                <a href="#">
                                    <i class="bi bi-question"></i>
                                    FAQ
                                </a>
                            </li> -->
                            <!-- <li>
                                <a href="#">
                                    <i class="bi bi-send"></i>
                                    Contact
                                </a>
                            </li> -->
                            <div class="dropdown">
                                <li class="">
                                    <a href="#" data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle">
                                        <i class=""><img src="../../dist/misc/img/Eu.jpeg" alt="mdo" width="17.6" height="17.6"
                                            class="rounded-circle">
                                        </i>
                                        <?php 
                                        if(strlen($_SESSION['username']) > 8){
                                            echo substr($_SESSION['username'], 0, 6) . "...";
                                        }
                                        // Senão exibi o texto completo
                                        else{
                                            echo $_SESSION['username'];;
                                        }
                                        ?> 
                                    </a>
                                    
                                    <ul class="dropdown-menu text-small shadow" style="  background-color:#fafafa">
                                    <li><a class="dropdown-item justify" maxlength="4" href="#">
                                            <i class="bi bi-person"></i>
                                            <?php 
                                            if(strlen($_SESSION['username']) > 10){
                                                echo substr($_SESSION['username'], 0, 8) . "...";
                                            }
                                            // Senão exibi o texto completo
                                            else{
                                                echo $_SESSION['username'];;
                                            }
                                            ?> 
                                        </a></li>
                                        <li><a class="dropdown-item justify" href="#">
                                            <i class="bi bi-send"></i>
                                            Support
                                        </a></li>
                                        <li><a class="dropdown-item justify" href="#">
                                            <i class="bi bi-question"></i>
                                            FAQ
                                        </a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item justify" href="#">
                                            <i class="bi bi-gear"></i>
                                            Settings
                                        </a></li>
                                        <li type="button">
                                            <a class="dropdown-item" href="../../dist/php/logout.php">
                                                <i class="bi-box-arrow-in-left"></i>
                                                Sign-out
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                        <!--
                    <ul class="list-unstyled CTAs">
                        <li>
                            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                        </li>
                        <li>
                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                        </li>
                    </ul>
                    -->
                    </nav>

                    <!-- Page Content  -->
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
                                    <ul class="nav navbar-nav col-md-4 ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="statistic.html">Statistic</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="dataScience.html">Data Science</a>
                                        </li>
                                    </ul>
                                    <ul class="nav navbar-nav ml-auto col-md-8 justify-content-end list-unstyled d-flex">
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

                        <div class="table-responsive">
                            <caption>Users list:</caption>

                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while ($data = $con->fetch_array()) { ?>
                                        <tr>
                                            <th scope="row"><?php echo $data["id"]; ?></td>
                                            <td><?php echo $data["username"]; ?></td>
                                            <td><?php echo $data["gender"]; ?></td>
                                            <td><?php echo $data["email"]; ?></td>
                                            <td><?php echo $data["password"]; ?></td>
                                            <td class="table-secondary" style="text-align:center;">
                                                <a href="../../dist/php/edit.php?id=<?=$data["id"]?>">
                                                    <i class="bi bi-wrench"></i></a>
                                            </td>
                                            <td class="table-danger" style="text-align:center;">
                                                <a href="../../dist/php/dele.php?id=<?=$data["id"]?>">
                                                    <i class="bi bi-x-lg"></i></a>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>

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
                                            </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="100000000000000">
                <iframe src="faq.html"></iframe>
            </div>
        </div>
    </div>

</body>
<!-- jQuery CDN - Slim version -->
<script src="../../node_modules/jquery/dist/jquery.slim.min.js"></script>
<!-- Popper.JS -->
<script src="../../node_modules/@popperjs/core/dist/umd/popper.min.js"></script>
<!-- Bootstrap JS -->
<script src="../../node_modules/bootstrap/dist/js/bootstrap-v-4-1-0.min.js"></script>
<script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

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