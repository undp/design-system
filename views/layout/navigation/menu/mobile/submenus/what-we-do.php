<?php
use helpers\Svg;
?>

<div id="what-we-do" class="hide menu-item-options">
    <a class="flex-container align-middle menu-btn-back uppercase" href="#" data-action-back>
        <div class="arrow-black">
            <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
        </div>
        Back
    </a>
    <a href="#" class="title uppercase">what we do</a>
    <ul class="menu" data-mobile-menu-what-we-do></ul>
</div>
