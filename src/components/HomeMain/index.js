import * as S from "./style";

import { useEffect, useState } from "react";

import Header from "../ListHeader";
import Task from "../ListTask";
import { db } from "../../firebase";
import { loadSpinner } from "../../assets";
import { useStateValue } from "../StateProvider";

export default function HomeMain() {
  const [{ tasks, user }, dispatch] = useStateValue();
  const [isLoadingTasks, setIsLoadingTasks] = useState(user.uid);
  let nmbCompletedTasks = 0,
    nmbUnCompletedTasks = 0;
  tasks.forEach((task) => {
    task.isCompleted ? nmbCompletedTasks++ : nmbUnCompletedTasks++;
  });
  useEffect(() => {
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .collection("tasks")
        .get()
        .then((querySnapshot) => {
          let initTasks = querySnapshot.docs.map((doc) => doc.data());
          dispatch({ type: "EDIT_TASKS", payload: initTasks });
          setIsLoadingTasks(false);
        })
        .catch((err) => {
          console.log("Error while get init State: ", err);
          setIsLoadingTasks(false);
        });
    }
  }, [dispatch, user.uid]);

  return (
    <S.Container>
      <S.ListsContainer>
        <S.List>
          <Header
            text="TO DO"
            nmbOfTasks={nmbUnCompletedTasks || 0}
          />
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
                  />
                )
              );
            })
          )}
        </S.List>
      </S.ListsContainer>
    </S.Container>
  );
}
