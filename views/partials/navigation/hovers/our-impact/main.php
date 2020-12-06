<?php
use helpers\View;
?>

<section id="modal-nav-our-impact" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
             <?php View::render('partials/navigation/hovers/our-impact/menu') ?>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('partials/navigation/hovers/our-impact/content') ?>
            </div>
        </div>
    </div>
</section>