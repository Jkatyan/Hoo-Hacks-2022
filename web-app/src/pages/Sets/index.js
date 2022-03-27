import React, { Component } from "react";

//Cards
import CardInfo from "../../components/Cards/Info";
import CardDefault from "../../components/Cards/Default";
import CardBasic from "../../components/Cards/Basic";
import CardDropdown from "../../components/Cards/Dropdown";

import PageHeading from "../../components/PageHeading";

//Navigation
import Sidebar from "../../components/Navigation/SidebarDirect";
import Topbar from "../../components/Navigation/Topbar";
import { Link } from "react-router-dom";

class Sets extends Component {
  state = { value: "" };

  handleSubmit(event) {
    this.setState({ value: "Assignment Completed" });
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}

                <PageHeading title="Weekly Tasks" />
                <h5>
                  After completing a task, fill out how many hours it took you
                  to complete the task!
                </h5>
                <div className="row">
                  <div class="col-lg-6">
                    <CardBasic title="PSYC: Weekly Reflection">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Problem Set 6">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Webassign Unit 3-1">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Webassign Unit 3-2">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL Lab: Protein Modeling Pre-Lab">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL Lab: Protein Modeling Lab Report">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <input type="text" name="name" />
                        </label>
                        ⠀
                        <Link type="submit" value="Submit" to="/dashboard">
                          Submit
                        </Link>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL: Discussion Post #3">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL: Homework 7">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <input type="text" name="name" />
                        </label>
                        ⠀
                        <Link type="submit" value="Submit" to="/dashboard">
                          Submit
                        </Link>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Linked Lists Workout">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <b>Assignment Completed!</b>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Machine #2">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <input type="text" name="name" />
                        </label>
                        ⠀
                        <Link type="submit" value="Submit" to="/dashboard">
                          Submit
                        </Link>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Ethics in AI Discussion">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <input type="text" name="name" />
                        </label>
                        ⠀
                        <Link type="submit" value="Submit" to="/dashboard">
                          Submit
                        </Link>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Lab 9: UML Study">
                      <form class="col-lg-6">
                        <label>
                          Completion Time:
                          <br />
                          <input type="text" name="name" />
                        </label>
                        ⠀
                        <Link type="submit" value="Submit" to="/dashboard">
                          Submit
                        </Link>
                      </form>
                    </CardBasic>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sets;
