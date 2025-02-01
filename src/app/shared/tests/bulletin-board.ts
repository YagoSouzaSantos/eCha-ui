import { BulletinBoard } from "../../core/interfaces/bulletin-board";

export const bulletinBoardExample: BulletinBoard = {
  hostImage: 'https://img.freepik.com/fotos-gratis/jovem-morena-caucasiana-sorridente-gesticulando-sinal-de-mao-da-vitoria-isolado-na-parede-rosa_141793-70785.jpg?t=st=1738412005~exp=1738415605~hmac=38c79acc22f97477c3882da27064765fc9e05d8ea63d5f34b7e9864e81f7a3f1&w=1380',
  hostMessage: 'Welcome to the bulletin board! Feel free to leave your messages.',
  giftListKey: 'abcdef1234',
  totalValue: 1465,
  collectedValue: 465,
  contributorCount: 8,
  themeColor: 'blue',
  eventDate: new Date('2025-03-01T10:00:00'),
  messages: [
    {
      contributor: 'Alice Johnson',
      message: '“Te vi dar os primeiros passos, muito orgulho de você, minha filha, muita sorte nessa nova jornada”',
      icon: 'ph ph-alien',
      value: 50,
      visible: true,
    },
    {
      contributor: 'Bob Smith',
      message: 'Looking forward to the next meeting.',
      icon: 'ph ph-cookie',
      value: 20,
      visible: false,
    },
    {
      contributor: 'Charlie Brown',
      message: 'Great initiative! Count on me for support.',
      icon: 'ph ph-crown',
      value: 100,
      visible: true,
    },
    {
      contributor: 'Diana Prince',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icon: 'ph ph-confetti',
      value: 75,
      visible: true,
    },
    {
      contributor: 'Edward Green',
      message: 'Happy to be part of this!',
      icon: 'ph ph-lightning',
      value: 30,
      visible: false,
    },
    {
      contributor: 'Fiona Black',
      message: 'Let me know how else I can help.',
      icon: 'ph ph-rainbow-cloud',
      value: 60,
      visible: true,
    },
    {
      contributor: 'George White',
      message: 'Keep it up, everyone!',
      icon: 'ph ph-popsicle',
      value: 40,
      visible: false,
    },
    {
      contributor: 'Hannah Blue',
      message: 'This is so inspiring!',
      icon: 'ph ph-rainbow',
      value: 90,
      visible: true,
    },
  ]
};
