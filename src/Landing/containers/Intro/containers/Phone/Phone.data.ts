export const MESSAGES: {
  id: string;
  buttons?: string[];
  text: string;
  timeout: number;
  variant?: string;
}[] = [
  {
    id: '1',
    buttons: ["Let's see what you can! 🚀"],
    text:
      'Hello there, welcome to Fleetly! Let me show you how you can automate the processes in your business?',
    timeout: 0
  },
  {
    id: '2',
    text: "Let's see what you can! 🚀",
    timeout: 3000,
    variant: 'incoming'
  },
  {
    id: '3',
    text: 'Cool! 😎 What I can:',
    timeout: 2000
  },
  {
    id: '4',
    text:
      '- Communicate with your clients in messengers such as Facebook or Instagram',
    timeout: 1000
  },
  {
    id: '5',
    text:
      '- Better understand your favorite customers with a user-friendly CRM 🧙‍♂️',
    timeout: 1000
  },
  {
    id: '6',
    text: '- Create complex bots 🤖',
    timeout: 1000
  },
  {
    id: '7',
    buttons: ['I want my pizza! 🍕'],
    text: "Hmm ... What about an example? Let's try to order a pizza?",
    timeout: 2000
  },
  {
    id: '8',
    text: 'I want my pizza! 🍕',
    variant: 'incoming',
    timeout: 3000
  },
  {
    id: '9',
    buttons: ['Pepperoni 🍕', 'Four cheeses 🧀', 'Margarita 🍅'],
    text: 'We prepare delicious pizza! Which one do you want?',
    timeout: 2000
  },
  {
    id: '10',
    text: 'Pepperoni 🍕',
    variant: 'incoming',
    timeout: 3000
  },
  {
    id: '11',
    text:
      'Great choice! Our chef has already started making pizza according to a super secret recipe.',
    timeout: 2000
  },
  {
    id: '12',
    text:
      'Now we have a 10% discount on the first order, to get it, leave your phone number',
    timeout: 1000
  },
  {
    id: '13',
    text: '+123456789',
    variant: 'incoming',
    timeout: 3000
  },
  {
    id: '14',
    buttons: ['Buy now!'],
    text:
      'Great! NEW10 - your promo code to get 10% discount on your first order!',
    timeout: 2000
  },
  {
    id: '15',
    text: 'Buy now!',
    variant: 'incoming',
    timeout: 2000
  },
  {
    id: '16',
    text: '* Cash register sounds *',
    timeout: 2000
  },
  {
    id: '17',
    buttons: ['Try for free'],
    text:
      'It works like this, or maybe even cooler! Try it for free. Psst! Maybe the promo code will work for us too',
    timeout: 1000
  }
];
