const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((bestVegetable, vegetable) => vegetable[metric] > bestVegetable[metric] ? vegetable : bestVegetable).submitter;
};

console.log(judgeVegetable(vegetables, metric));