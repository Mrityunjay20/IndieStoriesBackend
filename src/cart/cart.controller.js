"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
var common_1 = require("@nestjs/common");
var CartController = function () {
    var _classDecorators = [(0, common_1.Controller)('cart')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createCart_decorators;
    var _getCart_decorators;
    var _addItemToCart_decorators;
    var _removeItemFromCart_decorators;
    var _clearCart_decorators;
    var CartController = _classThis = /** @class */ (function () {
        function CartController_1(cartService) {
            this.cartService = (__runInitializers(this, _instanceExtraInitializers), cartService);
        }
        CartController_1.prototype.createCart = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cartService.createCart(user)];
                });
            });
        };
        CartController_1.prototype.getCart = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cartService.getCart(user)];
                        case 1:
                            result = _a.sent();
                            console.log(result);
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        CartController_1.prototype.addItemToCart = function (productId, createCartDto) {
            return __awaiter(this, void 0, void 0, function () {
                var user, quantity;
                return __generator(this, function (_a) {
                    user = createCartDto.user, quantity = createCartDto.quantity;
                    // Validate quantity
                    if (quantity < 1) {
                        throw new common_1.BadRequestException('Quantity must be greater than 0');
                    }
                    return [2 /*return*/, this.cartService.addItemToCart(user, productId, quantity)];
                });
            });
        };
        CartController_1.prototype.removeItemFromCart = function (user, productId) {
            return this.cartService.removeItemFromCart(user, productId);
        };
        CartController_1.prototype.clearCart = function (user) {
            return this.cartService.clearCart(user);
        };
        return CartController_1;
    }());
    __setFunctionName(_classThis, "CartController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createCart_decorators = [(0, common_1.Post)('create')];
        _getCart_decorators = [(0, common_1.Post)()];
        _addItemToCart_decorators = [(0, common_1.Post)('add/:productId')];
        _removeItemFromCart_decorators = [(0, common_1.Delete)('remove/:productId')];
        _clearCart_decorators = [(0, common_1.Delete)('clear')];
        __esDecorate(_classThis, null, _createCart_decorators, { kind: "method", name: "createCart", static: false, private: false, access: { has: function (obj) { return "createCart" in obj; }, get: function (obj) { return obj.createCart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCart_decorators, { kind: "method", name: "getCart", static: false, private: false, access: { has: function (obj) { return "getCart" in obj; }, get: function (obj) { return obj.getCart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addItemToCart_decorators, { kind: "method", name: "addItemToCart", static: false, private: false, access: { has: function (obj) { return "addItemToCart" in obj; }, get: function (obj) { return obj.addItemToCart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeItemFromCart_decorators, { kind: "method", name: "removeItemFromCart", static: false, private: false, access: { has: function (obj) { return "removeItemFromCart" in obj; }, get: function (obj) { return obj.removeItemFromCart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _clearCart_decorators, { kind: "method", name: "clearCart", static: false, private: false, access: { has: function (obj) { return "clearCart" in obj; }, get: function (obj) { return obj.clearCart; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartController = _classThis;
}();
exports.CartController = CartController;
