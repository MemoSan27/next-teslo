import { initialData } from "./seed";
import prisma from '../lib/prisma';

async function main(){

    //1. Delete previous regs
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

    const { categories, products } = initialData;

    //Categories
    const categoriesData = categories.map( category => ({
        name: category
    }))

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDB = await prisma.category.findMany();
    const categoriesMap = categoriesDB.reduce( (map, category) => {
        map[category.name.toLowerCase()] = category.id;

        return map;
    }, {} as Record<string, string>); //<string=shirt, string=categoryID>

    console.log('Seed Executed');
}

(() => {

    if(process.env.NODE_ENV === 'production') return;

    main();

})();