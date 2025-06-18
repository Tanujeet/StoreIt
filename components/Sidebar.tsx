import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />
      </Link>
    </aside>
  );
};

export default Sidebar;
