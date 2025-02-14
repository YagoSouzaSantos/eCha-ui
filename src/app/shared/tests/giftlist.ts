import { GiftList } from "../../core/interfaces/gift-list";

export const giftListExample: GiftList = {
  id: "1",
  userId: 1,
  statusListId: 1,
  title: "Apartamento novo",
  highlightColor: "red",
  fontId: 1,
  description: "Para deixar o meu novo ninho ainda mais aconchegante, estou preparando um Chá de Casa Nova. Será uma tarde recheada de alegria, boas risadas para celebrarmos juntos essa nova etapa. Em vez de presentes, contribuam com valores para os itens que nos ajudarão a dar vida ao nosso novo lar.",
  photoUrl: "https://img.freepik.com/fotos-gratis/jovem-morena-caucasiana-sorridente-gesticulando-sinal-de-mao-da-vitoria-isolado-na-parede-rosa_141793-70785.jpg?t=st=1738412005~exp=1738415605~hmac=38c79acc22f97477c3882da27064765fc9e05d8ea63d5f34b7e9864e81f7a3f1&w=1380",
  image: null,
  eventDate: new Date('2025-03-01T10:00:00'),
  totalValue: 3000,
  valueCollected: 950.95,
  contributorCount: 8,
  creator: "Maria Luíza",
  items: [
    // {
    //   "id": 1,
    //   "name": "Geladeira",
    //   "listId": "1",
    //   "totalValue": 1500,
    //   "valueItemCollected": 800,
    //   "remainingValue" : 700,
    //   "categoryId": 1,
    //   "image": "https://img.freepik.com/vetores-gratis/geladeira-no-fundo-branco_1308-102266.jpg?t=st=1737838557~exp=1737842157~hmac=bb154a7ba333a59b71d2f2951a8548fd0cd8e6d425796740bfccb00b5a493033&w=360"
    // },
    // {
    //   "id": 2,
    //   "name": "Micro-ondas",
    //   "listId": "1",
    //   "totalValue": 500,
    //   "valueItemCollected": 0,
    //   "remainingValue" : 500,
    //   "categoryId": 2,
    //   "image": "https://m.media-amazon.com/images/I/41akGb8swJL._AC_SL1000_.jpg"
    // },
    // {
    //   "id": 3,
    //   "name": "Conjunto de Panelas",
    //   "valueItem": 200,
    //   "valueItemCollected": 150,
    //   "remainingValue" : 50,
    //   "category": "Utensílios de Cozinha",
    //   "image": null,
    //   "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_964299-MLU74471708651_022024-F.webp"
    // },
    // {
    //   "id": 4,
    //   "name": "Ferro de Passar",
    //   "valueItem": 150,
    //   "valueItemCollected": 80,
    //   "remainingValue" : 70,
    //   "category": "Eletroportáteis",
    //   "image": null,
    //   "imageUrl": "https://m.media-amazon.com/images/I/71rTqqcISoL._AC_SL1500_.jpg"
    // },
    // {
    //   "id": 5,
    //   "name": "Liquidificador",
    //   "valueItem": 250,
    //   "valueItemCollected": 250,
    //   "remainingValue" : 0,
    //   "category": "Eletroportáteis",
    //   "image": null,
    //   "imageUrl": "https://m.media-amazon.com/images/I/81YK4I5lrML._AC_SL1500_.jpg"
    // }
  ]
};
