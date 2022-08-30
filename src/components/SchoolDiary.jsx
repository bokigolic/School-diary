import { useState } from "react";

const SchoolDiary = () => {

  const initialGrades = {
    Mathematics: [2],
    English: [3],
    Biology: [3],
    Chemistry: [4],
    History: [5]
  }


  const [grades, setGrades] = useState(initialGrades);

  return (
    <div className="school-diary">
      <h2>School Diary</h2>
      <h3>Subjects: </h3>
      <h3>Average grade: </h3>
      {
        Object.keys(grades).map((subject) => {
          const gradesInThatSubject = grades[subject];
          const gradesForPrinting = gradesInThatSubject.join()
          return (
            <div>
              <h4>{subject}</h4>
              <p>Grades: {gradesForPrinting} </p>
              <div>
                Rate it: <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>

              </div>
            </div>
          )
        })
      }
    </div>
  );
}
export default SchoolDiary;