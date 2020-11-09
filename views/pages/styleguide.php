<?php
use helpers\View;
?>
<!-- Page Headers -->
<?php View::render('header') ?>

<body>
<!-- Navigation -->
<?php View::render('navigation') ?>

<div class="grid-container styleguide">
    <div class="grid-x">
        <div class="cell">
            <!--  headings  -->
            <p class="number">1690312</p>
            <h1 class="heading h1">HEADLINE</h1>
            <h2 class="heading h2">Headline 2</h2>
            <h3 class="heading h3">Headline 3</h3>
            <h4 class="heading h4">Headline 4 - Callout and Big Headline for Content Titles</h4>
            <h5 class="heading h5">Headline 5 - Callout and Small Headline for Content Titles</h5>
            <p class="paragraph">Big Body. Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod
                tempor incididunt</p>
            <p class="paragraph small">Small Body. Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do
                eiusmod tempor incididunt</p>
            <div>
                <a class="link" href="#">READ MORE</a>
            </div>
            <div>
                <a class="menu-item" href="#">READ MORE</a>
            </div>
            <p class="tag">Content Tag</p>
        </div>
    </div>
</div>

<!-- Footer -->
<?php View::render('footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
