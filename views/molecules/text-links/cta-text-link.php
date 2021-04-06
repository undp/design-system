<?php
use helpers\Svg;

$tagName = $tagName ?? 'a';
$arrowClass = $arrowClass ?? 'arrow-1';
?>


<<?= $tagName ?>
    <?= $attrs ?? '' ?>
    href="<?= $link ?? '#' ?>"
    target="<?= $target ?? '_self' ?>"
    class="text-link <?= $arrowClass ?> <?= $classes ?? '' ?>">

    <span class="<?= isset($textClass) ? $textClass : 'text' ?>">
        <?= $text ?? '' ?>
    </span>

    <?php
        $alt = $text ?? '';
        $svgName = 'btn-arrow-red';
        $arrowPath = 'assets/images/arrows/';
        $useImgTag = isset($arrowClass) && $arrowClass === 'arrow-1';

        if (!$useImgTag) {
            $svgName .= '-secondary';
        }

        Svg::render($svgName, $useImgTag, $alt, $arrowPath);
    ?>
</<?= $tagName ?>>
