import { GiftList } from "../../core/interfaces/gift-list";

export const giftListExample: GiftList = {
  id: 1,
  key: "qwertyuiop",
  title: "Apartamento novo",
  themeColor: "red",
  typography: 1,
  message: null,
  photoUrl: "https://img.freepik.com/fotos-premium/imagem-da-jovem-sorrindo-e-apontando-para-cima-com-fundo-laranja_31605-266.jpg?w=996",
  photo: null,
  eventDate: null,
  totalValue: 3000,
  valueCollected: 950.95,
  creator: "Maria Luíza",
  items: [
    {
      "id": 1,
      "name": "Geladeira",
      "valueItem": 1500,
      "valueItemCollected": 800,
      "category": "Eletrodomésticos",
      "image": null,
      "imageUrl": "https://img.freepik.com/vetores-gratis/geladeira-no-fundo-branco_1308-102266.jpg?t=st=1737838557~exp=1737842157~hmac=bb154a7ba333a59b71d2f2951a8548fd0cd8e6d425796740bfccb00b5a493033&w=360"
    },
    {
      "id": 2,
      "name": "Micro-ondas",
      "valueItem": 500,
      "valueItemCollected": 0,
      "category": "Eletrodomésticos",
      "image": null,
      "imageUrl": "https://m.media-amazon.com/images/I/41akGb8swJL._AC_SL1000_.jpg"
    },
    {
      "id": 3,
      "name": "Conjunto de Panelas",
      "valueItem": 200,
      "valueItemCollected": 150,
      "category": "Utensílios de Cozinha",
      "image": null,
      "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_964299-MLU74471708651_022024-F.webp"
    },
    {
      "id": 4,
      "name": "Ferro de Passar",
      "valueItem": 150,
      "valueItemCollected": 80,
      "category": "Eletroportáteis",
      "image": null,
      "imageUrl": "https://m.media-amazon.com/images/I/71rTqqcISoL._AC_SL1500_.jpg"
    },
    {
      "id": 5,
      "name": "Liquidificador",
      "valueItem": 250,
      "valueItemCollected": 250,
      "category": "Eletroportáteis",
      "image": null,
      "imageUrl": "https://m.media-amazon.com/images/I/81YK4I5lrML._AC_SL1500_.jpg"
    }
  ]
};
