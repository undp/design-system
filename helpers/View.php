<?php
namespace helpers;

class View {

    public static function render($view, $args = []) {
        extract($args);
        include dirname(__DIR__).'/views/'.$view.'.php';
    }
}
