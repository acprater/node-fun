import { Component } from '@angular/core';
export var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n        <header class=\"row\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-pills\">\n                    <li routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/messages']\">\n                            <span class=\"glyphicon glyphicon-inbox\"></span> Messenger\n                        </a>\n                    </li>\n                    <li routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/auth/logout']\">\n                            <span class=\"glyphicon glyphicon-user\"></span> Authentication\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </header>\n    "
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [];
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map