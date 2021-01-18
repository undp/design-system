<?php
use helpers\View;
use helpers\Svg;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP Design Showcase']) ?>

<body>
<div class="docs">
    <nav>
        <div class="header hide-for-medium header flex-container align-middle" data-sticky-container data-margin-top="0">
            <button class="menu-hamburger" data-doc-hamburger data-toggle="offCanvasLeft1">
                <span class="hamburger-line line-top"></span>
                <span class="hamburger-line line-middle"></span>
                <span class="hamburger-line line-bottom"></span>
            </button>
        </div>
        <div class="off-canvas-wrapper cell medium-2">
            <div class="off-canvas position-left  reveal-for-medium side-bar" id="offCanvasLeft1" data-off-canvas>
                <h1>UNDP Docs</h1>
                <ul class="vertical menu accordion-menu" data-accordion-menu data-multi-open="false">
                    <li>
                        <a class="menu-item" href="#">buttons</a>
                        <ul class="menu vertical nested">
                            <li data-doc-id="doc-button-cta"><a href="#">cta</a></li>
                            <li data-doc-id="doc-button-cta-mobile"><a href="#">cta mobile</a></li>
                            <li data-doc-id-="doc-button-checks-boxes"><a href="#">checks boxes</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow"><a href="#">cta no arrow</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow"><a href="#">cta no arrow</a></li>
                            <li data-doc-id="doc-button-cta-mobile-larage"><a href="#">cta mobile large</a></li>
                            <li data-doc-id="doc-button-cta-mobile-no-arrow-large"><a href="#">cta no arrow mobile</a></li>
                            <li data-doc-id-="doc-button-close-out"><a href="#">close out</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow-mobile"><a href="#">cta mobile no arrow</a></li>
                            <li data-doc-id-="doc-button-download"><a href="#">download button</a></li>
                            <li data-doc-id-="doc-button-direct-arrow"><a href="#">directional arrow</a></li>
                            <li data-doc-id-="doc-button-global"><a href="#">global</a></li>
                            <li data-doc-id-="doc-button-language"><a href="#">language select</a></li>
                            <li data-doc-id="doc-button-menu"><a href="#">menu</a></li>
                            <li data-doc-id-="doc-button-pagination"><a href="#">pagination</a></li>
                            <li data-doc-id-="doc-button-radio-buttons"><a href="#">radios buttons</a></li>
                            <li data-doc-id-="doc-button-search"><a href="#">search</a></li>
                            <li data-doc-id-="doc-button-video"><a href="#">video</a></li>
                            <li data-doc-id-="doc-button-view-more"><a href="#">view more / mobile filter button</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="menu-item" href="#">filters</a>
                        <ul class="menu vertical nested">
                            <li data-doc-id-="doc-filter-multi-select"><a href="#">multi select</a></li>
                            <li data-doc-id="doc-filter-radio"><a href="#">radio</a></li>
                            <li data-doc-id="doc-filter-select"><a href="#">select</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="grid-container docs-container">
        <div class="grid-x">
            <div class="cell" data-parent-docs>
                <div id="doc-button-cta" class="hide">
                    <div class="panel callout radius">
                        <div>
                            <button class="btn dark">
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" width="11.643" height="17.341">
                                    <path data-name="Path 637" d="M.643.767l9.441 7.9-9.441 7.905" fill="none"
                                          stroke="#232e3e"
                                          stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <pre data-src="prism.js" class="language-html line-numbers" data-src-status="loaded">
                <code class="language-html">
                    &lt;button class=&quot;btn dark&quot;&gt;
                        Submit
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;11.643&quot; height=&quot;17.341&quot;&gt;
                            &lt;path data-name=&quot;Path 637&quot; d=&quot;M.643.767l9.441 7.9-9.441 7.905&quot; fill=&quot;none&quot; stroke=&quot;#232e3e&quot; stroke-width=&quot;2&quot;/&gt;
                        &lt;/svg&gt;
                    &lt;/button&gt;
                </code>
            </pre>
                </div>
                <div id="doc-button-cta-mobile" class="hide">
                    <div class="panel callout radius">
                        this one
                        <div>
                            <button class="btn dark">
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" width="11.643" height="17.341">
                                    <path data-name="Path 637" d="M.643.767l9.441 7.9-9.441 7.905" fill="none"
                                          stroke="#232e3e"
                                          stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <pre data-src="prism.js" class="language-html line-numbers" data-src-status="loaded">
                <code class="language-html">
                    &lt;button class=&quot;btn dark&quot;&gt;
                        Submit
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;11.643&quot; height=&quot;17.341&quot;&gt;
                            &lt;path data-name=&quot;Path 637&quot; d=&quot;M.643.767l9.441 7.9-9.441 7.905&quot; fill=&quot;none&quot; stroke=&quot;#232e3e&quot; stroke-width=&quot;2&quot;/&gt;
                        &lt;/svg&gt;
                    &lt;/button&gt;
                </code>
            </pre>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
