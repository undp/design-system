<?php
use helpers\Svg;
?>
<div id="get-involved" class="hide menu-item-options">
    <a class="flex-container align-middle menu-btn-back uppercase" href="#" data-action-back>
        <div class="arrow-black">
            <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
        </div>
        Back
    </a>
    <a href="#" class="title uppercase">get involved</a>
    <ul class="menu">
        <li class="menu-item">
            <a class="menu-item-title" href="#">Careers</a>
       </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Procurement</a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title text-link arrow-4" href="#" target="_blank">
                Expert Consultations
                <?= file_get_contents("assets/images/arrows/btn-arrow-external-red.svg"); ?>
            </a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title text-link arrow-4" href="#" target="_blank">
                UNDP Shop
                <?= file_get_contents("assets/images/arrows/btn-arrow-external-red.svg"); ?>
            </a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title text-link arrow-4" href="#" target="_blank">
                Donate
                <?= file_get_contents("assets/images/arrows/btn-arrow-external-red.svg"); ?>
            </a>
        </li>
        <li class="menu-item">
            <a class="menu-item-title" href="#">Contact Us</a>
        </li>
    </ul>
</div>
