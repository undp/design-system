<?php
use helpers\View;
use helpers\Svg;
?>

<div class="modal-publication-download hide">
    <div class="modal-content">
        <button class="btn-close">
            <?php Svg::render('icon-close') ?>
        </button>
        <div class="upper-container">
            <div class="image-container">
                <?php View::render('molecules/images/publication-image', ['image' => '/assets/images/placeholder/publication-1.png']); ?>
            </div>
            <div class="download-controls">
                <?php
                View::render('partials/select', [
                    'name' => 'publication-languages',
                    'placeholder' => 'Select Languages',
                    'options' => [
                        ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                        ['id' => 'spanish-1', 'value' => 'es', 'label' => 'Spanish']
                    ]
                ])
                ?>
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
        <div class="bottom-container">
            <div class="social-icons">
                <div class="icon-item"><?php Svg::render('icon-facebook') ?></div>
                <div class="icon-item"><?php Svg::render('icon-twitter') ?></div>
                <div class="icon-item"><?php Svg::render('icon-instagram') ?></div>
                <div class="icon-item"><?php Svg::render('icon-linkedin') ?></div>
                <div class="icon-item"><?php Svg::render('icon-youtube') ?></div>
            </div>
            <button class="btn">Download</button>
        </div>
    </div>
</div>