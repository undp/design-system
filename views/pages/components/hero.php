<?php use helpers\View;?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Hero Components']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">
    <div class="grid-container">
        <div class="heading h2 component-title">Global Hero Option 1</div>
    </div>
    <?php
        View::render('organisms/hero/global-hero-1', [
            'title' => 'GLOBAL</br> LEVEL HERO </br>HEADLINE',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'imageUrl' => '/assets/images/placeholder/hero/global-hero-01-img.jpg',
            'imageMobileUrl' => '/assets/images/placeholder/hero/global-hero-1-mobile.jpg'
        ]);
    ?>

    <div class="grid-container">
        <div class="heading h2 component-title">Global Hero Option 1 - Video</div>
    </div>
    <?php
        View::render('organisms/hero/global-hero-1', [
            'title' => 'GLOBAL</br> LEVEL HERO </br>HEADLINE',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'videoUrl' => 'https://vod-progressive.akamaized.net/exp=1614385975~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1140%2F20%2F505700887%2F2317719330.mp4~hmac=9092ca8a844e3a270ae50e019816a9e2ebbbec9f0d8952ead471e5b9768c1f5b/vimeo-prod-skyfire-std-us/01/1140/20/505700887/2317719330.mp4?filename=hero-partnerships-desktop.mp4',
        ]);
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Global Hero Option 2</div>
    </div>
    <?php
        View::render('organisms/hero/global-hero-2', [
            'title' => 'Global Level Hero',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'imageUrl' => '/assets/images/placeholder/hero/hero-2-image.png',
            'imageMobileUrl' => '/assets/images/placeholder/hero/global-hero-2-mobile.jpg'
        ]);
    ?>

    <div class="grid-container">
        <div class="heading h2 component-title">Global Hero Option 2 - Video</div>
    </div>
    <?php
    View::render('organisms/hero/global-hero-2', [
        'title' => 'Global Level Hero',
        'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
        'videoUrl' => 'https://vod-progressive.akamaized.net/exp=1614385975~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1140%2F20%2F505700887%2F2317719330.mp4~hmac=9092ca8a844e3a270ae50e019816a9e2ebbbec9f0d8952ead471e5b9768c1f5b/vimeo-prod-skyfire-std-us/01/1140/20/505700887/2317719330.mp4?filename=hero-partnerships-desktop.mp4',
    ]);
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 1</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-1', [
            'subtitle' => 'Re-imagining Life in a Post-pandemic World',
            'title' => 'COUNTRY LEVEL HERO HEADLINE',
            'description' => 'As we ‘come to our feet’ to respond to public health issues at the borders, key 
                              messages on Covid-19 should be reinforced, border security enhanced…',
            'imageUrl' => '../../../assets/images/placeholder/hero/country-hero-img.jpg'
        ])
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 2</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-2', [
            'subtitle' => 'Re-imagining Life in a Post-pandemic World',
            'title' => 'COUNTRY LEVEL HERO HEADLINE',
            'description' => 'As we ‘come to our feet’ to respond to public health issues at the borders, key 
                              messages on Covid-19 should be reinforced, border security enhanced…',
            'imageUrl' => '../../../assets/images/placeholder/hero/country-hero-img.jpg'
        ])
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 3</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-3', [
            'subtitle' => 'Sierra Leone',
            'title' => 'Sierra Leone Youth Minister Launches 2020 Social Good Summit',
            'description' => 'As we ‘come to our feet’ to respond to public health issues at the borders, key 
                              messages on Covid-19 should be reinforced, border security enhanced…',
            'imageUrl' => '../../../assets/images/placeholder/hero/country-hero-img.jpg'
        ])
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 4</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-4', [
            'title' => 'GLOBAL</br> LEVEL HERO </br>HEADLINE',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'imageUrl' => '/assets/images/placeholder/hero/country-hero-4-image.jpg',
            'imageMobileUrl' => '/assets/images/placeholder/hero/country-hero-img-mobile.jpg'
        ]);
    ?>

    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 4 - Video</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-4', [
            'title' => 'GLOBAL</br> LEVEL HERO </br>HEADLINE',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'videoUrl' => 'https://vod-progressive.akamaized.net/exp=1614385975~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1140%2F20%2F505700887%2F2317719330.mp4~hmac=9092ca8a844e3a270ae50e019816a9e2ebbbec9f0d8952ead471e5b9768c1f5b/vimeo-prod-skyfire-std-us/01/1140/20/505700887/2317719330.mp4?filename=hero-partnerships-desktop.mp4',
        ]);
    ?>


    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 5</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-5', [
            'title' => 'We’re changing the world. Here’s how to help.',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'imageUrl' => '/assets/images/placeholder/hero/country-hero-5-img.jpg',
            'imageMobileUrl' => '/assets/images/placeholder/hero/country-hero-5-mobile.jpg'
        ]);
    ?>

    <div class="grid-container">
        <div class="heading h2 component-title">Country Hero Option 5 - Video</div>
    </div>
    <?php
        View::render('organisms/hero/country-hero-5', [
            'title' => 'We’re changing the world. Here’s how to help.',
            'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
            'videoUrl' => 'https://vod-progressive.akamaized.net/exp=1614385975~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1140%2F20%2F505700887%2F2317719330.mp4~hmac=9092ca8a844e3a270ae50e019816a9e2ebbbec9f0d8952ead471e5b9768c1f5b/vimeo-prod-skyfire-std-us/01/1140/20/505700887/2317719330.mp4?filename=hero-partnerships-desktop.mp4',
        ]);
    ?>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
