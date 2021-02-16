<?php
use helpers\View;
$imgPath = '/assets/images/placeholder/leadership';
?>

<section class="leader-cards grid-container">
    <div class="grid-x">
        <div class="cell medium-6 medium-offset-3">
            <?php
            View::render('molecules/cards/leader-card', [
                'name' => 'Barbara Pesce-Monteiro',
                'image' => "$imgPath/barbara-pesce-monteiro@2x.jpg",
                'titles' => [
                    'Director of UNDP’s Representation Office in Brussels, UN Secretary-General’s Representative',
                ],
                'link' => '#'
            ])
            ?>
        </div>
    </div>
</section>
