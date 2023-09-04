<?php

include "./module-sample.php";

$numbers = [1, 2, 3];
$doubleNumbers = [];

foreach ($numbers as $number) {
   $doubleNumbers[] = $number * 2;
}

print_r($doubleNumbers);
echo  "<br/>";
echo TEST_VALUE;

phpinfo();