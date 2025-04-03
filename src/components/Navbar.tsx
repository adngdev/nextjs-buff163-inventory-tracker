import { FC } from "react";

const NavbarJsx: FC = () => {
    return (
        <div className={`absolute h-10 w-full  flex items-center px-5 bg-zinc-800`}>
            <p className={`font-medium text-white text-lg`}>Buff Inventory Tracker</p>
        </div>
    );
};

export default NavbarJsx;
