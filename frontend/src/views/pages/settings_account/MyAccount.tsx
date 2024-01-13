import { useState } from "react";
import "./Style.css";
import { useRecoilValue } from "recoil";
import { RiShieldCheckFill } from "react-icons/ri";
import { authenticated } from "../../../store";
export default function MyAccount() {
  const [activeBlock, setActiveBlock] = useState<number>(0);
  const auth = useRecoilValue(authenticated);

  const buttons: Array<string> = ["Info akun", "Tampilan"];
  const toggleMenuBlock = (idx: number) => {
    setActiveBlock(idx);
  };

  return (
    <section className="flex p-1 bg-white w-full h-[580px] rounded-md shadow-md transition ">
      <aside className="mt-5 font-sofia hidden flex-col space-y-3  sm:block border-r border-gray-200 p-2">
        {buttons.map((button, index) => (
          <button
          key={index}
            className={` py-3 px-3  w-full rounded-md  transition-all ${
              index === activeBlock
                ? " bg-colors_primary text-colors_smooth_white"
                : ""
            }`}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </aside>
      <section className="font-sofia wrapper">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${580}px * ${activeBlock})` }}
        >
          <div className="block">
            <article className="mt-10 flex flex-row gap-3">
              <img
                src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
                alt="Profile bidan"
                className="w-32 h-32 rounded-md"
              />
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-1">
                  <h4 className="font-sofia text-colors_smooth_black  font-bold">
                    {auth.check ? auth.midwife?.fullname : ""}
                  </h4>
                  <span className="text-green-500">
                    <RiShieldCheckFill />
                  </span>
                </div>
                <h5 className="font-sofia text-sm text-colors_smooth_black">
                  @{auth.check ? auth.midwife.username : ""}
                </h5>
                <div className="mt-1 w-14 h-auto bg-green-200 px-2 py-1 text-sm rounded-full">
                  Bidan
                </div>
              </div>
            </article>
          </div>
          <div className="block">
            <h1 className="text-2xl">Pilih tema</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio sed eveniet voluptas, explicabo quisquam quibusdam.
              Aliquid impedit neque enim eligendi id quasi a saepe, tempore
              aliquam natus dicta unde reiciendis!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
