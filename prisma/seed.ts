const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      id: "1",
      name: "Fone",
      imageURL:
        "https://utfs.io/f/beae8b0b-cbf2-4700-a2a5-c1cfae0528d1-xc63a2.svg",
    },
    {
      id: "2",
      name: "Teclado",
      imageURL:
        "https://utfs.io/f/905b7ca3-77e9-4076-b796-3ec58219b6d9-zhh28v.svg",
    },
    {
      id: "3",
      name: "Mouse",
      imageURL:
        "https://utfs.io/f/cf23b444-9a11-44f4-a6e0-f1851b8f9e23-fwbyqp.svg",
    },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  const products = [
    {
      name: "Fone Sony Bluetooth",
      description:
        "Um fone de ouvido excelente para música. Com conexão bluetooth e longa duração de bateria",
      imageURL:
        "https://utfs.io/f/90074912-6eed-44ae-b142-25954f651883-hdxnba.png",
      price: 120,
      discountPercentage: 10,
      categoryId: "1",
    },
    {
      name: "Teclado Gamer",
      description: "Teclado mecânico com iluminação RGB.",
      imageURL:
        "https://utfs.io/f/b95ca8ca-8a05-43fc-9e8f-88ec37c2acbb-hdxnb8.png",
      price: 225,
      discountPercentage: 5,
      categoryId: "2",
    },
    {
      name: "Mouse Gamer Razer",
      description:
        "Design ergonômico premiado: Confiado por mais  de 13 milhões de fãs em todo o mundo, o formato icônico da DeathAdder  forneceu vitórias para inúmeros profissionais mais do que qualquer outro  mouse, incluindo o tricampeão mundial de League of Legends, Faker",
      imageURL:
        "https://utfs.io/f/0292521a-3a1c-4db8-9ffd-2bae833339e5-hdxnb9.png",
      price: 120,
      discountPercentage: 15,
      categoryId: "3",
    },
    {
      name: "Mousepad Razer",
      description: "Mousepad grande e confortável, com ilumição rgb",
      imageURL:
        "https://utfs.io/f/c3a94074-ceb4-403e-937b-7483f2618c41-hdxnb7.png",
      price: 98,
      discountPercentage: 0,
      categoryId: "3",
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
