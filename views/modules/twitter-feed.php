<?php
use helpers\View;
?>
<div class="twitter-feed">
    <div class="grid-container">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-offset-1 small-11 medium-offset-1 medium-11">
                    <div class="section-title scroll-track left-right delay-1 regular">
                        <h2 class="heading h2">
                            @UNDP
                        </h2>
                        <img src="/assets/images/icon-twitter-white.png" alt="">
                    </div>
                </div>
            </div>
            <div class="grid-x grid-padding-x tweets">
                <div class="cell small-12 medium-3 scroll-track left-right delay-2 regular">
                    <?php View::render('components/tweet', [
                        'date' => '3/10/20',
                        'time' => '5:30PM',
                        'description' => 'Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless.</a>',
                        'cta' => 'Read more'
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-3 regular">
                    <?php View::render('components/tweet', [
                        'date' => '3/10/20',
                        'time' => '5:30PM',
                        'description' => 'Despite the pandemic, 114 countries are working with us to deliver the #ClimatePromise.
            This International Day for Disaster Risk Reduction, see how we’re delivering the #ParisAgreement promise for a greener, safer, & healthier future:
            <a href="">https://bit.ly/2FWFsqH</a>',
                        'cta' => 'Read more'
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-4 regular">
                    <?php View::render('components/tweet', [
                        'date' => '3/10/20',
                        'time' => '5:30PM',
                        'description' => 'This #DayOfTheGirl, see seven ways girls and women are using tech to create social change in their communities this Decade of Action: <a href="">https://bit.ly/2FoCfR6</a>',
                        'cta' => 'Read more'
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-5 regular">
                    <?php View::render('components/tweet', [
                        'date' => '3/10/20',
                        'time' => '5:30PM',
                        'description' => 'This #DayofTheGirl, meet some of the young activists who are on the frontlines of the global #ClimateAction movement: <a href="">https://bit.ly/2SQ5lvv</a>',
                        'cta' => 'Read more'
                    ]) ?>
                </div>
            </div>
        </div>
    </div>
</div>