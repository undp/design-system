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
                        ['id' => 'default', 'value' => '', 'label' => 'Select Languages'],
                        ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                        ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                        ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                        ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                        ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                        ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
                    ]
                ])
                ?>
                <ul class="chapter-list">
                    <li class="chapter-item" data-lang="en">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - English</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="en">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - English</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="dari">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - Dari</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="pasto">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - Pasto</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="albanian">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - Albanian</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="arabic">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - Arabic</p>
                        <p class="chapter-metadata">PDF (1.9 MB)</p>
                        <label class="checkbox-item">
                            <input type="checkbox" value="">
                            <span class="checkmark"></span>
                        </label>
                    </li>
                    <li class="chapter-item" data-lang="portuguese">
                        <p class="chapter-title">Lorem Ipsum Title Goes Here - Portuguese</p>
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
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-facebook') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-twitter') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-instagram') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-linkedin') ?></a>
                <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-youtube') ?></a>
            </div>
            <button class="btn">Download</button>
        </div>
    </div>
</div>
