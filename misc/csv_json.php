<?php

    $file = fopen("/home/ojt/Downloads/quezon_city_00643c93-292b-fd4e-ccee-c9b8b93f062c_barangay.csv","r");
    print_r(fgetcsv($file));
    fclose($file);

    // if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    //     // $file="1_23.csv";
    //     $file = $_FILES['csv'];
    //     // die(print_r($file));
    //     if (is_uploaded_file($file)) {
    //         echo "Uploaded."; 
    //     // }
    //     } else { die("Nah"); }
    //     $csv = file_get_contents($file);
    //     // die(print_r($csv));
    //     $array = array_map("str_getcsv", explode("\n", $csv));
    //     $json = json_encode($array);
    //     print_r($json);
    // } else {
    //     require_once('csv_form.php');
    // }

?>