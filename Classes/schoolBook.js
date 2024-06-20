class Student {
    constructor(firstName, grade, gpa) {
        this.firstName = firstName;
        this.grade = grade;
        this.gpa = gpa;
    }
}

function sort(arr) {
    var students = {};

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split('Student name: ')[1].split(',')[0];
        let grade = parseInt(arr[i].split('Grade: ')[1].split(',')[0]);
        let gpa = parseFloat(arr[i].split('Graduated with an average score: ')[1]);

        if (gpa < 3) {
            continue;
        }

        let student = new Student(name, grade, gpa)

        if (grade in students) {
            students[grade].push(student);
        }
        else {
            students[grade] = [student];
        }
    }

    for (const grade in students) {
        console.log(`${parseInt(grade) + 1} Grade`);
        const gradeObject = students[grade];
        const studentDetails = gradeObject.map(student => student.firstName).join(", ");
        
        const totalGpa = gradeObject.reduce((sum, student) => sum + student.gpa, 0);
        const averageGpa = totalGpa / gradeObject.length;

        console.log(`List of students: ${studentDetails}`);
        console.log(`Average annual score from last year: ${averageGpa.toFixed(2)}`);
        console.log('===');   
    }
}

sort(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]

)

// sort(
//     [
//         'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//         'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//         'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//         'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//         'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//         'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//         'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
//     ]

// );