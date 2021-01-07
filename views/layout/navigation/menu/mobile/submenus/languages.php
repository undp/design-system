<?php
use helpers\Svg;
?>

<div id="languages" class="hide menu-item-options">
    <a class="flex-container align-middle menu-btn-back uppercase" href="#" data-action-back>
        <div class="arrow-black">
            <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
        </div>
        Back
    </a>
    <ul class="menu">
        <li class="menu-item">
            <a class="menu-item-title" href="#">Select Language</a>
            <ul class="submenu">
                <li><a href="#">English</a></li>
                <li><a href="#">Francais</a></li>
                <li><a href="#">Español</a></li>
            </ul>
        </li>
    </ul>
</div>