function createRandomArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    array.push(randomNum);
  }
  return array;
}
const array = createRandomArray();
console.log(array);

const evens = []
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evens.push(array[i]);
  }
}
console.log(`Парные числа ${evens}`);

let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(`Сумма всех чисел: ${sum}`);


function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  const maxElement = getMax(array);
  console.log(`Максимальний елемент: ${maxElement}`);

  const array1 = array.concat();
  array1.splice (7, 0, 55)
  console.log(`Добавляем один элемент в казанный индекс: ${array1}`)

  const array2 = array.concat();
  array2.splice (2, 1)
  console.log(`Удаляем один элемент в массиве: ${array2}`)

  
  console.log(`------------`)

  function createRandomArray1() {
  const array3 = [];
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    array3.push(randomNum);
  }
  return array3;
}
const array3 = createRandomArray1();
console.log(array3);


function Array(array, array3){
  const allArray = [...new Set([...array, ...array3])]
  return allArray
}
const merged = Array(array, array3)
console.log(`Элементы массива без повторений ${merged}`)


function findCommonElements(array, array3) {
  const commonElements = [...array].filter((element) => array3.includes(element));
  return commonElements;
}
const common = findCommonElements(array, array3);
console.log(`Элементы массива которые повторяються ${common}`)


function findUniqueElements(array, array2) {
  const uniqueElements = array.filter((element) => !array2.includes(element));
  return uniqueElements;
}
const unique = findUniqueElements(array, array3);
console.log(`Элементы 1 массива которых нет во втором: ${unique}`);

console.log(`------------`)

function displayFruitsList() {
  const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Strawberry'];
  fruits.sort();
  document.write('<ul>');
  for (let i = 0; i < fruits.length; i++){
    document.write('<li>' + fruits[i] + '</li>')
  }
  document.write('<ul>')
}
displayFruitsList();

function findFruitIndex(fruitName) {
  const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Strawberry'];
  const index = fruits.findIndex((fruit) => fruit.toLowerCase() === fruitName.toLowerCase());
  return index;
}
const fruitName = 'banana';
const index = findFruitIndex(fruitName);
console.log('Индекс фрукта:', index);



