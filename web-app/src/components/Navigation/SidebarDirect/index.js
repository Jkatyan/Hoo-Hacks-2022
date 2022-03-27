import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';

class SidebarDirect extends Component {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  render() {
    const { clickMenuOpen, toggled } = this.props;
    return (
      <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-light accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-light accordion'} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">

          <div className="sidebar-brand-text mx-3">OnTrack</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/checks">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapseTwo"  aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Tasks</span>
          </a>
          <div id="collapseTwo" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/weekly-tasks">Weekly</Link>
              <Link className="collapse-item" to="/carrier">Upcoming</Link>
            </div>
          </div>
        </li>
      </ul>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDirect);