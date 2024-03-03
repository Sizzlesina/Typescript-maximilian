/** @format */
// interface CourseGoalProps {
//   title: string;
//   description: string;

import { type PropsWithChildren } from "react";

// }
type CourseGoalProps = PropsWithChildren<{
  title: string;
}>;
function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
