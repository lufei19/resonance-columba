import { Product, ProductUnlockConditions } from "@/interfaces/product";
import {
  GOODS_UNLOCK_CONDITIONS as goodsUnlockConditions,
  PRODUCTS as pdtData,
} from "resonance-data-columba/dist/columbabuild";

const pdts: Product[] = Object.values(pdtData) as Product[];

export const PRODUCTS: Product[] = pdts.filter((product) => {
  // exclude low buy price Normal products
  if (product.type === "Normal") {
    if (product.buyPrices) {
      const buyPrices = Object.values(product.buyPrices).filter((price) => price !== null) as number[];
      if (buyPrices.length === 0) {
        return false;
      }
      if (Math.min(...buyPrices) < 300) {
        return false;
      }
    }
  }
  return true;
});

export const PRODUCT_UNLOCK_CONDITIONS: ProductUnlockConditions = goodsUnlockConditions;
