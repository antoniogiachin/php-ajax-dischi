<?php
    // include database
    include __DIR__. '/database.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dischi PHP</title>
</head>
<body>
    
    <!-- header -->
    <header>
        <img src="img/SpLogo.png" alt="h-logo">
    </header>

    <!-- main -->
    <main class="py-5">

        <div class="container">

            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2  ">

                <?php

                    foreach($database as $discs){
                        
                        echo "<div class='col'> ";

                            echo "<div class='ms_card mb-5 p-3' style=min-height:350px>";

                                echo "<img src='" . $discs['poster'] . "' alt='disc-img' class='img-fluid mb-4'>";

                                echo "<div class='d-flex flex-column text-center'> ";

                                    echo "<span class='text-white text-uppercase d-block mb-4'>" . $discs['title'] . "</span>";

                                    echo "<span class='text-secondary ms_span'>" . $discs['author'] . "</span>";

                                    echo "<span class='text-secondary ms_span'>" . $discs['year'] . "</span>";
                                    
                                echo "</div>";
                            echo "</div>";     

                        echo "</div>";

                    }

                ?>

                
            </div>


                

            </div>

        </div>
    </main>

<!-- bootstrap script -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>