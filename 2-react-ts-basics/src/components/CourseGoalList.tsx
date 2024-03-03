/** @format */

import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title='Learn React + TS'
            onDelete={onDeleteGoal}
            id={goal.id}>
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
