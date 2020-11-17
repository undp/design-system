<?php
use helpers\View;
?>
<div class="join-us">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell medium-landscape-6 medium-landscape-offset-1">
                <h2 class="heading h2">Join Us in UNDP<br/>Partnership</h2>
                <p class="big-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="btn">
                    Read More
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </button>
            </div>
            <div class="cell medium-landscape-3 medium-landscape-offset-2">
                <?php View::render('components/image-card') ?>
            </div>
        </div>
    </div>
</div>
