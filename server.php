<?php

    // server per chiamata API

    include __DIR__ . '/database.php';

    // formatto in Json
    json_encode($database);

    // // lo rendo comprensibile a JS
    header('Content-Type: application/json');

    // echo json_encode($database);


?>