import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  return (
    <Fragment>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </Fragment>
  )
}

export default Layout;
