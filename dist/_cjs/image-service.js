"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageService = void 0;
const constants_1 = require("./constants");
exports.imageService = {
    /**
     * @description Получение ссылки изображения банера акции Покупай выгодно
     * @param {string} guid guid акции (без расширения)
     * @returns {string} ссылка на изображение банера акции
     */
    getConditionOtherImgUrl: (guid) => constants_1.BASE_IMG_URL + constants_1.CONDITIONS_PATH + guid + '.png',
    /**
     * @description Получение ссылки изображения товара
     * @param {string} name - guid товара (с расширением)
     * @returns {string} ссылка на изображение товара
     */
    getProductImgUrl: (name) => constants_1.BASE_IMG_URL + constants_1.PRODUCT_PATH + name,
};
