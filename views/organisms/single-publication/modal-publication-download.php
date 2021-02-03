<?php
use helpers\View;
?>

<div class="modal-publication-download hide">
    <div class="modal-content">
        <div class="image-container">
            <?php View::render('molecules/images/publication-image', ['image' => '/assets/images/placeholder/publication-1.png']); ?>
        </div>
        <div class="download-controls"></div>
    </div>
</div>