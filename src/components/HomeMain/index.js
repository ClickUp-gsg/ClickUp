import * as S from "./style";

import Header from "../ListHeader";
import Task from "../ListTask";
import { useStateValue } from "../StateProvider";

export default function HomeMain() {
  const [{ tasks }] = useStateValue();
  let nmbCompletedTasks = 0,
    nmbUnCompletedTasks = 0;
  tasks.forEach((task) => {
    task.isCompleted ? nmbCompletedTasks++ : nmbUnCompletedTasks++;
  });
  return (
    <S.Container>
      <S.ListsContainer>
        <S.List>
          <Header
            text="TO DO"
            nmbOfTasks={nmbUnCompletedTasks || 0}
          />
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
            nmbOfTasks={nmbCompletedTasks || 0}
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
