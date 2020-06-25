<?php
/*
 * Name: Joe Talbot
 * Coding 08
 * Purpose: Demonstrate basic understanding of PHP by means of creating a serverside calculator.
 */

$n1 = $_POST["day"];
$n2 = $_POST["month"];

/*
echo $n1 . PHP_EOL;
echo $n2 . PHP_EOL;
echo $op . PHP_EOL;
*/

$n1 = floatval(trim($n1));
$n2 = floatval(trim($n2));

/*$dateRaw = ((((($n2-1) * 31) + $n1 + 8)%372)+1)%31;

$result = "";

switch($dateRaw){
    case 1:
        $result = "Aries";
        break;
    case 2:
        $result = "Taurus";
        break;
    case 3:
        $result = "Gemini";
        break;
    case 4:
        $result = "Cancer";
        break;
    case 5:
        $result = "Leo";
        break;
    case 6:
        $result = "Virgo";
        break;
    case 7:
        $result = "Libra";
        break;
    case 8:
        $result = "Scorpio";
        break;
    case 9:
        $result = "Sagittarius";
        break;
    case 10:
        $result = "Capricorn";
        break;
    case 11:
        $result = "Aquarius";
        break;
    case 12:
        $result = "Pisces";
        break;
    default:
        $result = "Ophiuchus";
        break;
}*/

$result = "";

if(($n2 == 3 && $n1 > 20)||($n2 == 4 && $n1 < 21)){
    $result = "Aries";
}
if(($n2 == 4 && $n1 > 20)||($n2 == 5 && $n1 < 21)){
    $result = "Taurus";
}
if(($n2 == 5 && $n1 > 20)||($n2 == 6 && $n1 < 21)){
    $result = "Gemini";
}
if(($n2 == 6 && $n1 > 20)||($n2 == 7 && $n1 < 23)){
    $result = "Cancer";
}
if(($n2 == 7 && $n1 > 22)||($n2 == 8 && $n1 < 23)){
    $result = "Leo";
}
if(($n2 == 8 && $n1 > 22)||($n2 == 9 && $n1 < 23)){
    $result = "Virgo";
}
if(($n2 == 9 && $n1 > 22)||($n2 == 10 && $n1 < 23)){
    $result = "Libra";
}
if(($n2 == 10 && $n1 > 22)||($n2 == 11 && $n1 < 22)){
    $result = "Scorpio";
}
if(($n2 == 11 && $n1 > 21)||($n2 == 12 && $n1 < 22)){
    $result = "Sagittarius";
}
if(($n2 == 12 && $n1 > 21)||($n2 == 1 && $n1 < 20)){
    $result = "Capricorn";
}
if(($n2 == 1 && $n1 > 19)||($n2 == 2 && $n1 < 19)){
    $result = "Aquarius";
}
if(($n2 == 2 && $n1 > 18)||($n2 == 3 && $n1 < 21)){
    $result = "Pisces";
}

echo $result;

return;
