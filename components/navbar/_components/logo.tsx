import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          Ikarus<span className="text-purple-700">identifier </span>
        </span>
      </Link>
    </>
  );
};

export default Logo;
