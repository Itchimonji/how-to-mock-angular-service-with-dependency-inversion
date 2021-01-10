
import { AnimalCollection } from './animal.collection';
import { AnimalFactory } from '../factories/animal.factory';
import { Animal } from './animal.interface';

describe('AnimalCollection', () => {
  let collection: AnimalCollection;

  beforeAll(async () => {
    collection = new AnimalCollection();
  });

  it('should add and have animals', () => {
    const catId: number = 1;
    const catName: string = 'cat';
    const cat: Animal = AnimalFactory.createAnimal(catId, catName);
    collection.add(cat);
    const catFromCollection: Animal = collection.getById(catId);
    expect(cat).toEqual(catFromCollection);

    const dogId: number = 2;
    const dogName: string = 'dog';
    const id: number = collection.addByIdAndName(dogId, dogName);
    const dogFromCollection: Animal = collection.getById(dogId);
    expect(dogFromCollection.id).toEqual(dogId);
    expect(dogFromCollection.name).toEqual(dogName);

    expect(collection.get()).toEqual([cat, {_id: dogId, _name: dogName}]);
  });

  it('should have some mock data', () => {
    const mock: string[] = [
      'cat',
      'dog',
      'rabbit',
      'horse'
    ];
    collection.fillWithMocks(mock);
    expect(collection.get().length).toEqual(4);
    expect(collection.get()[0].name).toEqual(mock[0]);
    expect(collection.get()[0].id).toEqual(0);
    expect(collection.get()[1].name).toEqual(mock[1]);
    expect(collection.get()[1].id).toEqual(1);
    expect(collection.get()[2].name).toEqual(mock[2]);
    expect(collection.get()[2].id).toEqual(2);
    expect(collection.get()[3].name).toEqual(mock[3]);
    expect(collection.get()[3].id).toEqual(3);
  });

  it('should have an unknown animal', () => {
    expect(collection.getById(-1).name).toEqual('Unknown animal');
  });
});
