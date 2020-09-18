import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "gatsby";

import PerfectScrollbar from "react-perfect-scrollbar";

import "./style.css";

import "react-perfect-scrollbar/dist/css/styles.css";
const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Service",
    submenu: [
      {
        id: 31,
        title: "service single",
        link: "/servicesingle",
      },
      {
        id: 32,
        title: "Air Freight",
        link: "/freight",
      },
      {
        id: 33,
        title: "Road Freight",
        link: "/road",
      },
      {
        id: 34,
        title: "Ocean Freight",
        link: "/ocean",
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    submenu: [
      {
        id: 41,
        title: "Blog with sidebar",
        link: "/blog",
      },
      {
        id: 42,
        title: "Blog full width",
        link: "/blog-fullwidth",
      },
      {
        id: 43,
        title: "Blog single sidebar",
        link: "/blog",
      },
      {
        id: 44,
        title: "Blog single fullwidth",
        link: "/blog-fullwidth",
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <PerfectScrollbar>
          <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
            {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

            <ul className="responsivemenu">
              {menus.map((item) => {
                return (
                  <li key={item.id}>
                    {item.submenu ? (
                      <p onClick={this.setIsOpen(item.id)}>
                        {item.title}
                        {item.submenu ? (
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          ""
                        )}
                      </p>
                    ) : (
                      <Link to={item.link}>{item.title}</Link>
                    )}
                    {item.submenu ? (
                      <Collapse isOpen={item.id === isOpen}>
                        <Card>
                          <CardBody>
                            <ul>
                              {item.submenu.map((submenu) => (
                                <li key={submenu.id}>
                                  <Link className="active" to={submenu.link}>
                                    {submenu.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </CardBody>
                        </Card>
                      </Collapse>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </PerfectScrollbar>
        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
