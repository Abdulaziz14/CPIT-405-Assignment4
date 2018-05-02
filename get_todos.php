<?php 
function get_all_todos()
{
    $get_all_tasks_query = "SELECT image, title, author, date, rate FROM books;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    if ($response && $response->num_rows > 0) {
        echo '<ul id="my-list">';
        while ($row = $response->fetch_array()) {
            echo '<li> <img class = "img" src="' . $row["image"] . '">' . 
                    '<p class = "title">' . $row["title"] . '</p>' . 
                    '<p class = "author">' . $row["author"] . '</p>'. 
                    '<p>Years of publish: <span class = "date">' . $row["date"] . '</span></p>' . 
                    '<p>Rate: <span class = "rate">' . $row["rate"] . '</span></p>' . 
                '</li>';
        }
        echo '</ul>';
    } else {
        echo '<h2>Your ToDo list is empty!</h2>';
    }
}
?>