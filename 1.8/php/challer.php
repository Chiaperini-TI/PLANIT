<?php 

function html($titulo = 'FORMS', $class = '') {
    echo '
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="https://planit-css.netlify.app/1.7/planit.css">
        <link rel="shortcut icon" href="../assets/img/icon.png" type="image/x-icon">
        <title>'.$titulo.'</title>
    </head><body class="'.$class.'"><script src="https://planit-css.netlify.app/1.7/JS/syder.js"></script>';
}

function html_refresh($titulo = 'FORMS', $class = '', $time = '5') {
    echo '
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="refresh" content="'.$time.';">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="https://planit-css.netlify.app/1.7/planit.css">
        <link rel="shortcut icon" href="../assets/img/icon.png" type="image/x-icon">
        <title>'.$titulo.'</title>
    </head><body class="'.$class.'"><script src="https://planit-css.netlify.app/1.7/JS/syder.js"></script>';
}

function close_html() {
    echo '</body></html>';
}

function style($var = '', $color = ''){
    echo '<style>
    :root{'.$var.': '.$color.';}
    </style>';
}

function nav($titulo = '', $class = 'bg-custom'){
    echo '<nav class="fixed top-0 w-full-100 h-4 m-h-20 t-h-8 flex ctr white txt-font-1-03 m-txt-font-4 t-txt-font-2-05 '.$class.'">'.$titulo.'</nav><div class="h-4 m-h-25"></div>';
}

function nav_img($titulo = '', $class = 'bg-custom', $caminho = '', $img_class = ''){
    echo '<nav class="fixed top-0 w-full-100 h-4 m-h-25 t-h-8 flex ctr white txt-font-1-03 m-txt-font-4 t-txt-font-2-05 '.$class.'">
    <img src="'.$caminho.'" class="flex ctr '.$img_class.'" alt="CAMINHO NÃO ENCONTRADO">'.$titulo.'</nav><div class="h-4 m-h-25"></div>';
}

function img($caminho = '', $img_class = ''){
    echo '<img src="'.$caminho.'" class="'.$img_class.'" alt="CAMINHO NÃO ENCONTRADO">';
}

function login($action = 'index.php', $bg = 'bg-custom', $color = 'custom', $button = 'bg-chiaperini chiaperini-amarelo hover-bg-chiaperini2', $custom = '#969696', $method = 'post'){
  echo'  <style>.form-login{ vertical-align: bottom; box-shadow: -5px 10px 10px 1px '.$custom.'; }</style>
    <form action="'.$action.'" method="'.$method.'" class=" t-b-radius-1 t-mg-top-10 t-w-full-40 auto ctr w-15 m-w-full-80 m-pd-bottom-12 m-pd-top-5 m-flex m-mg-top-16 h-auto txt-center n-w-18 '.$bg.' b-radius-07 n-b-radius-1 form-login mg-top-3 pd-top-2 pd-bottom-4 pd-h-3 m-b-radius-3">
        <div class="inline w-full-100 auto ctr">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="'.$color.' t-w-4-05 t-h-4-05 w-1-05 h-1-05 m-w-7 m-h-7" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
  
        <br>

        <label class="bold txt-font-1-05 '.$color.' m-txt-font-5 t-txt-font-3">Seja bem-vindo!</label><br>
        <label class="'.$color.' txt-font-09 n-txt-font-1 m-txt-font-4 t-txt-font-2-05">Faça seu login</label><br>

            <svg xmlns="http://www.w3.org/2000/svg" class="'.$color.' t-mg-v-2 t-w-10 t-h-10 w-6 h-6 m-w-20 m-h-20 mg-v-1 m-mg-v-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>

        <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute t-w-3 t-h-3 t-mg-left-1 '.$color.' w-1 m-w-6 center-v-screen mg-left-05 m-mg-left-3" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <input required type="text" name="user" id="user" class=" t-b-radius-06 t-mg-v-05 t-h-4-05 t-txt-font-2 b-radius-03 w-full-90 b-custom b-solid b-w-02 m-b-w-1 txt-center txt-font-07 n-txt-font-09 font1 pd-v-03 m-txt-font-4 m-pd-v-2 m-b-radius-2" style="--custom: #DDDDDD;" placeholder="USUÁRIO">
        </div>

        <div class="relative mg-top-05">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute t-w-3 t-h-3 t-mg-left-1 '.$color.' w-1 m-w-6 center-v-screen mg-left-05 m-mg-left-3 m-mg-top-1" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <input required type="password" name="password" class=" t-b-radius-06 t-mg-v-05 t-h-4-05 t-txt-font-2 b-radius-03 w-full-90 b-custom b-solid b-w-02 m-b-w-1 txt-center txt-font-07 n-txt-font-09 font1 pd-v-03 m-txt-font-4 m-pd-v-2 m-mg-top-2 m-b-radius-2" style="--custom: #DDDDDD;" placeholder="SENHA">
        </div>

        <button type="submit" class="'.$button.' t-b-radius-06 t-txt-font-2-05 no-border txt-font-08 mg-top-1 pointer m-h-12 m-txt-font-4 m-mg-top-6 m-b-radius-1">Entrar</button>
    </div>
    </form>';
}


function alert($title = '1° PARAMETER', $subtitle = '2° PARAMETER'){

    echo '<script>
    function ok(){
        replace(0, "alert", "top-1", "top--1");
        replace(0, "alert", "op-1", "op-0");
        replace(0, "bg_alert", "op-04", "op-0");
    }
    </script>';

    echo '<div id="bg_alert" class="max-z-index fade-04 bg-black op-0 w-100 h-vh-100 fixed top-0"></div>
    <div id="alert" class="t-pd-bottom-9 t-w-full-70 t-b-radius-1-02 m-w-full-70 m-h-auto m-b-radius-2 m-b-w-07 m-pd-top-5 m-pd-h-6 m-mg-top-7 m-pd-bottom-16 master-z-index fade-03 op-0 w-22 n-w-29 h-auto bg-custom mg-top-0 fixed center-h-screen top-1 b-radius-05 pd-left-1-03 pd-right-1-03 n-pd-left-1 n-pd-right-1 n-pd-h-2 pd-top-1 n-pd-top-1-05 font5 white b-custom2 b-solid b-w-01 pd-bottom-5" 
    style="--bg-custom: #292a2d; --bg-custom2: #80868b; --custom: #292a2d;--custom2: #525252; --custom3: #80868b; --custom4: #292a2d;">
    <p class="t-pd-left-3 t-pd-right-3 t-mg-top-3 t-txt-font-2 mg-top-03 mg-bottom-0 txt-font-08 n-txt-font-1-01 m-txt-font-4-05">'.$title.'</p><br>
    <p class="t-pd-left-3 t-pd-right-3 t-mg-top--2 t-txt-font-2 txt-font-07 n-txt-font-1 mg-top--1 mg-bottom-0 m-txt-font-4 m-mg-top--4">'.$subtitle.'</p>
        <div onclick="ok()" class="t-b-radius-08 t-pd-v-08 t-right-1 t-w-12 t-txt-font-2 m-b-radius-1-02 m-txt-font-4 m-w-22 m-b-w-08 m-pd-top-1-05 m-pd-bottom-1-08 b-radius-03 txt-font-07 n-txt-font-1 absolute w-auto h-auto right-1 bottom-1 pd-h-0 pd-v-04 n-pd-h-1 n-pd-v-05 bg-custom2 b-solid b-custom2 b-w-01 txt-center custom w-4-03 n-w-4 pointer">OK</div>
    </div>';

    echo '<script>
    replace(0, "alert", "op-0", "op-1");
    replace(0, "bg_alert", "op-0", "op-04");
    replace(0, "alert", "mg-top-0", "mg-top-1");

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            ok();
        }
      });
    </script>';
};

function alert_confirm($title = '1° PARAMETER', $subtitle = '2° PARAMETER', $link = ''){

    echo '<script>
    function ok(){
        replace(0, "alert", "top-1", "top--1");
        replace(0, "alert", "op-1", "op-0");
        replace(0, "bg_alert", "op-04", "op-0");
        ';
        if($link != ''){echo 'location.href = "'.$link.'";'; }
        echo'
    }
    </script>';

    echo '<script>
    function cancelar(){
        replace(0, "alert", "top-1", "top--1");
        replace(0, "alert", "op-1", "op-0");
        replace(0, "bg_alert", "op-04", "op-0");
    }
    </script>';

    echo '<div id="bg_alert" class="max-z-index fade-04 bg-black op-0 w-100 h-vh-100 fixed top-0"></div>
    <div id="alert" class="t-pd-bottom-9 t-w-full-70 t-b-radius-1-02 m-w-full-70 m-h-auto m-b-radius-2 m-b-w-07 m-pd-top-5 m-pd-h-6 m-mg-top-7 m-pd-bottom-16 master-z-index fade-03 op-0 w-22 n-w-29 h-auto bg-custom mg-top-0 fixed center-h-screen top-1 b-radius-05 pd-left-1-03 pd-right-1-03 n-pd-left-1 n-pd-right-1 n-pd-h-2 pd-top-1 n-pd-top-1-05 font5 white b-custom2 b-solid b-w-01 pd-bottom-5" 
    style="--bg-custom: #292a2d; --bg-custom2: #80868b; --custom: #292a2d;--custom2: #525252; --custom3: #80868b; --custom4: #292a2d;">
    <p class="t-pd-left-3 t-pd-right-3 t-mg-top-3 t-txt-font-2 mg-top-03 mg-bottom-0 txt-font-08 n-txt-font-1-01 m-txt-font-4-05">'.$title.'</p><br>
    <p class="t-pd-left-3 t-pd-right-3 t-mg-top--2 t-txt-font-2 txt-font-07 n-txt-font-1 mg-top--1 mg-bottom-0 m-txt-font-4 m-mg-top--4">'.$subtitle.'</p>
    <div onclick="cancelar()" class="t-b-radius-08 t-pd-v-08 t-right-1 t-w-12 t-txt-font-2 m-b-radius-1-02 m-txt-font-4 m-w-22 m-b-w-08 m-pd-top-1-05 m-pd-bottom-1-08 b-radius-03 txt-font-07 n-txt-font-1 absolute w-auto h-auto right-1 bottom-1 pd-h-0 pd-v-04 n-pd-h-1 n-pd-v-05 bg-custom b-solid b-custom2 b-w-01 txt-center custom3 w-4-03 n-w-4 pointer">Cancelar</div>
            <div onclick="ok()" class="t-b-radius-08 t-pd-v-08 t-right-16 t-w-12 t-txt-font-2 t-pd-left-1-02 m-b-radius-1-02 m-txt-font-4 m-w-22 m-right-26 m-b-w-08 m-pd-top-1-08 m-pd-bottom-1-08 b-radius-03 txt-font-07 n-txt-font-1 absolute w-auto h-auto right-7 bottom-1 pd-h-0 pd-v-04 n-pd-h-1 n-pd-v-05 bg-custom2 b-solid b-custom2 b-w-01 txt-center custom4 w-4-03 n-w-4 mg-right--1-02 n-mg-right-05 pointer">OK</div>
    </div>';

    echo '<script>
    replace(0, "alert", "op-0", "op-1");
    replace(0, "bg_alert", "op-0", "op-04");
    replace(0, "alert", "mg-top-0", "mg-top-1");

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            ok();
        }
      });
    </script>';
};

function card($link = '', $title = '2° PARAMETER, 4° = SVG', $value = '3° PARAMETER', $svg = '', $class = 'bg-royal hover-bg-plum white'){

    $titlearr = explode('[', $title);
    $title_class = isset($titlearr[1]) ? rtrim($titlearr[1], ']') : '';
    $title = preg_replace('/class\[.*?\]/', '', $title);

    $valuearr = explode('[', $value);
    $value_class = isset($valuearr[1]) ? rtrim($valuearr[1], ']') : '';
    $value = preg_replace('/class\[.*?\]/', '', $value);

    echo '
    <div onclick="window.location.href = '.$link.'" class="'.$class.' w-17 m-auto m-ctr m-w-75 bg-red h-8 m-h-35 pd-h-2 pd-v-1 b-radius-05 flex ctr txt-center">
        <div class="inline pointer">'.$svg.'<br>
          '; 
          if($title != ""){  echo '<label class="pointer '.$title_class.'">'.$title.'</label><br>'; }
          if($value != ""){  echo '<label class="pointer '.$value_class.'">'.$value.'</label><br>'; }
    echo '
        </div>
    </div>
    ';
}


function user_informations($user = '', $cod = '', $emp = ''){
    echo '<div class="fixed bottom-1 center-h-screen txt-center custom txt-font-1 m-w-full-100 m-txt-font-4 t-txt-font-2 n-txt-font-09" style="--custom: #737272;">
            <p class="mg-05">BEM-VINDO DE VOLTA, <b>'.$user.'</b></p>
            <p class="mg-05">CÓDIGO DE USUÁRIO: <b>'.$cod.'</b></p>
            <p class="mg-05">EMPRESA: <b>'.$emp.'</b></p>
          </div>';
}

function btn_logout($link = '', $title = '1° PARAMETER', $subtitle = '2° PARAMETER (3° PARAMETER = button class)',  $class = 'bg-chiaperini hover-bg-chiaperini2 '){

    echo '<script>

    function ok(){
        replace(0, "al", "top-1", "top-0");
        replace(0, "al", "op-1", "op-0");
        replace(0, "bg_al", "op-04", "op-0");
        location.href = "'.$link.'";
    }

    function cancelar(){
        replace(0, "al", "top-1", "top-0");
        replace(0, "al", "op-1", "op-0");
        replace(0, "bg_al", "op-04", "op-0");
    }

    function out(){
        replace(0, "bg_al", "op-0", "op-04");
        replace(0, "al", "top-0", "top-1");
        replace(0, "al", "op-0", "op-1");
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            ok();
        }
      });
    </script>';

    echo '<div onclick="out()" class="pointer relative txt-center custom ctr flex auto b-radius-02 white txt-font-07 n-txt-font-09 w-5-05 h-2-02 t-w-13 t-h-5 t-b-radius-06 m-w-25 m-h-9 m-b-radius-1 '.$class.'" style="--custom: #737272;">
        <svg xmlns="http://www.w3.org/2000/svg" class="left-1 mg-left-02 w-1 n-w-1-01 n-mg-left--01 absolute t-w-2-05 t-h-2-05 t-mg-left-1-05 m-w-4 m-h-4 m-mg-left-4-07" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
       <label class="mg-left-1-03 mg-top-0 pointer txt-font-08 n-txt-font-1 t-txt-font-2 t-mg-left-2-05 m-txt-font-3 m-mg-left-4">SAIR</label></div>';

       echo '<div id="bg_al" class="max-z-index fade-04 bg-black op-0 w-100 h-vh-100 fixed top-0"></div>
       <div id="al" class="t-pd-bottom-9 t-w-full-70 t-b-radius-1-02 m-w-full-70 m-h-auto m-b-radius-2 m-b-w-07 m-pd-top-5 m-pd-h-6 m-mg-top-7 m-pd-bottom-16 master-z-index fade-03 op-0 w-22 n-w-29 h-auto bg-custom mg-top-0 fixed center-h-screen top-1 b-radius-05 pd-left-1-03 pd-right-1-03 n-pd-left-1 n-pd-right-1 n-pd-h-2 pd-top-1 n-pd-top-1-05 font5 white b-custom2 b-solid b-w-01 pd-bottom-5" 
       style="--bg-custom: #292a2d; --bg-custom2: #80868b; --custom: #292a2d;--custom2: #525252; --custom3: #80868b; --custom4: #292a2d;">
       <p class="t-pd-left-3 t-pd-right-3 t-mg-top-3 t-txt-font-2 mg-top-03 mg-bottom-0 txt-font-08 n-txt-font-1-01 m-txt-font-4-05">'.$title.'</p><br>
       <p class="t-pd-left-3 t-pd-right-3 t-mg-top--2 t-txt-font-2 txt-font-07 n-txt-font-1 mg-top--1 mg-bottom-0 m-txt-font-4 m-mg-top--4">'.$subtitle.'</p>
       <div onclick="cancelar()" class="t-b-radius-08 t-pd-v-08 t-right-1 t-w-12 t-txt-font-2 m-b-radius-1-02 m-txt-font-4 m-w-22 m-b-w-08 m-pd-top-1-05 m-pd-bottom-1-08 b-radius-03 txt-font-07 n-txt-font-1 absolute w-auto h-auto right-1 bottom-1 pd-h-0 pd-v-04 n-pd-h-1 n-pd-v-05 bg-custom b-solid b-custom2 b-w-01 txt-center custom3 w-4-03 n-w-4 pointer">Cancelar</div>
               <div onclick="ok()" class="t-b-radius-08 t-pd-v-08 t-right-16 t-w-12 t-txt-font-2 t-pd-left-1-02 m-b-radius-1-02 m-txt-font-4 m-w-22 m-right-26 m-b-w-08 m-pd-top-1-08 m-pd-bottom-1-08 b-radius-03 txt-font-07 n-txt-font-1 absolute w-auto h-auto right-7 bottom-1 pd-h-0 pd-v-04 n-pd-h-1 n-pd-v-05 bg-custom2 b-solid b-custom2 b-w-01 txt-center custom4 w-4-03 n-w-4 mg-right--1-02 n-mg-right-05 pointer">OK</div>
       </div>';
}

function nav_left(){
    echo '';
}

function content($class = ''){
    echo '<div class="'.$class.'">';
}

function close_content(){
    echo '</div>';
}

function div($class = ''){
    echo '<div class="'.$class.'">';
}

function close_div(){
    echo '</div>';
}

function main($class = ''){
    echo '<main class="'.$class.'">';
}

function close_main(){
    echo '</main>';
}


?>