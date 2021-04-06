<?php use helpers\Svg; ?>


<a href="<?= $link ?? '#' ?>" class="cta">
    <div class="text-link <?= $arrowClass ?? 'arrow-1' ?>">
        <span><?= $text ?? '' ?></span>


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
    </div>
</a>
