<?php

    // server per chiamata API

    include __DIR__ . '/database.php';


    // // lo rendo comprensibile a JS
    header('Content-Type: application/json');

    echo json_encode($database);


?>