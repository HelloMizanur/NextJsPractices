import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <Link href={`/`}>Home</Link>
      <Link href={`/about`}>About</Link>
    </div>
  );
};

export default Navbar;
