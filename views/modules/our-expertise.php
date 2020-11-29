<?php
use helpers\View;
?>
<div class="our-expertise">
    <div class="grid-container hide-for-small-only">
        <div class="grid-x our-expertise-row ">
            <div class="small-offset-1 small-11 medium-offset-1 medium-5 hide-for-small-only">
                <div class="section-title">
                    <h2 class="heading h2">Our</h2>
                    <h2 class="heading h2">
                        Expertise
                    </h2>
                </div>
            </div>
            <div class="cell small-10 medium-3 expertise-section-text">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'People',
                        'description' => 'We are determined to end poverty and hunger, in all their forms and dimensions, and to ensure that all human beings can fulfil their potential in dignity and equality and in a healthy environment.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell small-10 medium-3 expertise-section-image">
                <div class="expertise-image">
                    <div class="background-video hide-for-small-only">
                        <video src="https://player.vimeo.com/external/477328671.sd.mp4?s=802e70ad5a37b78d49301875e78f4c36c15418a0&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                    </div>
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-1.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell small-10 medium-3 expertise-section-image">
                <div class="expertise-image">
                    <div class="background-video hide-for-small-only">
                        <video src="https://player.vimeo.com/external/478247383.sd.mp4?s=94744ea0dcaed3ec3f7a51dd1fc9ba4705ccc9df&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                    </div>
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-2.jpeg'
                        ])
                    ?>
                </div>
            </div>
            <div class="cell small-10 medium-3 expertise-section-text">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Planet',
                        'description' => 'We are determined to protect the planet from degradation, through sustainable consumption and production, sustainably managing its natural resources and taking urgent action on climate change, so that it can support the needs of the present and future generations.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell small-10 medium-3 medium-offset-6 expertise-section-text">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Prosperity',
                        'description' => 'We are determined to ensure that all human beings can enjoy prosperous and fulfilling lives and that economic, social and technological progress occurs in harmony with nature.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell small-10 medium-3 expertise-section-image">
                <div class="expertise-image">
                    <div class="background-video hide-for-small-only">
                        <video src="https://player.vimeo.com/external/478247389.sd.mp4?s=b3b51d67a8018dae0e0cacc8bb0b18fa2c7e9b4a&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                    </div>
                    <?php
                        View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-3.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell small-10 medium-3 expertise-section-image">
                <div class="expertise-image">
                    <div class="background-video hide-for-small-only">
                        <video src="https://player.vimeo.com/external/478247434.sd.mp4?s=1e617d39a7b53c5d3a7b47d8a7516f534effdb5b&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                    </div>
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-4.jpeg'
                        ])
                    ?>
                </div>
            </div>
            <div class="cell small-10 medium-3 expertise-section-text">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Peace',
                        'description' => 'We are determined to foster peaceful, just and inclusive societies which are free from fear and violence. There can be no sustainable development without peace and no peace without sustainable development.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell small-10 medium-3 medium-offset-6 expertise-section-text">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Partnership',
                        'description' => 'We are determined to mobilize the means required to implement this Agenda through a revitalized Global Partnership for Sustainable Development, based on a spirit of strengthened global solidarity, focused in particular on the needs of the poorest and most vulnerable and with the participation of all countries, all stakeholders and all people.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell small-10 medium-3 expertise-section-image">
                <div class="expertise-image">
                    <div class="background-video hide-for-small-only">
                        <video src="https://player.vimeo.com/external/478247411.sd.mp4?s=908b276285cd8792b5d7614afcac51f040daac07&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                    </div>
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-5.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div class="glide-expertise show-for-small-only">
        <div class="grid-x">
            <div class="small-offset-1 small-11">
                <div class="section-title">
                    <h2 class="heading h2">Our</h2>
                    <h2 class="heading h2">
                        Expertise
                    </h2>
                </div>
            </div>
        </div>
        <div class="glide__track" data-glide-el="track"]>
            <ul class="glide__slides">
                <div class="grid-x our-expertise-row glide__slide">
                    <div class="small-offset-1 small-11 medium-offset-1 medium-5 hide-for-small-only">
                        <div class="section-title">
                            <h2 class="heading h2">Our</h2>
                            <h2 class="heading h2">
                                Expertise
                            </h2>
                        </div>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-text">
                        <?php
                        View::render('components/expertise-card', [
                            'title' => 'People',
                            'description' => 'We are determined to end poverty and hunger, in all their forms and dimensions, and to ensure that all human beings can fulfil their potential in dignity and equality and in a healthy environment.',
                            'cta' => 'Read more'
                        ])
                        ?>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-image">
                        <div class="expertise-image">
                            <div class="background-video hide-for-small-only">
                                <video src="https://player.vimeo.com/external/477328671.sd.mp4?s=802e70ad5a37b78d49301875e78f4c36c15418a0&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                            </div>
                            <?php
                            View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-1.jpeg'
                            ])
                            ?>
                        </div>
                    </div>
                </div>
                <div class="grid-x our-expertise-row glide__slide">
                    <div class="cell small-10 medium-3 expertise-section-image">
                        <div class="expertise-image">
                            <div class="background-video hide-for-small-only">
                                <video src="https://player.vimeo.com/external/478247383.sd.mp4?s=94744ea0dcaed3ec3f7a51dd1fc9ba4705ccc9df&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                            </div>
                            <?php
                            View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-2.jpeg'
                            ])
                            ?>
                        </div>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-text">
                        <?php
                        View::render('components/expertise-card', [
                            'title' => 'Planet',
                            'description' => 'We are determined to protect the planet from degradation, through sustainable consumption and production, sustainably managing its natural resources and taking urgent action on climate change, so that it can support the needs of the present and future generations.',
                            'cta' => 'Read more'
                        ])
                        ?>
                    </div>
                </div>
                <div class="grid-x our-expertise-row glide__slide">
                    <div class="cell small-10 medium-3 medium-offset-6 expertise-section-text">
                        <?php
                        View::render('components/expertise-card', [
                            'title' => 'Prosperity',
                            'description' => 'We are determined to ensure that all human beings can enjoy prosperous and fulfilling lives and that economic, social and technological progress occurs in harmony with nature.',
                            'cta' => 'Read more'
                        ])
                        ?>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-image">
                        <div class="expertise-image">
                            <div class="background-video hide-for-small-only">
                                <video src="https://player.vimeo.com/external/478247389.sd.mp4?s=b3b51d67a8018dae0e0cacc8bb0b18fa2c7e9b4a&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                            </div>
                            <?php
                            View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-3.jpeg'
                            ])
                            ?>
                        </div>
                    </div>
                </div>
                <div class="grid-x our-expertise-row glide__slide">
                    <div class="cell small-10 medium-3 expertise-section-image">
                        <div class="expertise-image">
                            <div class="background-video hide-for-small-only">
                                <video src="https://player.vimeo.com/external/478247434.sd.mp4?s=1e617d39a7b53c5d3a7b47d8a7516f534effdb5b&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                            </div>
                            <?php
                            View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-4.jpeg'
                            ])
                            ?>
                        </div>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-text">
                        <?php
                        View::render('components/expertise-card', [
                            'title' => 'Peace',
                            'description' => 'We are determined to foster peaceful, just and inclusive societies which are free from fear and violence. There can be no sustainable development without peace and no peace without sustainable development.',
                            'cta' => 'Read more'
                        ])
                        ?>
                    </div>
                </div>
                <div class="grid-x our-expertise-row glide__slide">
                    <div class="cell small-10 medium-3 medium-offset-6 expertise-section-text">
                        <?php
                        View::render('components/expertise-card', [
                            'title' => 'Partnership',
                            'description' => 'We are determined to mobilize the means required to implement this Agenda through a revitalized Global Partnership for Sustainable Development, based on a spirit of strengthened global solidarity, focused in particular on the needs of the poorest and most vulnerable and with the participation of all countries, all stakeholders and all people.',
                            'cta' => 'Read more'
                        ])
                        ?>
                    </div>
                    <div class="cell small-10 medium-3 expertise-section-image">
                        <div class="expertise-image">
                            <div class="background-video hide-for-small-only">
                                <video src="https://player.vimeo.com/external/478247411.sd.mp4?s=908b276285cd8792b5d7614afcac51f040daac07&profile_id=164" autoplay muted loop playsinline aria-hidden="true"></video>
                            </div>
                            <?php
                            View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-5.jpeg'
                            ])
                            ?>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
            <button class="glide__bullet" data-glide-dir="=4"></button>
        </div>
    </div>
</div>