import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayouts = () => {
  return (
    <>
      <main>
        <div className="pageWrapper d-lg-flex ">
          {/********Sidebar**********/}
          <aside className="sidebarArea shadow z-10 h-fit" id="sidebarArea ">
            <Sidebar />
          </aside>
          {/********Content Area**********/}

          <div className="contentArea w-100 ">
            {/********header**********/}
            <Header />
            {/********Middle Content**********/}
            <Container className="p-4 wrapper" fluid>
              <Outlet />
            </Container>
          </div>
        </div>
      </main>
    </>
  );
};

export default FullLayouts;
