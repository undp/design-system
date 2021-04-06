<?php
    use helpers\View;
    $classes = $classes ?? '';

    View::render('molecules/buttons/download-btn', [
        'target' => '_blank',
        'link' => $link ?? '#',
        'btnText' => $text ?? '',
        'btnIcon' => 'arrows/btn-arrow-external',
        'classes' => 'external-link ' . $classes
    ]);
