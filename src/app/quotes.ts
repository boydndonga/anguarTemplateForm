import { Quote } from './quote';

export let tags: string[] = [ 'hilarious', 'thats serious', 'techy'];

export let Quotes: Quote[] = [
  new Quote(1, 'Boyd', 'this is quote1',  tags[0], 'look inspired by this quote'),
  new Quote(2, 'Boydy', 'this is quote2', tags[1], 'look amazed by this quote'),
  new Quote(3, 'Boyddy', 'this is quote3', tags[2], 'node towards this quote')
];
