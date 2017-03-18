/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './message.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import7 from './message.service';
import * as import9 from '@angular/core/src/i18n/tokens';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../errors/error.service';
var MessageModuleInjector = (function (_super) {
    __extends(MessageModuleInjector, _super);
    function MessageModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(MessageModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import9.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageModuleInjector.prototype, "_RadioControlRegistry_5", {
        get: function () {
            if ((this.__RadioControlRegistry_5 == null)) {
                (this.__RadioControlRegistry_5 = new import6.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageModuleInjector.prototype, "_MessageService_6", {
        get: function () {
            if ((this.__MessageService_6 == null)) {
                (this.__MessageService_6 = new import7.MessageService(this.parent.get(import10.Http), this.parent.get(import11.ErrorService)));
            }
            return this.__MessageService_6;
        },
        enumerable: true,
        configurable: true
    });
    MessageModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
        this._FormsModule_2 = new import4.FormsModule();
        this._MessageModule_3 = new import1.MessageModule();
        return this._MessageModule_3;
    };
    MessageModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_1;
        }
        if ((token === import4.FormsModule)) {
            return this._FormsModule_2;
        }
        if ((token === import1.MessageModule)) {
            return this._MessageModule_3;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import6.RadioControlRegistry)) {
            return this._RadioControlRegistry_5;
        }
        if ((token === import7.MessageService)) {
            return this._MessageService_6;
        }
        return notFoundResult;
    };
    MessageModuleInjector.prototype.destroyInternal = function () {
    };
    return MessageModuleInjector;
}(import0.NgModuleInjector));
export var MessageModuleNgFactory = new import0.NgModuleFactory(MessageModuleInjector, import1.MessageModule);
//# sourceMappingURL=message.module.ngfactory.js.map