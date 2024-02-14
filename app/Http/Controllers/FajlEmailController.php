<?php

namespace App\Http\Controllers;

use App\Mail\FajlEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class FajlEmailController extends Controller
{

    public function fajlKuldes(Request $request)
    {
        // dd($request->fajlNev);
        $data = $request->all(); // A frontend által küldött adatok
        $fajlNev = $request->fajlNev; // A frontend által küldött adatok
        // dd($fajlNev);
        // Itt dolgozhatja fel az adatokat, például előkészítheti az e-mail tartalmát

        // Például elküldheti az e-mailt
        Mail::to('weinbergerpeti@gmail.com')->send(new FajlEmail($fajlNev));

        // return response()->json(['message' => 'Email sent successfully']);
        
        dd("Email sikeresen elküldve!");

        return 'Az email elküldve!';
    }


    public function kuldes()
    {
        $adatok = [
            'nev' => 'John Doe',
            'email' => 'john@example.com',
            'uzenet' => 'Ez egy példa üzenet.',
        ];

        // Elküldjük az emailt
        Mail::to('weinbergerpeti@gmail.com')->send(new FajlEmail($adatok));

        dd("Email is sent successfully.");

        // return 'Az email elküldve!';
    }

    public function fajlokKimentese(Request $request)
    {
        // $students = DB::table('mail_senders')
        //     ->select('student_id', 'nev', 'email', 'pdf_name') //, 'p.path'
        //     ->get();
        // dd($request->all());
        $fajlok = $request->all();

        $timestamp = now()->format('Y-m-d_H-i');
        $jsonFileName = 'mailFajlok_' . $timestamp . '.json';

        $jsonContent = json_encode($fajlok, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        Storage::put('/jsonScriptek/' . $jsonFileName, $jsonContent);

        return $fajlok;
    }
}
