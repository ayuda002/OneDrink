import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <img src="/image/kakuteru.svg" width={50} height={50}></img>
        <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">お酒一覧表</h1>
      </Navbar.Brand>
      {/* <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
