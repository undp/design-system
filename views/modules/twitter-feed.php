<?php
use helpers\View;
?>
<div class="twitter-feed">
    <div class="grid-container">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-offset-1 small-11 medium-offset-1 medium-11">
                    <div class="section-title">
                        <h2 class="heading h2">
                            @UNDP
                        </h2>
                        <img src="/assets/images/icon-twitter-white.png" alt="">
                    </div>
                </div>
            </div>
            <div class="grid-x grid-padding-x tweets">
                <div class="cell small-12 medium-3">
                    <?php View::render('components/tweet') ?>
                </div>
                <div class="cell small-12 medium-3">
                    <?php View::render('components/tweet') ?>
                </div>
                <div class="cell small-12 medium-3">
                    <?php View::render('components/tweet') ?>
                </div>
                <div class="cell small-12 medium-3">
                    <?php View::render('components/tweet') ?>
                </div>
            </div>
        </div>
    </div>
</div>