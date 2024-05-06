
import products from "@/data/products.json" with { type: "json" };
export type Products = typeof products extends Array<infer T> ? T : never;