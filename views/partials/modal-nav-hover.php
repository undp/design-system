<?php
    use helpers\View;
?>
<section id="modal-nav-hover" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full">
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu">
                <ul class="menu">
                    <li class="active" data-menu-option data-menu-option-value="content-about"><a href="#" class="menu-item">About undp</a></li>
                    <li data-menu-option data-menu-option-value="content-governance"><a href="#" class="menu-item">Governance</a></li>
                    <li><a href="#" class="menu-item">Operations</a></li>
                </ul>
            </div>
            <div class="cell large-auto">
                <?php View::render('modules/modal/modal-nav-content')?>
            </div>
        </div>
    </div>
</section>