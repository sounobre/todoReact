import Container from "../components/container";
import TaskSummary from "../core-components/task-summary";
import TasksList from "../core-components/tasks-list";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSummary />
      </header>
      <TasksList />
    </Container>
  );
}
