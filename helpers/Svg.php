<?php

namespace helpers;

class Svg
{

    public static function render($svgName, $imgTag = false, $alt = '' , $path = 'assets/images/')
    {
        $fullPath = $path . $svgName . '.svg';

        if (!file_exists($fullPath)) return;

        if ($imgTag){
            if (strpos($fullPath, '/') !== 0) {
                $fullPath = '/' . $fullPath;
            }

            echo "<img src='$fullPath' alt='$alt'>";
        }
        else {
            echo file_get_contents($fullPath);
        }
    }
}
