<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Assignment 2 - CPIT 405 - Abdulaziz Hadhrawi - 1539728</title>

    <style>
        #nav li {
            color: black;
            list-style-type: none;

            overflow: hidden;
            float: left;
            background-color: lightblue;

            text-align: center;
            padding: 14px 16px;


        }

        body {
            margin-left: 200px;
            background-color: ghostwhite
        }

        select {

            margin-left: 40px;
        }

        #books ul {

            display: inline;

        }

        p {
            font-family: 'Times New Roman', Times, serif;
        }
    </style>
</head>

     

<body>

    <?php
       require_once('./db_connection.php');
       require ('./get_todos.php');
    ?>
    
    <ul id="nav">
        <li> Home</li>
        <li>My Books</li>
        <li>Browse</li>
        <br>
        <br>

    </ul>
    <br>
    <select name="sort" id="sort">
        <option value="">Sort By..</option>
        <option value="byTitle">Sort By Tilte</option>
        <option value="byAuthor">Sort By Author Name </option>
        <option value="byRate">Sort By Rate </option>
        <option value="byDate">Sort By Date </option>
    </select>
    <input type="text" name="search" id="searchBox" placeholder="Search">
    <div id="books">
        <ul id="listOfBooks">
            <?php get_all_todos() ?>
        </ul>
    </div>

<script type="text/javascript" src="script.js"></script>



</body>

</html>