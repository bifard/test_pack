import { BASE_IMG_URL, CONDITIONS_PATH, PRODUCT_PATH } from './constants';
export const imageService = {
    /**
     * @description Получение ссылки изображения банера акции Покупай выгодно
     * @param {string} guid guid акции (без расширения)
     * @returns {string} ссылка на изображение банера акции
     */
    getConditionOtherImgUrl: (guid) => BASE_IMG_URL + CONDITIONS_PATH + guid + '.png',
    /**
     * @description Получение ссылки изображения товара
     * @param {string} name - guid товара (с расширением)
     * @returns {string} ссылка на изображение товара
     */
    getProductImgUrl: (name) => BASE_IMG_URL + PRODUCT_PATH + name,
};
