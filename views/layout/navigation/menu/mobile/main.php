<?php
use helpers\Svg;
use helpers\View;
?>


<div class="menu-mobile-main-options">
    <ul class="menu-items">
        <li>
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'text' => 'Who we are',
                    'attrs' => 'data-item-details data-submenu="who-we-are"'
                ]);
            ?>
        </li>
        <li>
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'text' => 'What we do',
                    'attrs' => 'data-item-details data-submenu="what-we-do"'
                ]);
            ?>
        </li>
        <li>
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'text' => 'Our Impact',
                    'attrs' => 'data-item-details data-submenu="our-impact"'
                ]);
            ?>
        </li>
        <li>
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'text' => 'Get Involved',
                    'attrs' => 'data-item-details data-submenu="get-involved"'
                ]);
            ?>
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
                <?php Svg::render('icon-www-blue', false, 'Languages') ?>
                Locations
            </a>
        </li>
    </ul>
</div>
