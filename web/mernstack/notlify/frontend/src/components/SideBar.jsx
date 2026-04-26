import { GoPlus } from "react-icons/go";
import { Link } from 'react-router'

const SideBar = () => {
  return (
    <aside className=" bg-gray-100 fixed inset-y-0 left-0">
      <div className="p-4 text-xl font-bold border-b border-gray-200">Notlify</div>

      <nav className="p-4 my-4">
        <Link href="#" className="text-white p-4 h-36 w-36 rounded-full shadow-lg bg-gray-900 ">
          <GoPlus size={22} className="inline -mt-[3px]"/>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
