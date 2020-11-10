<?php
use helpers\View;
?>
<!-- Page Headers -->
<?php View::render('header') ?>

<body>
<!-- Navigation -->
<?php View::render('navigation') ?>

<div class="styleguide">
    <!--  headings  -->
    <div class="heading">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell headings-text-cta">
                    <h3 class="heading h3">UNDP DIGITAL GUIDE</h3>
                    <p class="heading h5 title">Type System</p>
                    <table>
                        <thead>
                        <tr>
                            <th class="heading h5 dark">Class</th>
                            <th class="heading h5 dark">Style preview</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="big-copy dark">.numerals .dark</td>
                            <td><p class="numerals dark">1690312</p></td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.heading .h1 .dark</td>
                            <td><h1 class="heading h1 dark">HEADLINE</h1></td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.heading .h2 .dark</td>
                            <td><h2 class="heading h2 dark">Headline 2</h2></td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.heading .h3 .dark</td>
                            <td><h3 class="heading h3 dark">Headline 3</h3></td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.heading .h4 .dark</td>
                            <td><h4 class="heading h4 dark">Headline 4 - Callout and Big Headline for Content
                                    Titles</h4>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.heading .h5 .dark</td>
                            <td><h5 class="heading h5 dark">Headline 5 - Callout and Small Headline for Content
                                    Titles</h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.big-copy .dark</td>
                            <td>
                                <p class="big-copy dark">Big Body. Lorem ipsum dolor sit amet, consectetur domus
                                    adipiscing
                                    elit,
                                    sed do eiusmod tempor incididunt</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.small-copy .dark</td>
                            <td>
                                <p class="small-copy dark">Small Body. Lorem ipsum dolor sit amet, consectetur domus
                                    adipiscing
                                    elit, sed do eiusmod tempor incididunt</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.cta-link .dark</td>
                            <td>
                                <a class="cta-link dark" href="#">READ MORE</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.nav-item .dark</td>
                            <td>
                                <a class="nav-item dark" href="#">READ MORE</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy dark">.tag .dark</td>
                            <td>
                                <p class="tag dark">Content Tag</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="heading-bg-dark">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell headings-text-cta">
                    <p class="heading h5 light">Type System</p>
                    <table>
                        <thead>
                        <tr>
                            <th class="heading h5 light">Class</th>
                            <th class="heading h5 light">Style preview</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="big-copy light">.numerals .light</td>
                            <td><p class="numerals light">1690312</p></td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.heading .h1 .light</td>
                            <td><h1 class="heading h1 light">HEADLINE</h1></td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.heading .h2 .light</td>
                            <td><h2 class="heading h2 light">Headline 2</h2></td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.heading .h3 .light</td>
                            <td><h3 class="heading h3 light">Headline 3</h3></td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.heading .h4 .light</td>
                            <td><h4 class="heading h4 light">Headline 4 - Callout and Big Headline for Content
                                    Titles</h4>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.heading .h5 .light</td>
                            <td><h5 class="heading h5 light">Headline 5 - Callout and Small Headline for Content
                                    Titles</h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.big-copy .light</td>
                            <td>
                                <p class="big-copy light">Big Body. Lorem ipsum dolor sit amet, consectetur domus
                                    adipiscing
                                    elit, sed do eiusmod tempor incididunt</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.small-copy .light</td>
                            <td>
                                <p class="small-copy light">Small Body. Lorem ipsum dolor sit amet, consectetur domus
                                    adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.cta-link .light</td>
                            <td>
                                <a class="cta-link light" href="#">READ MORE</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.nav-item .light</td>
                            <td>
                                <a class="nav-item light" href="#">READ MORE</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="big-copy light">.tag .light</td>
                            <td>
                                <p class="tag light">Content Tag</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<?php View::render('footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
