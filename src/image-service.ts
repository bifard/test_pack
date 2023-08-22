import { BASE_IMG_URL, CONDITIONS_PATH, PRODUCT_PATH } from './constants';
import { ImageServiceType } from './type';

export const imageService: ImageServiceType = {
  /**
   * @description Получение ссылки изображения банера акции Покупай выгодно
   * @param {string} guid guid акции (без расширения)
   * @returns {string} ссылка на изображение банера акции
   */
  getConditionOtherImgUrl: (guid: string): string =>
    BASE_IMG_URL + CONDITIONS_PATH + guid + '.png',

  /**
   * @description Получение ссылки изображения товара
   * @param {string} name - guid товара (с расширением)
   * @returns {string} ссылка на изображение товара
   */
  getProductImgUrl: (name: string): string =>
    BASE_IMG_URL + PRODUCT_PATH + name,
};
