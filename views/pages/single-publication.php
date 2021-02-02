<?php

use helpers\Svg;
use helpers\View;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Country Page']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify') ?>

<div class="single-publication">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-offset-1 large-4">
                <div class="publication">
                    <div class="publication-image">
                        <img class="image lazy" data-src="/assets/images/placeholder/publication-1.png">
                    </div>
                    <div class="publication-social">
                        <div class="grid-x">
                            <div class="cell large-5">
                                Download
                            </div>
                            <div class="cell large-5">
                                <div class="social-icons">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell large-6">
                <div class="publication-text-container">
                    <h2 class="heading h2">Publications</h2>
                    <div class="heading h5">Featured content tag</div>
                    <div class="large-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt</div>
                    <div class="medium-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
