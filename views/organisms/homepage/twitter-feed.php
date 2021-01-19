<?php
use helpers\View;
?>
<section class="twitter-feed">
    <div class="grid-container">
        <div class="grid-container">
            <div class="grid-x grid-padding-x tweets">
                <div class="cell small-12 medium-3 scroll-track left-right delay-2 regular">
                    <?php View::render('molecules/cards/tweet', [
                        'date' => '12/2/2020',
                        'time' => '5:00:11 PM',
                        'description' => 'Disaster risk governance done well can be the difference between: life and death; being injured or being fit; having a roof over your head or being homeless.</a>',
                        'cta' => 'Read more',
                        'name' => 'UN Development',
                        'userName' => '@UNDP',
                        'urlImage' => '/assets/images/undp-twitter.jpg',
                        'alt' => 'UNDP twitter 1',
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-3 regular">
                    <?php View::render('molecules/cards/tweet', [
                        'date' => '12/2/2020',
                        'time' => '5:00:11 PM',
                        'description' => 'Despite the pandemic, 114 countries are working with us to deliver the #ClimatePromise.
            This International Day for Disaster Risk Reduction, see how we’re delivering the #ParisAgreement promise for a greener, safer, & healthier future:
            <a href="" target="_blank">https://bit.ly/2FWFsqH</a>',
                        'cta' => 'Read more',
                        'name' => 'UN Development',
                        'userName' => '@UNDP',
                        'urlImage' => '/assets/images/undp-twitter.jpg',
                        'alt' => 'UNDP twitter 2',
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-4 regular">
                    <?php View::render('molecules/cards/tweet', [
                        'date' => '12/2/2020',
                        'time' => '5:00:11 PM',
                        'description' => 'This #DayOfTheGirl, see seven ways girls and women are using tech to create social change in their communities this Decade of Action: <a href="" target="_blank">https://bit.ly/2FoCfR6</a>',
                        'cta' => 'Read more',
                        'name' => 'UN Development',
                        'userName' => '@UNDP',
                        'urlImage' => '/assets/images/undp-twitter.jpg',
                        'alt' => 'UNDP twitter 3',
                    ]) ?>
                </div>
                <div class="cell small-12 medium-3 scroll-track left-right delay-5 regular">
                    <?php View::render('molecules/cards/tweet', [
                        'date' => '12/2/2020',
                        'time' => '5:00:11 PM',
                        'description' => 'This #DayofTheGirl, meet some of the young activists who are on the frontlines of the global #ClimateAction movement: <a href="" target="_blank">https://bit.ly/2SQ5lvv</a>',
                        'cta' => 'Read more',
                        'name' => 'UN Development',
                        'userName' => '@UNDP',
                        'urlImage' => '/assets/images/undp-twitter.jpg',
                        'alt' => 'UNDP twitter 4',
                    ]) ?>
                </div>
            </div>
        </div>
    </div>
</section>
