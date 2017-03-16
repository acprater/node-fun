import { Component, Input, Output, EventEmitter } from "@angular/core";

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [ `
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input('inputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();
    
    constructor(private MessageService: MessageService) {}

    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.MessageService.deleteMessage(this.message);
    }
}