import { PRACTICES } from "../../shared";
import PracticesList from "../PracticesList";

export const SideNav = () => {
  return (
    <aside className="sticky max-w-32   top-0 z-10 overflow-y-auto shadow-sm shadow-slate-300 min-h-screen scrollbar-hidden pr-4 pl-2 pt-1 flex flex-col ml-1">
      <div className="relative top-0  ">
        <h1>Practices</h1>
      </div>
      <PracticesList data={PRACTICES} dense={true} />
    </aside>
  );
};
