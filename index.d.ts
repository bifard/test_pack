declare module "src/constants" {
    export const HOST_NAME = "https://api.garzdrav.ru:7090";
    export const BASE_IMG_URL: string;
    export const CONDITIONS_PATH = "/files/images/open/conditions/";
    export const PRODUCT_PATH = "/files/images/open/products/";
}
declare module "src/type" {
    export interface ImageServiceType {
        getConditionOtherImgUrl: (name: string) => string;
        getProductImgUrl: (name: string) => string;
    }
}
declare module "src/image-service" {
    import { ImageServiceType } from "src/type";
    export const imageService: ImageServiceType;
}
declare module "test_pack" {
    export { imageService } from "src/image-service";
}
