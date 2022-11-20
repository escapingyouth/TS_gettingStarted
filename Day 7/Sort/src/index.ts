import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, -34, 5, 0]);
const charactersCollection = new CharactersCollection('abXwcqojmdlvnnsyew');
const linkedList = new LinkedList();

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.add(10);
linkedList.add(-3);
linkedList.add(7);
linkedList.add(-5);
linkedList.sort();

linkedList.print();
