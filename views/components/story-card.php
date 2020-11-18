<?php
    $imageExist = isset($image) && !empty($image);
?>
<div class="story-card light <?= $size ?? ''  ?> <?= !$imageExist? 'no-image' : ''?>">
    <div class="hover-image">
        <?php if($imageExist): ?>
            <img src="<?= $image ?>" alt="">
        <?php endif; ?>
    </div>
    <p class="tag">
        Content Tag
    </p>
    <h5 class="heading <?= $size == 'large'? 'h4' : 'h5' ?>">
        Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt
    </h5>
    <p class="small-copy">
        This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action
    </p>
    <div class="cta">
        <a class="text-link arrow-1" href="#">
            Read More
            <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
        </a>
    </div>
</div>