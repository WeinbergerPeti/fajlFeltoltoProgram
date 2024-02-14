<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\DemoMail;
use App\Mail\FajlEmail;
use App\Mail\StudentEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class StudentMailController extends Controller
{
    public function index()
    {
        $mailData = [
            'name' => 'Üzenet fogadó',

        ];

        Mail::to('weinbergerpeti@gmail.com')
            ->send(new StudentEmail($mailData));

        dd("Email is sent successfully.");
    }

    public function emailPdfel()
    {
        //$jsonFilePath = $mappa;//kuldestSegito -> itt lesz a json file ami a kiküldéshez kell
        // $jsonFilePath = storage_path('app/jsonScriptek/mailSenderData_2024-01-26_19-52.json');
        $jsonFilePath = storage_path('app/jsonScriptek/mailFajlok_2024-02-07_17-59.json');
        //mailSenderData_2024-01-26_18-56
        //studentEmailData_2024-01-26_15-54

        if (file_exists($jsonFilePath)) {
            $jsonContent = file_get_contents($jsonFilePath);
            $emails = json_decode($jsonContent);
            $db = 0;
            foreach ($emails as $email) {
                $mailData = [
                    'student_id' => $email->student_id,
                    'name' => $email->nev,
                    'email' => $email->email,
                    'pdf_name' => $email->pdf_name,
                    'path' => 'storage/kuldendoFajlok' //$email->path, //'storage/kuldendoFajlok'

                ];
                //print($mailData[$db]);
                //print($mailData['path'] . '/' . $mailData['pdf_name']);

                Mail::to($email->email)->send(new FajlEmail($mailData)); //, $pdfAdatok

                $db += 1;
            }
            dd("Emails elküldve: ");
        } else {
            dd("JSON file not found");
        }
    }

    public function mailDatasJsonba()
    {
        $students = DB::table('mail_senders')
            ->select('student_id', 'nev', 'email', 'pdf_name') //, 'p.path'
            ->get();

        $timestamp = now()->format('Y-m-d_H-i');
        $jsonFileName = 'mailSenderData_' . $timestamp . '.json';

        $jsonContent = json_encode($students, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        Storage::put('/jsonScriptek/' . $jsonFileName, $jsonContent);

        return $students;
    }

}
