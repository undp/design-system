<?php

use helpers\Svg;

?>


<div id="who-we-are" class="hide menu-item-options">
    <a class="flex-container align-middle menu-btn-back uppercase" href="#" data-action-back>
        <div class="arrow-black">
            <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
        </div>
        Back
    </a>
    <a href="#" class="title uppercase">Who we are</a>
    <ul class="menu">
        <li class="menu-item">
            <a class="menu-item-title" href="#">About us</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Leadership</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Executive Board</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Financials</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Transparency and accountability</a>
        </li>
    </ul>
</div>
