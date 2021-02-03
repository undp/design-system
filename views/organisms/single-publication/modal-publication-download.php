<?php
use helpers\View;
use helpers\Svg;
?>

<div class="modal-publication-download">
    <div class="modal-content">
        <button class="btn-close">
            <?php Svg::render('icon-close') ?>
        </button>
        <div class="image-container">
            <?php View::render('molecules/images/publication-image', ['image' => '/assets/images/placeholder/publication-1.png']); ?>
        </div>
        <div class="download-controls">
            <ul class="chapter-list">
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li class="chapter-item">
                    <p class="chapter-title">Lorem Ipsum Title Goes Here</p>
                    <p class="chapter-metadata">PDF (1.9 MB)</p>
                    <label class="checkbox-item">
                        <input type="checkbox" value="">
                        <span class="checkmark"></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</div>