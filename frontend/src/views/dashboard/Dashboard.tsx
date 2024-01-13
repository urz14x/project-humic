import Sidebar from "../../components/Sidebar/Sidebar";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
function Dashboard({ children }: Props) {
  return (
    <div>
      <div className="">
        <Sidebar />
        <main className="ml-0 lg:ml-64 px-5 py-16 sm:text-justify">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
