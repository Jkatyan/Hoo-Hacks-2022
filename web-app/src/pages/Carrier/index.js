import React, { Component } from "react";

//Cards
import CardInfo from "../../components/Cards/Info";
import CardDefault from "../../components/Cards/Default";
import CardBasic from "../../components/Cards/Basic";
import CardDropdown from "../../components/Cards/Dropdown";

import PageHeading from "../../components/PageHeading";

//Navigation
import SidebarDirect from "../../components/Navigation/SidebarDirect";
import Topbar from "../../components/Navigation/Topbar";
import { Link } from "react-router-dom";

class Carrier extends Component {
  state = { value: "" };

  handleSubmit(event) {
    this.setState({ value: "Assignment Completed" });
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <SidebarDirect />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}

                <PageHeading title="Upcoming Tasks" />
                <h5>
                  The following assignments are due next week, please plan ahead accordingly!
                </h5>
                <div className="row">
                  <div class="col-lg-6">
                    <CardBasic title="PSYC: Weekly Reflection 2">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>1 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Problem Set 7">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>4 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Webassign Unit 3-3">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>3 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Webassign Unit 3-4">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>3 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="MATH: Webassign Unit 3-5">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>3 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL Lab: DNA Structures Pre-Lab">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>2 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL: Discussion Post #4">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>1 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL: Homework 8">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>2 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="BIOL Lab: DNA Structures Post-Lab">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>2 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Machine #3">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>3 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Lab 10 Debugging">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>4 Hours</code>
                        </label>
                      </form>
                    </CardBasic>
                  </div>
                  <div class="col-lg-6">
                    <CardBasic title="CS: Array-Based Linked List Workout">
                      <form class="col-lg-6">
                        <label>
                          Estimated Completion Time: <code>2 Hours</code>
                        </label>
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

export default Carrier;
