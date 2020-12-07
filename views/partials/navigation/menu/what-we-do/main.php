<?php
use helpers\View;
?>
<section id="modal-nav-what-we-do" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <?php View::render('partials/navigation/menu/what-we-do/menu') ?>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('partials/navigation/menu/what-we-do/content') ?>
            </div>
        </div>
    </div>
</section>
