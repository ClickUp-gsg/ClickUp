import * as S from "./style";

import Header from "../ListHeader";
import Task from "../ListTask";
import { useStateValue } from "../StateProvider";

export default function HomeMain() {
  const [{ tasks }] = useStateValue();
  let filteredTasks = tasks.reduce((acc, curr, i) => {
    if (i === 1) {
      acc = acc.isCompleted
        ? { completedTasks: [acc], unCompletedTasks: [] }
        : { completedTasks: [], unCompletedTasks: [acc] };
    }
    acc = curr.isCompleted
      ? { ...acc, completedTasks: [...acc.completedTasks, curr] }
      : { ...acc, unCompletedTasks: [...acc.unCompletedTasks, curr] };
    return acc;
  });
  let { completedTasks, unCompletedTasks } = filteredTasks;
  return (
    <S.Container>
      <S.ListsContainer>
        <S.List>
          <Header text="TO DO" nmbOfTasks={unCompletedTasks.length} />

          {tasks.map((value) => {
            return (
              !value.isCompleted && (
                <Task
                  key={value.id}
                  id={value.id}
                  header={value.title}
                  body={value.desc}
                  status={false}
                />
              )
            );
          })}
        </S.List>
        <S.List>
          <Header
            text="Complete"
            nmbOfTasks={completedTasks.length}
            topBorderColor="rgb(107, 201, 80)"
          />
          {tasks.map((value) => {
            return (
              value.isCompleted && (
                <Task
                  key={value.id}
                  id={value.id}
                  header={value.title}
                  body={value.desc}
                  status={true}
                />
              )
            );
          })}
        </S.List>
      </S.ListsContainer>
    </S.Container>
  );
}
