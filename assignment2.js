const students = [
    {
        name: 'Kemi',
        age :56, 
        Grade:'6'
    },
    {
        name:'Femi', 
        age: 76, 
        Grade:'7'
    },
    {
        name:'Temi',
        age: 26, 
        Grade:'6'
    },
    {
        name:'Demi',
        age: 36, 
        Grade:'7'
    }
];
console.log(students)
const filterByGrade = students.filter((students) => students.Grade === '7'  );
    console.log(filterByGrade);
   

    const averageAge = students.map((students) => students.age / 4 );
    console.log(averageAge);

    
