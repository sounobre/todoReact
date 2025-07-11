import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import React from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemPropos {
  task: Task;
}

export default function TaskItem({ task }: TaskItemPropos) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = React.useState("");

  const { updateTask, updateTaskStatus } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitedTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ id: task.id, title: taskTitle });
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);

    console.log(checked);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitedTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
