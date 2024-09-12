//1

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 2; i <= 20; i++) {
    console.log(`${i} is prime: ${isPrime(i)}`);
  }
  
  
  //2
  function findMinMax(arr) {
    if (arr.length === 0) {
      return { min: undefined, max: undefined };
    }
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return { min, max };
  }
  
  const randomNumbers = [];
  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100)); 
  }
  
  const result = findMinMax(randomNumbers);
  console.log(`Min: ${result.min}, Max: ${result.max}`);
  
  
  //3
  
  const user = {
    name: 'Виктория Тяпкова',
    age: 18,
    email: 'tyapkova_viktoria@bk.ru',
    greet: function() {
      console.log(`Привет, ${this.name}!`);
    }
  };
  
  function displayUserInfo(userObj) {
    console.log(`Имя: ${userObj.name}, Возраст: ${userObj.age}, Email: ${userObj.email}`);
  }
  
  displayUserInfo(user);
  user.greet();
  
  //4
  
  const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];
  
  for (let i = 0; i < students.length; i++) {
    console.log(`Студент ${students[i]}, ваш порядковый номер: ${i + 1}`);
  }
  
  function findLongestName(names) {
    if (names.length === 0) {
      return null;
    }
    let longestName = names[0];
    for (let i = 1; i < names.length; i++) {
      if (names[i].length > longestName.length) {
        longestName = names[i];
      }
    }
    return longestName;
  }
  
  const longestName = findLongestName(students);
  console.log(`Самое длинное имя: ${longestName}`);
  
  //5
  
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  
  const now = new Date();
  console.log(formatDate(now));
  
  function daysDifference(date1, date2) {
    const difference = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(difference / (1000 * 60 * 60 * 24)); 
  }
  
  const date1 = new Date("2023-12-01");
  const date2 = new Date(); 
  const difference = daysDifference(date1, date2);
  console.log(`Разница в днях: ${difference}`);
  
  
  
  