<?php
use helpers\Svg;
?>
<section class="featured-content-card">
    <div class="grid-container">
        <div class="grid-x main-container">
            <div class="cell medium-6 featured-data">
                <div class="tag show-for-medium">Video</div>
                <h2 class="heading h4">UNDP’s Country Programme for Sierra Leone: 2020 to 2023</h2>
                <div class="excerpt">
                    <p class="big-copy">The UNDP Executive Board approved the Sierra Leone’s 4-year Country Programme Document (CPD) on the 4th September 2020. The CPD is a core strategic document that guides UNDP’s development assistance to the Government of Sierra Leone (GOSL).</p>
                    <p class="big-copy">The CPD will focus on enhancing the ability of state institutions to deliver services to citizens using a coordinated and sustainable</p>
                </div>
                <button class="btn">
                    <span>Watch video</span>
                    <?php Svg::render('btn-arrow-blue', true, 'Explore', 'assets/images/arrows/')?>
                </button>
            </div>
            <div class="cell medium-6 image-container" style="background-image: url('../../../assets/images/placeholder/cards/featured-content-card.jpg')"></div>
            <div class="cell hide-for-medium">
                <div class="tag">Video</div>
            </div>
        </div>
    </div>
</section>
