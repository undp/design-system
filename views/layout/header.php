<?php
$pageTitle = $pageTitle ?? 'UNDP';
$pageDescription = $pageDescription ?? 'UNDP';

$lang = $_GET["lang"] ?? "en";
$langDir = $_GET["dir"] ?? "ltr";
$langSupportPath = "dist/lang-support/lang-$lang.css";
?>

<!doctype html>
<html lang="<?= $lang ?>" <?= $langDir !== "ltr" ? "dir='".$langDir."'" : "" ?>>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="<?= $pageDescription ?>"/>

    <title><?= $pageTitle ?></title>

    <?php if($langDir === "rtl"): ?>
        <link href="/dist/app-rtl.css" rel="stylesheet">
    <?php else: ?>
        <link href="/dist/app.css" rel="stylesheet">
    <?php endif; ?>

    <?php if (file_exists($langSupportPath)) : ?>
        <link href="<?= "/$langSupportPath" ?>" rel="stylesheet">
    <?php endif; ?>
</head>
