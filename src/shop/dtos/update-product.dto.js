"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductDto = void 0;
var class_validator_1 = require("class-validator");
var updateProductDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _sku_decorators;
    var _sku_initializers = [];
    var _sku_extraInitializers = [];
    var _origin_decorators;
    var _origin_initializers = [];
    var _origin_extraInitializers = [];
    var _benefits_decorators;
    var _benefits_initializers = [];
    var _benefits_extraInitializers = [];
    var _uses_decorators;
    var _uses_initializers = [];
    var _uses_extraInitializers = [];
    var _ingredients_decorators;
    var _ingredients_initializers = [];
    var _ingredients_extraInitializers = [];
    var _safetyInformation_decorators;
    var _safetyInformation_initializers = [];
    var _safetyInformation_extraInitializers = [];
    var _video1_decorators;
    var _video1_initializers = [];
    var _video1_extraInitializers = [];
    var _video2_decorators;
    var _video2_initializers = [];
    var _video2_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _discountprice_decorators;
    var _discountprice_initializers = [];
    var _discountprice_extraInitializers = [];
    var _imageUrl_decorators;
    var _imageUrl_initializers = [];
    var _imageUrl_extraInitializers = [];
    var _bannerUrl_decorators;
    var _bannerUrl_initializers = [];
    var _bannerUrl_extraInitializers = [];
    return _a = /** @class */ (function () {
            function updateProductDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.id = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.category = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _category_initializers, void 0));
                this.sku = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _sku_initializers, void 0));
                this.origin = (__runInitializers(this, _sku_extraInitializers), __runInitializers(this, _origin_initializers, void 0));
                this.benefits = (__runInitializers(this, _origin_extraInitializers), __runInitializers(this, _benefits_initializers, void 0));
                this.uses = (__runInitializers(this, _benefits_extraInitializers), __runInitializers(this, _uses_initializers, void 0));
                this.ingredients = (__runInitializers(this, _uses_extraInitializers), __runInitializers(this, _ingredients_initializers, void 0));
                this.safetyInformation = (__runInitializers(this, _ingredients_extraInitializers), __runInitializers(this, _safetyInformation_initializers, void 0));
                this.video1 = (__runInitializers(this, _safetyInformation_extraInitializers), __runInitializers(this, _video1_initializers, void 0));
                this.video2 = (__runInitializers(this, _video1_extraInitializers), __runInitializers(this, _video2_initializers, void 0));
                this.description = (__runInitializers(this, _video2_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.price = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                this.discountprice = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _discountprice_initializers, void 0));
                this.imageUrl = (__runInitializers(this, _discountprice_extraInitializers), __runInitializers(this, _imageUrl_initializers, void 0));
                this.bannerUrl = (__runInitializers(this, _imageUrl_extraInitializers), __runInitializers(this, _bannerUrl_initializers, void 0));
                __runInitializers(this, _bannerUrl_extraInitializers);
            }
            return updateProductDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _id_decorators = [(0, class_validator_1.IsNumber)()];
            _category_decorators = [(0, class_validator_1.IsString)()];
            _sku_decorators = [(0, class_validator_1.IsString)()];
            _origin_decorators = [(0, class_validator_1.IsString)()];
            _benefits_decorators = [(0, class_validator_1.IsString)()];
            _uses_decorators = [(0, class_validator_1.IsString)()];
            _ingredients_decorators = [(0, class_validator_1.IsString)()];
            _safetyInformation_decorators = [(0, class_validator_1.IsString)()];
            _video1_decorators = [(0, class_validator_1.IsString)()];
            _video2_decorators = [(0, class_validator_1.IsString)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _price_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDecimal)()];
            _discountprice_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDecimal)()];
            _imageUrl_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)()];
            _bannerUrl_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
            __esDecorate(null, null, _sku_decorators, { kind: "field", name: "sku", static: false, private: false, access: { has: function (obj) { return "sku" in obj; }, get: function (obj) { return obj.sku; }, set: function (obj, value) { obj.sku = value; } }, metadata: _metadata }, _sku_initializers, _sku_extraInitializers);
            __esDecorate(null, null, _origin_decorators, { kind: "field", name: "origin", static: false, private: false, access: { has: function (obj) { return "origin" in obj; }, get: function (obj) { return obj.origin; }, set: function (obj, value) { obj.origin = value; } }, metadata: _metadata }, _origin_initializers, _origin_extraInitializers);
            __esDecorate(null, null, _benefits_decorators, { kind: "field", name: "benefits", static: false, private: false, access: { has: function (obj) { return "benefits" in obj; }, get: function (obj) { return obj.benefits; }, set: function (obj, value) { obj.benefits = value; } }, metadata: _metadata }, _benefits_initializers, _benefits_extraInitializers);
            __esDecorate(null, null, _uses_decorators, { kind: "field", name: "uses", static: false, private: false, access: { has: function (obj) { return "uses" in obj; }, get: function (obj) { return obj.uses; }, set: function (obj, value) { obj.uses = value; } }, metadata: _metadata }, _uses_initializers, _uses_extraInitializers);
            __esDecorate(null, null, _ingredients_decorators, { kind: "field", name: "ingredients", static: false, private: false, access: { has: function (obj) { return "ingredients" in obj; }, get: function (obj) { return obj.ingredients; }, set: function (obj, value) { obj.ingredients = value; } }, metadata: _metadata }, _ingredients_initializers, _ingredients_extraInitializers);
            __esDecorate(null, null, _safetyInformation_decorators, { kind: "field", name: "safetyInformation", static: false, private: false, access: { has: function (obj) { return "safetyInformation" in obj; }, get: function (obj) { return obj.safetyInformation; }, set: function (obj, value) { obj.safetyInformation = value; } }, metadata: _metadata }, _safetyInformation_initializers, _safetyInformation_extraInitializers);
            __esDecorate(null, null, _video1_decorators, { kind: "field", name: "video1", static: false, private: false, access: { has: function (obj) { return "video1" in obj; }, get: function (obj) { return obj.video1; }, set: function (obj, value) { obj.video1 = value; } }, metadata: _metadata }, _video1_initializers, _video1_extraInitializers);
            __esDecorate(null, null, _video2_decorators, { kind: "field", name: "video2", static: false, private: false, access: { has: function (obj) { return "video2" in obj; }, get: function (obj) { return obj.video2; }, set: function (obj, value) { obj.video2 = value; } }, metadata: _metadata }, _video2_initializers, _video2_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            __esDecorate(null, null, _discountprice_decorators, { kind: "field", name: "discountprice", static: false, private: false, access: { has: function (obj) { return "discountprice" in obj; }, get: function (obj) { return obj.discountprice; }, set: function (obj, value) { obj.discountprice = value; } }, metadata: _metadata }, _discountprice_initializers, _discountprice_extraInitializers);
            __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: function (obj) { return "imageUrl" in obj; }, get: function (obj) { return obj.imageUrl; }, set: function (obj, value) { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _imageUrl_extraInitializers);
            __esDecorate(null, null, _bannerUrl_decorators, { kind: "field", name: "bannerUrl", static: false, private: false, access: { has: function (obj) { return "bannerUrl" in obj; }, get: function (obj) { return obj.bannerUrl; }, set: function (obj, value) { obj.bannerUrl = value; } }, metadata: _metadata }, _bannerUrl_initializers, _bannerUrl_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.updateProductDto = updateProductDto;
