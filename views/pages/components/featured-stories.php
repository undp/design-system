<?php use helpers\View; ?>

<section class="featured-stories">
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 medium-4">
                <div class="title-container">
                    <div class="section-title">
                        <h2 class="heading h2">
                            Featured
                        </h2>
                        <h2 class="heading h2">
                            Stories
                        </h2>
                    </div>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <div class="story-card light">
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
                        <a class="text-link arrow-1" href="#">
                            Read More
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                        </a>
                    </div>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <div class="story-card-image hide-medium" style="background: url('../../../assets/images/featured-stories.png') center 0 / cover no-repeat;">
                    <a class="text-link arrow-2" href="#">
                        Explore
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                    </a>
                </div>

                <div class="story-card light hide-large">
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
                        <a class="text-link arrow-1" href="#">
                            Read More
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="cell medium-4 large-8">
                <div class="story-card large dark hide-medium hide-small">
                    <p class="tag">
                        Content Tag
                    </p>
                    <h4 class="heading h4">
                        Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt
                    </h4>
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

                <div class="story-card-image hide-large" style="background: url('../../../assets/images/featured-stories.png') center 0 / cover no-repeat;">
                    <a class="text-link arrow-2" href="#">
                        Explore
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
                    </a>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <?php View::render('components/story-card') ?>
            </div>
            <div class="cell small-12 medium-4 hide-for-large">
                <?php View::render('components/story-card') ?>
            </div>
        </div>
    </div>
</section>