<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token;?>>
    <title>Document</title>
</head>
<body>
    <div>
        <p>Üdvözöljük!</p>

        <p>Itt az Ön által kért adatok:</p>
        <ul>
            <li>Fájlnév: {{ $mailAdat['nev'] }}</li>
            <li>Kód: {{ $mailAdat['uzenet'] }}</li>
        </ul>
    </div>
</body>
</html>