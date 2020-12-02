<?php
    use helpers\View;
?>
<section id="modal-nav-who-we-are" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option="content-about-us">
                        <a href="#" class="menu-item">About us</a>
                    </li>
                    <li data-menu-option="content-leadership">
                        <a href="#" class="menu-item">Leadership</a>
                    </li>
                    <li data-menu-option="content-executive-board">
                        <a href="#" class="menu-item">Executive Board</a>
                    </li>
                    <li data-menu-option="content-partnerships">
                        <a href="#" class="menu-item">Partnerships</a>
                    </li>
                    <li data-menu-option="content-financials">
                        <a href="#" class="menu-item">Financials</a>
                    </li>
                    <li data-menu-option="content-transparency">
                        <a href="#" class="menu-item">Transparency and accountability</a>
                    </li>
                </ul>
                <button class="show-on-focus text-link close-submenu">Close Submenu</button>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-who-we-are-content')?>
            </div>
        </div>
    </div>
</section>

<section id="modal-nav-what-we-do" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option="content-sustainable-development-goals">
                        <a href="#" class="menu-item">Sustainable Development Goals</a>
                    </li>
                    <li data-menu-option="content-human-development-report">
                        <a href="#" class="menu-item">Human development report </a>
                    </li>
                    <li data-menu-option="content-development-challenges">
                        <a href="#" class="menu-item">Development challenges and solutions</a>
                    </li>
                    <li data-menu-option="content-strategic-initiatives">
                        <a href="#" class="menu-item">Strategic Initiatives</a>
                    </li>
                </ul>
                <button class="show-on-focus text-link close-submenu">Close Submenu</button>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-nav-what-we-do-content'); ?>
            </div>
        </div>
    </div>
</section>

<section id="modal-nav-our-impact" class="flex-container align-center modal-nav-hover show-for-large hide">
    <div class="grid-container modal-content height-full" data-modal-content>
        <div class="grid-x modal-body" data-modal-body>
            <div class="cell large-auto  cell-menu opacity">
                <ul class="menu">
                    <li class="active" data-menu-option="content-publications">
                        <a href="#" class="menu-item">Publications</a>
                    </li>
                    <li data-menu-option="content-stories">
                        <a href="#" class="menu-item">Stories</a>
                    </li>
                    <li data-menu-option="content-expertise">
                        <a href="#" class="menu-item">Expertise</a>
                    </li>
                    <li data-menu-option="content-results">
                        <a href="#" class="menu-item">Results</a>
                    </li>
                    <li data-menu-option="content-blog">
                        <a href="#" class="menu-item">Blog</a>
                    </li>
                    <li data-menu-option="content-newsroom">
                        <a href="#" class="menu-item">Newsroom</a>
                    </li>
                </ul>
                <button class="show-on-focus text-link close-submenu">Close Submenu</button>
            </div>
            <div class="cell large-auto opacity">
                <?php View::render('modules/modal/modal-nav-our-impact-content'); ?>
            </div>
        </div>
    </div>
</section>

<section id="modal-nav-get-involved" class="flex-container align-center modal-nav-hover show-for-large hide">
<div class="grid-container modal-content height-full" data-modal-content>
    <div class="grid-x modal-body" data-modal-body>
        <div class="cell large-auto  cell-menu opacity">
            <ul class="menu">
                <li class="active" data-menu-option="content-careers">
                    <a href="#" class="menu-item">Careers</a>
                </li>
                <li data-menu-option="content-procurement">
                    <a href="#" class="menu-item">Procurement</a>
                </li>
                <li data-menu-option="content-expert-consultations">
                    <a href="#" class="menu-item">Expert Consultations</a>
                </li>
                <li data-menu-option="content-undp-shop">
                    <a href="#" class="menu-item">UNDP Shop</a>
                </li>
                <li data-menu-option="content-donate">
                    <a href="#" class="menu-item">Donate</a>
                </li>
                <li data-menu-option="content-contact-us">
                    <a href="#" class="menu-item">Contact Us</a>
                </li>
            </ul>
            <button class="show-on-focus text-link close-submenu">Close Submenu</button>
        </div>
        <div class="cell large-auto opacity">
            <?php View::render('modules/modal/modal-nav-get-involved-content')?>
        </div>
    </div>
</div>
</section>
