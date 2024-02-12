<!DOCTYPE html>
<html lang="ko">
   <head>
      <!-- 이렇게 안하면 이유는 모르곘지만 해당 환경에서 한글이 깨져서 이렇게 설정 -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
      <?php
         include "./module-sample.php";
         
         $numbers = [1, 2, 3];
         $doubleNumbers = [];
         
         foreach ($numbers as $number) {
            $doubleNumbers[] = $number * 2;
         }
         
         print_r($doubleNumbers);
         echo "<br /><br />";
         echo TEST_VALUE;

         phpinfo();
      ?>
   </body>
</html>