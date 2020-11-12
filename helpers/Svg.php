<?php
namespace helpers;

class Svg {

    public static function render($svgName, $path = 'assets/images/') {
        $fullPath = $path . $svgName . '.svg';

        if(file_exists($fullPath)) {
            echo file_get_contents($fullPath);
        }
    }
}
