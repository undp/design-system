<?php

use helpers\View;
use helpers\Svg;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP Design Showcase']) ?>

<body>
<div class="docs">
    <nav>
        <div class="header hide-for-medium header flex-container align-middle" data-sticky-container
             data-margin-top="0">
            <button class="menu-hamburger" data-doc-hamburger data-toggle="offCanvasLeft1">
                <span class="hamburger-line line-top"></span>
                <span class="hamburger-line line-middle"></span>
                <span class="hamburger-line line-bottom"></span>
            </button>
        </div>
        <div class="off-canvas-wrapper cell medium-2">
            <div class="off-canvas position-left  reveal-for-medium side-bar" id="offCanvasLeft1" data-off-canvas>
                <h1>UNDP Docs</h1>
                <ul class="vertical menu accordion-menu" data-accordion-menu>
                    <li>
                        <a class="menu-item" href="#">buttons</a>
                        <ul class="menu vertical nested is-active">
                            <li class="is-active" data-doc-id="doc-button-cta"><a href="#">cta</a></li>
                            <li data-doc-id="doc-button-cta-mobile"><a href="#">cta mobile</a></li>
                            <li data-doc-id="doc-button-checks-boxes"><a href="#">checks boxes</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow"><a href="#">cta no arrow</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow"><a href="#">cta no arrow</a></li>
                            <li data-doc-id="doc-button-cta-mobile-larage"><a href="#">cta mobile large</a></li>
                            <li data-doc-id="doc-button-cta-mobile-no-arrow-large"><a href="#">cta no arrow mobile</a>
                            </li>
                            <li data-doc-id="doc-button-close-out"><a href="#">close out</a></li>
                            <li data-doc-id="doc-button-cta-not-arrow-mobile"><a href="#">cta mobile no arrow</a></li>
                            <li data-doc-id="doc-button-download"><a href="#">download button</a></li>
                            <li data-doc-id="doc-button-direct-arrow"><a href="#">directional arrow</a></li>
                            <li data-doc-id="doc-button-global"><a href="#">global</a></li>
                            <li data-doc-id="doc-button-language"><a href="#">language select</a></li>
                            <li data-doc-id="doc-button-menu"><a href="#">menu</a></li>
                            <li data-doc-id="doc-button-pagination"><a href="#">pagination</a></li>
                            <li data-doc-id="doc-button-radio-buttons"><a href="#">radios buttons</a></li>
                            <li data-doc-id="doc-button-search"><a href="#">search</a></li>
                            <li data-doc-id="doc-button-video"><a href="#">video</a></li>
                            <li data-doc-id="doc-button-view-more"><a href="#">view more / mobile filter button</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="menu-item" href="#">filters</a>
                        <ul class="menu vertical nested">
                            <li data-doc-id="doc-filter-multi-select"><a href="#">multi select</a></li>
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
                <div id="doc-button-cta">
                    <div class="panel callout radius">
                        <div>
                            <p class="heading h4">Cta</p>
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
                    <pre class="language-html line-numbers" data-src-status="loaded">
                        <code class="language-html">
                            <?= htmlspecialchars('
                            <button class="btn dark">
                                Submit
                                <svg xmlns="http://www.w3.org/2000/svg" width="11.643" height="17.341">
                                    <path data-name="Path 637" d="M.643.767l9.441 7.9-9.441 7.905" fill="none" stroke="#232e3e" stroke-width="2"/>
                                </svg>
                            </button>') ?>
                        </code>
                    </pre>
                </div>
                <div id="doc-button-cta-mobile" class="hide">
                    <h2>working on it</h2>
                </div>
                <div id="doc-filter-multi-select" class="hide">
                    <div class="panel callout radius">
                        <p class="heading h4 title">Multi-select</p>
                        <div id="example-multi-select" class="multi-select" data-multi-select>
                            <button class="select-control" aria-label="Example multi-select" data-opening-action data-select-control>
                                Multi select title <span></span>
                            </button>
                            <div class="options" data-options data-type="example-multi-select-type">
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_1">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 1</span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_2">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 2</span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_3">
                                    <span class="checkmark"></span>
                                    <span class="name">List item3</span>
                                </label></div>
                        </div>
                    </div>
                    <pre class="language-html line-numbers" data-src-status="loaded">
                        <code class="language-html">
                            <?= htmlspecialchars('
                            <div id="example-multi-select" class="multi-select" data-multi-select>
                            <button class="select-control" aria-label="Example multi-select" data-opening-action data-select-control>
                                Multi select title <span></span>
                            </button>
                            <div class="options" data-options data-type="example-multi-select-type">
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_1">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 1</span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_2">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 2</span>
                                </label>
                                <label class="checkbox-item">
                                    <input type="checkbox" value="list_item_3">
                                    <span class="checkmark"></span>
                                    <span class="name">List item3</span>
                                </label></div>
                        </div>') ?>
                        </code>
                    </pre>
                </div>
                <div id="doc-filter-radio" class="hide">
                    <div class="panel callout radius">
                        <p class="heading h4 title">Select radio</p>
                        <div class="select-radio" data-multi-select>
                            <button class="select-control" aria-label="Example select readio" data-opening-action data-select-control>
                                Select radio title
                            </button>
                            <div class="options" data-options data-type="Example select radio">
                                <label class="checkbox-item radio">
                                    <input type="radio" value="list_item_1" name="select-radio">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 1</span>
                                </label>
                                <label class="checkbox-item radio">
                                    <input type="radio" value="list_item_2" name="select-radio">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 2</span>
                                </label>
                                <label class="checkbox-item radio">
                                    <input type="radio" value="list_item_3" name="select-radio">
                                    <span class="checkmark"></span>
                                    <span class="name">List item 3</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <pre class="language-html line-numbers" data-src-status="loaded">
                        <code class="language-html">
                            <?= htmlspecialchars('
                            <div class="select-radio" data-multi-select>
                                <button class="select-control" aria-label="Example select readio" data-opening-action data-select-control>
                                    Select radio title
                                </button>
                                <div class="options" data-options data-type="Example select radio">
                                    <label class="checkbox-item radio">
                                        <input type="radio" value="list_item_1" name="select-radio">
                                        <span class="checkmark"></span>
                                        <span class="name">List item 1</span>
                                    </label>
                                    <label class="checkbox-item radio">
                                        <input type="radio" value="list_item_2" name="select-radio">
                                        <span class="checkmark"></span>
                                        <span class="name">List item 2</span>
                                    </label>
                                    <label class="checkbox-item radio">
                                        <input type="radio" value="list_item_3" name="select-radio">
                                        <span class="checkmark"></span>
                                        <span class="name">List item 3</span>
                                    </label>
                                </div>
                            </div>
                        ') ?>
                        </code>
                    </pre>
                </div>
                <div id="doc-filter-select" class="hide">
                    <div class="grid-x grid-padding-x">
                        <div class="cell medium-6">
                            <div class="panel callout radius">
                                <p class="heading h4 title">Select radio</p>
                                <div class="select-box" data-select>
                                    <div class="options-container" data-select-options>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   value="list_item_1"
                                                   name="select-example">
                                            <label for="list-item-1">List item 1</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   id="list-item-1"
                                                   value="list_item_2"
                                                   name="select-example">
                                            <label for="list-item-1">List item 2</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   id="list-item-1"
                                                   value="list_item_3"
                                                   name="select-example">
                                            <label for="list-item-1">List item 3</label>
                                        </div>
                                    </div>
                                    <div class="selected" data-select-open>
                                        Select title
                                    </div>
                                </div>
                            </div>
                            <pre class="language-html line-numbers" data-src-status="loaded">
                        <code class="language-html">
                            <?= htmlspecialchars('
                            <div class="select-box" data-select>
                                <div class="options-container" data-select-options>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               value="list_item_1"
                                               name="select-example">
                                        <label for="list-item-1">List item 1</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               value="list_item_2"
                                               name="select-example">
                                        <label for="list-item-1">List item 2</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               value="list_item_3"
                                               name="select-example">
                                        <label for="list-item-1">List item 3</label>
                                    </div>
                                </div>
                                <div class="selected" data-select-open>
                                    Select title
                                </div>
                            </div>') ?>
                        </code>
                    </pre>
                        </div>
                        <div class="cell medium-6 bg-dark">
                            <div class="panel callout radius">
                                <p class="heading h4 title dark">Select radio</p>
                                <div class="select-box dark" data-select>
                                    <div class="options-container" data-select-options>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   id="list-item-1"
                                                   name="category"
                                                   value="list-item-1">
                                            <label for="list-item-1">List item 1</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   id="list-item-2"
                                                   name="category"
                                                   value="list-item-2">
                                            <label for="list-item-2">List item 2</label>
                                        </div>
                                        <div class="option">
                                            <input type="radio"
                                                   class="radio"
                                                   id="list-item-3"
                                                   name="category"
                                                   value="list-item-3">
                                            <label for="list-item-3">List item 3</label>
                                        </div>
                                    </div>
                                    <div class="selected" data-select-open>
                                        Category
                                    </div>
                                </div>
                            </div>
                            <pre class="language-html line-numbers" data-src-status="loaded">
                        <code class="language-html">
                            <?= htmlspecialchars('
                            <div class="select-box dark" data-select>
                                <div class="options-container" data-select-options>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               name="select-dark"
                                               value="list-item-1">
                                        <label for="list-item-1">List item 1</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               name="select-dark"
                                               value="list-item-2">
                                        <label for="list-item-2">List item 2</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio"
                                               class="radio"
                                               name="select-dark"
                                               value="list-item-3">
                                        <label for="list-item-3">List item 3</label>
                                    </div>
                                </div>
                                <div class="selected" data-select-open>
                                    Category
                                </div>
                            </div>') ?>
                        </code>
                    </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
