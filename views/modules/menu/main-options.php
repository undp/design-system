<?php
use helpers\Svg;
?>
<div class="menu-mobile-main-options">
    <ul class="menu-items">
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-are">
                Who we are
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-do">
                What we do
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#">
                Our impact
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#">
                Get involved
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
    </ul>
    <ul class="menu-items-languages uppercase">
        <li>
            <a class="flex-container align-middle nav-item" href="#">
                <?php Svg::render('icon-languages') ?>
                English
            </a>
        </li>
        <li>
            <a class="flex-container align-middle nav-item" class="flex-container align-middle" href="#">
                <?php Svg::render('icon-www') ?>
                Locations
            </a>
        </li>
    </ul>
</div>