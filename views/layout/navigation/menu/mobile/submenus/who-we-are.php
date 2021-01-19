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
    <ul class="menu" data-mobile-menu-who-we-are></ul>
</div>
