<?php
use helpers\Svg;
?>
<div id="our-impact" class="hide menu-item-options">
    <a class="flex-container align-middle menu-btn-back uppercase" href="#" data-action-back>
        <div class="arrow-black">
            <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
        </div>
        Back
    </a>
    <a href="#" class="title uppercase">Our impact</a>
    <ul class="menu">
        <li class="menu-item">
            <a class="menu-item-title" href="#">Results</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Expertise</a>
            <ul class="submenu">
                <li><a class="text-link arrow-1" href="#">People</a></li>
                <li><a class="text-link arrow-1" href="#">Planet</a></li>
                <li><a class="text-link arrow-1" href="#">Prosperity</a></li>
                <li><a class="text-link arrow-1" href="#">Peace</a></li>
                <li><a class="text-link arrow-1" href="#">Partnerships</a></li>
                <li><a class="text-link arrow-3" href="#">SDG Integration</a></li>
            </ul>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Publications</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">News Centre</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Stories</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Blog</a>
        </li>
    </ul>
</div>
