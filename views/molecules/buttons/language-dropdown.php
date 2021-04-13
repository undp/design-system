<?php use helpers\Svg; ?>


<div class="dropdown <?= $classes ?>" data-dropdown-languages>
    <button class="flex-container align-middle nav-item dark dropdown-btn" aria-label="Languages" data-opening-action>
        <?php Svg::render('icon-languages') ?>
        English
        <?php Svg::render('icon-arrow-down') ?>
    </button>
    <ul class="dropdown-content hide" data-options>
        <li><a class="nav-item dark" href="#">Français</a></li>
        <li><a class="nav-item dark" href="#">Español</a></li>
    </ul>
</div>