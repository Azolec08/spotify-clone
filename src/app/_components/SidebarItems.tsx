import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = (item) => {
  return (
    <Link
      href={item.href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md 
      fomt-medium cursor-pointer hover:text-white transition text-neutral-400 py-1
    `,
        item.active && "text-white"
      )}
    >
      <item.icon size={26} />
      <p className="truncate w-full">{item.label}</p>
    </Link>
  );
};

export default SidebarItem;
