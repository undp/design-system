<?php use helpers\View;?>
<section class="related-table scroll-track left-right delay-1">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-offset-1 large-11 small-10 small-offset-1">
                <div class="heading h2">Related Materials</div>
            </div>
            <div class="cell large-offset-3 large-6 small-10 small-offset-1 link-list big-copy">
                <?php
                View::render('molecules/text/table-item', [
                    'title' => 'Country Profiles - outcomes of the Mechanism for the
                        Review of Implementation of
                        the United
                        Nations Convention against Corruption',
                    'image' => false,
                    'btnText' => 'Read More'
                ]);
                ?>
                <div class="grid-x grid-margin-x">
                    <div class="cell large-6">
                        <?php
                        View::render('molecules/text/table-item', [
                            'title' => 'Legislative Guide for the Implementation of UNCAC',
                            'image' => false,
                            'btnText' => 'Read More'
                        ]);
                        ?>
                    </div>
                    <div class="cell large-6">
                        <?php
                        View::render('molecules/text/table-item', [
                            'title' => 'Pacific Youth Anti-Corruption Advocate’s Toolkit',
                            'image' => false,
                            'btnText' => 'Read More'
                        ]);
                        ?>
                    </div>
                </div>
                <?php
                View::render('molecules/text/table-item', [
                    'title' => 'Mechanism for the Review of Implementation of the United
                        Nations Convention against
                        Corruption',
                    'image' => false,
                    'btnText' => 'Read More'
                ]);
                ?>
                <?php
                View::render('molecules/text/table-item', [
                    'title' => 'Travaux Préparatoires of the negotiations for the
                        elaboration of the United Nations
                        Convention against Corruption',
                    'image' => false,
                    'btnText' => 'Read More'
                ]);
                ?>
                <?php
                View::render('molecules/text/table-item', [
                    'title' => 'Technical Guide to the United Nations Convention against Corruption',
                    'image' => false,
                    'btnText' => 'Read More'
                ]);
                ?>
                <div class="grid-x grid-margin-x">
                    <div class="cell large-6">
                        <?php
                        View::render('molecules/text/table-item', [
                            'title' => 'United Nations Convention against Corruption (UNCAC)',
                            'image' => false,
                            'btnText' => 'Read More'
                        ]);
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
