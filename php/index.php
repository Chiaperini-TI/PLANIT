<?php 

include 'challer.php';

html_refresh('Testing', 'font1 bg-custom2', 1);
style("--bg-custom", "#000");
style("--custom10", "#000");
style("--bg-custom2", "#eeeeee");

nav_img("INDEX", 'bg-custom', 'https://cdn.evg.gov.br/cursos/244_EVG/banner.svg', 'w-5 h-5');

// login('index.php', 'bg-white', 'custom10', 'font1 white bg-custom pd-v-04 w-full-93 b-radius-02');

// btn_logout('index.php', 'First bro', 'Second bro, this is detalhiaded', 'bg-custom hover-bg-custom2 fade-03 mg-top-2');

// user_informations('Fuça Sordi', '24', 'Chiaerpini');

// content('flex ctr auto');
    div('flex m-inline auto ctr');
        card("index.php", "Comercial class[m-txt-font-5]", "", '<i class="bi bi-airplane"></i>','m-auto m-ctr m-w-75 bg-green');
    close_div();
// close_content();

?>

<?php

close_html();

?>