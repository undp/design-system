<?php
use helpers\Svg;
?>
<div class="menu-mobile-main-options">
    <ul class="menu-items">
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-are">
                Who we are
                <?php Svg::render('btn-arrow-red', true, 'Back', 'assets/images/arrows/')?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-do">
                What we do
                <?php Svg::render('btn-arrow-red', true, 'Back', 'assets/images/arrows/')?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="our-impact">
                Our impact
                <?php Svg::render('btn-arrow-red', true, 'Back', 'assets/images/arrows/')?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" data-item-details data-submenu="get-involved" href="#">
                Get involved
                <?php Svg::render('btn-arrow-red', true, 'Back', 'assets/images/arrows/')?>
            </a>
        </li>
    </ul>
    <ul class="menu-items-languages uppercase">
        <li>
            <a class="flex-container align-middle nav-item" href="#" data-item-details data-submenu="languages">
                <?php Svg::render('icon-languages', false, 'Languages') ?>
                English
            </a>
        </li>
        <li>
            <a class="flex-container align-middle nav-item" class="flex-container align-middle" href="#" data-item-details data-submenu="modal-search-offices" data-modal-open data-modal="modal-search-offices">
                <?php Svg::render('icon-www-blue', true, 'Languages') ?>
                Locations
            </a>
        </li>
    </ul>
</div>