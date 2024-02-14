<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class FajlEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $mailAdat;
    public function __construct($mailAdat)
    {
        $this->mailAdat=$mailAdat;
        // dd($mailAdat);
    }

    // public function build()
    // {
    //     return $this->view('email.mailAdat')
    //                 ->with([
    //                     'mailAdat' => $this->mailAdat,
    //                 ]);
    // }

    // public function build()
    // {
    //     // return $this->view('email.emailKuldo')->with(['data' => $this->mailAdat]);

    //     return $this->view('email.emailKuldo')
    //     ->subject('Fájl küldése');
    // }


    // public function build()
    // {
    //     return $this->markdown('emails.SendFile')
    //         ->subject('Welcome to finance hub')
    //         ->attach(
    //             $this->mailAdat->getRealPath(),
    //             [
    //                 'as' =>  $this->mailAdat->getClientOriginalName(),
    //                 'mime' =>  $this->mailAdat->getClientMimeType(),
    //             ]
    //         );
    // }


    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Fajl Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.emailKuldo',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments()
    {
        $attachments = [];



        foreach ($this->mailAdat as $csatolmany) {
            // $attachments[] = Attachment::fromStore(storage_path('app/jsonScriptek/' . $csatolmany));
            $this->attach(storage_path('app/jsonScriptek/' . $csatolmany));
        }

        // foreach ($attachments as $attachment) {
        //     $this->attach($attachment);
        // }
    
        // return $this;
    }
}
