<?php
    ini_set('display_errors', 1);
    error_reporting(-1);

    $name_user = $_POST['name'] ?? 0;
    $email_user = $_POST['email'] ?? 0;
    $tel_user = $_POST['tel'] ?? 0;

    $host = "localhost";
    $user = "root";
    $passwd = '';
    $db = "orionleads";

    $conn = new mysqli($host,$user,$passwd,$db);
    
    if ($conn ->connect_error){
        die ("erro na conexão " . $conn->connect_error);
        $conn->close();
    }
    $conn -> set_charset('utf8');

    $sql = "INSERT INTO leads VALUES (?,?,?,?)";

    $prepared = $conn->prepare($sql);
    $prepared -> bind_param("issi",$id,$name,$email,$tel);
    $id = "DEFAULT";
    $name = $name_user;
    $email = $email_user;
    $tel = $tel_user;
    $prepared->execute();

    $prepared-> close();
    $conn -> close();