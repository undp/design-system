<?php
use helpers\View;
use helpers\Svg;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP Design Showcase']) ?>

<body>
    <!--Example-->
    <!--<div class="grid-x">-->
    <!--    <div class="cell medium-6">-->
    <!--        <div class="panel callout radius">-->
    <!--            <div>-->
    <!--                <button class="btn dark">-->
    <!--                    Submit-->
    <!--                    <svg xmlns="http://www.w3.org/2000/svg" width="11.643" height="17.341"><path data-name="Path 637" d="M.643.767l9.441 7.9-9.441 7.905" fill="none" stroke="#232e3e" stroke-width="2"/></svg>-->
    <!--                </button>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <pre data-src="prism.js" class="language-html line-numbers" data-src-status="loaded">-->
    <!--            <code class="language-html">-->
    <!--                &lt;button class=&quot;btn dark&quot;&gt;-->
    <!--                    Submit-->
    <!--                    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;11.643&quot; height=&quot;17.341&quot;&gt;-->
    <!--                        &lt;path data-name=&quot;Path 637&quot; d=&quot;M.643.767l9.441 7.9-9.441 7.905&quot; fill=&quot;none&quot; stroke=&quot;#232e3e&quot; stroke-width=&quot;2&quot;/&gt;-->
    <!--                    &lt;/svg&gt;-->
    <!--                &lt;/button&gt;-->
    <!--            </code>-->
    <!--        </pre>-->
    <!--    </div>-->
    <!--</div>-->

    <?php View::render('molecules/cards/single-content-card-image') ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
