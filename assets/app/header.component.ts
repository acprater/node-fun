import { Component } from '@angular/core';
@Component ({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active">
                        <a [routerLink]="['/messages']">
                            <span class="glyphicon glyphicon-inbox"></span> Messenger
                        </a>
                    </li>
                    <li routerLinkActive="active">
                        <a [routerLink]="['/auth/logout']">
                            <span class="glyphicon glyphicon-user"></span> Authentication
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}