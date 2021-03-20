import * as S from "./style";

import { useEffect, useState } from "react";

import AddTaskMenu from "../../components/AddTaskMenu";
import Header from "../ListHeader";
import Task from "../ListTask";
import { db } from "../../firebase";
import { loadSpinner } from "../../assets";
import { useStateValue } from "../StateProvider";

export default function HomeMain() {
  const [{ tasks, user, currentList }, dispatch] = useStateValue();
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  let nmbCompletedTasks = 0,
    nmbToDoTasks = 0;
  tasks.forEach((task) => {
    if (task?.lists?.includes?.(currentList)) {
      task.isCompleted ? nmbCompletedTasks++ : nmbToDoTasks++;
    }
  });
  useEffect(() => {
    if (user.uid) {
      setIsLoadingTasks(true);
      (async function setTasks() {
        try {
          const querySnapshot = await db
            .collection("users")
            .doc(user.uid)
            .collection("tasks")
            .get();
          let initTasks = querySnapshot.docs.map((doc) => doc.data());
          dispatch({ type: "EDIT_TASKS", payload: initTasks });
          setIsLoadingTasks(false);
        } catch (err) {
          setIsLoadingTasks(false);
          console.log("Error while get init State: ", err);
        }
      })();
    }
  }, [dispatch, user, user.uid]);

  return (
    <S.Container>
      <S.ListsContainer>
        <S.List>
          <Header text="TO DO" nmbOfTasks={nmbToDoTasks || 0} />
          {isLoadingTasks ? (
            <S.LoadSpinner>{loadSpinner}</S.LoadSpinner>
          ) : (
            tasks.map((value) => {
              return (
                !value.isCompleted && (
                  <Task
                    key={value.id}
                    id={value.id}
                    header={value.title}
                    desc={value.desc}
                    isCompleted={false}
                    hasStar={value.hasStar}
                    lists={value.lists}
                    isPinned={value.isPinned}
                  />
                )
              );
            })
          )}
        </S.List>
        <S.List>
          <Header
            text="Complete"
            nmbOfTasks={nmbCompletedTasks || 0}
            topBorderColor="rgb(107, 201, 80)"
          />
          {isLoadingTasks ? (
            <S.LoadSpinner>{loadSpinner}</S.LoadSpinner>
          ) : (
            tasks.map((value) => {
              return (
                value.isCompleted && (
                  <Task
                    key={value.id}
                    id={value.id}
                    header={value.title}
                    desc={value.desc}
                    isCompleted={true}
                    hasStar={value.hasStar}
                    lists={value.lists}
                    isPinned={value.isPinned}
                  />
                )
              );
            })
          )}
        </S.List>
      </S.ListsContainer>
      <AddTaskMenu />
    </S.Container>
  );
}
