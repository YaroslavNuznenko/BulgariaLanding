<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['tourName'])&&$_POST['tourName']!="")&&(isset($_POST['city'])&&$_POST['city']!="")&&(isset($_POST['date'])&&$_POST['date']!="")&& (isset($_POST['manCount'])&&$_POST['manCount']!="")){ 
        $to = 'nuznenko@gmail.com'; 
        $subject = 'Заявки в Болгарию'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Тур: '.$_POST['tourName'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Email: '.$_POST['city'].'</p>
                        <p>Email: '.$_POST['date'].'</p>
                        <p>Email: '.$_POST['manCOunt'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>