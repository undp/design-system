<?php
use helpers\View;
$imgPath = '/assets/images/placeholder/leadership';
?>

<section class="leader-cards grid-container">
    <div class="grid-x">
        <div class="cell medium-9 medium-offset-2">
            <div class="grid-x grid-margin-x">
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Mourad Wahba',
                        'image' => "$imgPath/mourad-wahba@2x.jpg",
                        'titles' => [
                            'Associate Administrator (a.i.);',
                            'Regional Bureau for Arab States',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Kanni Wignaraja',
                        'image' => "$imgPath/kanni-wignaraja@2x.jpg",
                        'titles' => [
                            'Regional Bureau for Asia and the Pacific',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Mirjana Spoljaric Egger',
                        'image' => "$imgPath/mirjana-spoljaric-egger@2x.jpg",
                        'titles' => [
                            'Regional Bureau for Europe and the Commonwealth of Independent States',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Ahunna Eziakonwa',
                        'image' => "$imgPath/ahunna-eziakonwa@2x.jpg",
                        'titles' => [
                            'Regional Bureau for Africa',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Luis Felipe López-Calva',
                        'image' => "$imgPath/luis-felipe@2x.jpg",
                        'titles' => [
                            'Regional Bureau for Latin America and the Caribbean',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Ulrika Modéer',
                        'image' => "$imgPath/ulrika-modeer@2x.jpg",
                        'titles' => [
                            'Bureau of External Relations and Advocacy',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Asako Okai',
                        'image' => "$imgPath/asako-okai @2x.jpg",
                        'titles' => [
                            'UN Assistant Secretary General, UNDP Assistant Administrator and Director of the Crisis Bureau',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Angelique M. Crumbly',
                        'image' => "$imgPath/angelique-crumbly@2x.jpg",
                        'titles' => [
                            'UN Assistant Secretary-General, UNDP Assistant Administrator and Director of the Bureau for Management Services',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Haoliang Xu',
                        'image' => "$imgPath/haoliang-xu@2x.jpg",
                        'titles' => [
                            'UN Assistant Secretary-General, UNDP Assistant Administrator and Director of Bureau for Policy and Programme Support',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Barbara Pesce-Monteiro',
                        'image' => "$imgPath/barbara-pesce-monteiro@2x.jpg",
                        'titles' => [
                            'Director of UNDP’s Representation Office in Brussels, UN Secretary-General’s Representative',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/small-leader-card', [
                        'name' => 'Pierre Harzé',
                        'image' => "$imgPath/pierre-harze@2x.jpg",
                        'titles' => [
                            'Deputy Director for Programme and Operation',
                        ],
                        'link' => '#'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
