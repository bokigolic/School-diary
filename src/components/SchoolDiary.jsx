import { useState } from "react";

const SchoolDiary = () => {

  const initialGrades = {
    mathematics: [],
    english: [],
    biology: [],
    chemistry: [],
    history: []
  }


  const [grades, setGrades] = useState(initialGrades);

  return (
    <div>
      <h2>School Diary</h2>
      <h3>Subjects: </h3>
    </div>
  );
}
export default SchoolDiary;