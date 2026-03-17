import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";
// import styles from "./HomePage.module.css";
// Stateful Component(class based), Stateless Component(functional, with webhook state can be maintained)
// Functional components

// export (default, named)
export default function HomePage() {
  //
  return (
    <section className="bg-gray-50 flex h-screen p-5 gap-5">
      <LeftSidePanel />
      <RightSidePanel />
    </section>
  );
}