<?php
    use helpers\View;

    View::render('molecules/buttons/download-btn', [
        'target' => '_blank',
        'link' => $link ?? '#',
        'btnText' => $text ?? '',
        'classes' => $classes ?? '',
        'btnIcon' => 'arrows/btn-arrow-external',
    ]);
