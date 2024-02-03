<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

use function PHPSTORM_META\map;

class StudentEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $mailData;
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    public function build()
    {
        // return $this->view("email.blade")->subject("Tárgy mező");
        return $this->from("teszt.email.cim.fiok@gmail.com", "Teszt Fiók")
        ->subject("Tárgy mező")
        ->view('email.blade');
    }


    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address ('teszt.email.cim.fiok@gmail.com'),
            // subject: $this->mailData['subject'],
            subject: 'Student Email',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.students',
            //with: ['name' => $this.name]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        
        //print('storage/' . $mappaPath . '/' . $pdfName);
        //print($pdfName);
        //echo asset('storage/kuldendoFajlok/Jövedelemkifizetési lap - Diák Második (00525) 20231108_0829030.pdf');

        return [
            $mappaPath = $this->mailData['path'],
            $pdfName = $this->mailData['pdf_name'], //'valami';//
            Attachment::fromStore($mappaPath . '/' . $pdfName . '.pdf')
                ->withMime('application/pdf'),
        ];
    }
}
