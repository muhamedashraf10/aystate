import Link from "next/link";
import { Playball } from "next/font/google";
import { DesktopNavbar } from "./DesktopNavbar";

const openSans = Playball({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = async () => {
  return <DesktopNavbar />;
};

export default Navbar;
