<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$program = $_POST['user_program'];
$inst = $_POST['user_instagram'];
$class = $_POST['user_class'];
$city = $_POST['user_city'];
$token = "2096500047:AAHH-M1QWetHzo5RUbLzQjfrJg8pdL9KRNA";
$chat_id = "-683203060";
$arr = array(
  'Имя клиента: ' => $name,
  'Телефон/телеграм: ' => $phone,
  'Email:' => $email,
  'Программа обучения:' => $program,
  'Инстаграм:'  => $inst,
  'Класс:'  => $class,
  'Город:'  => $city
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>