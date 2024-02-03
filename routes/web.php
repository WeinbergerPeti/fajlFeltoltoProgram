<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentMailController;
use App\Mail\StudentEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return view('index');
});
//Email küldéshez kellő útvonalak
Route::get('send_mail', [StudentMailController::class, 'index']);
Route::get('api/email_pdfel', [StudentMailController::class, 'emailPdfel']);
//api/pdfdata   ->diak kód, pdf neve, 
Route::post('/api/pdfdata', [])
//
Route::get('api/data_jsonbe', [StudentController::class, 'mailDatasJsonba']);
Route::get('api/student_data_jsonbe', [StudentController::class, 'studentDatasJsonba']);