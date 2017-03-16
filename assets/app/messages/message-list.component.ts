import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                [inputMessage]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.messages = this.messageService.getMessages();
    }
}