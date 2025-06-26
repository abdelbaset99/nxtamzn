import data from "@/lib/data";
import Product from "./models/product.model";
import { dbConnect } from ".";
import { cwd } from "process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());
const main = async () => {
  try {
    const { products } = data;
    await dbConnect(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(
      products.map((x) => ({ ...x, _id: undefined }))
    );

    console.log("Products seeded successfully:", createdProducts.length);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};

main();
