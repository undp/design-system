<?php
    use helpers\View;
?>
<section id="modal-nav-hover" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option data-menu-option-value="content-about"><a href="#" class="menu-item">About undp</a></li>
                    <li data-menu-option data-menu-option-value="content-governance"><a href="#" class="menu-item">Governance</a></li>
                    <li><a href="#" class="menu-item">Operations</a></li>
                </ul>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-nav-content')?>
            </div>
        </div>
    </div>
</section>

<section id="modal-nav-what-we-do" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option data-menu-option-value="content-sustainable-development-goals"><a href="#" class="menu-item">Sustainable Development Goals</a></li>
                    <li data-menu-option data-menu-option-value="content-human-development-report"><a href="#" class="menu-item">Human development report </a></li>
                    <li><a href="#" class="menu-item">Development challenges and solutions</a></li>
                    <li><a href="#" class="menu-item">Strategic Initiatives</a></li>
                </ul>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-nav-what-we-do'); ?>
            </div>
        </div>
    </div>
</section>

<section id="modal-nav-our-impact" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option data-menu-option-value="content-publications"><a href="#" class="menu-item">Publications</a></li>
                    <li data-menu-option data-menu-option-value="content-stories"><a href="#" class="menu-item">Stories</a></li>
                    <li><a href="#" class="menu-item">Blog</a></li>
                    <li><a href="#" class="menu-item">Newsroom</a></li>
                </ul>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-nav-our-impact'); ?>
            </div>
        </div>
    </div>
</section>
