<?php
$pageTitle = $pageTitle ?? 'UNDP';
$pageDescription = $pageDescription ?? 'UNDP';
$langDir = $_GET["dir"] ?? "ltr"
?>

<!doctype html>
<html lang="en" <?= $langDir !== "ltr" ? "dir='".$langDir."'" : "" ?>>
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
</head>
