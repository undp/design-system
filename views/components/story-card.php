<?php
    $imageExist = isset($image) && !empty($image);
?>
<div class="story-card scroll-track left-right delay-4 <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?>">
    <div class="hover-image">
        <?php if($imageExist): ?>
            <img src="<?= $image ?>" alt="story-image">
        <?php endif; ?>
    </div>
    <div class="content">
        <p class="tag">
            Content Tag
        </p>
        <h5 class="heading h5">
            Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt
        </h5>
        <p class="small-copy">
            This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action
        </p>
        <div class="cta">
            <a class="text-link arrow-2" href="#">
                Read More

                <svg class="link__arrow" viewBox="0 0 80 16" xmlns="http://www.w3.org/2000/svg">
                    <g class="link__arrow-inner" stroke-width="2">
                        <line class="line-test" x1="0" y1="8" x2="80" y2="8"/>
                        <polyline class="arrow-test" points="39.5 1, 46.5 8, 39.5 15" />
                    </g>
                </svg>

                <!--<span  class="arrow-line">-->
                <!--    --><?//=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                <!--</span>-->
            </a>
        </div>
    </div>
</div>