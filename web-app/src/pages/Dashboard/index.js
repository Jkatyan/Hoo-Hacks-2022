import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';

const GOOGLE_API_KEY = 'AIzaSyBlS61omQ8rh-Lqp3gziw-41hHVgXmDlto';
const CALENDAR_ID = 'jaykatyan@gmail.com';
const gapi = 'https://apis.google.com/js/api.js"'

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

  getEvents(){
    let that = this;
    function start() {
      gapi.client.init({
        'apiKey': GOOGLE_API_KEY
      }).then(function() {
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
        })
      }).then( (response) => {
        let events = response.result.items
        that.setState({
          events
        }, ()=>{
          console.log(that.state.events);
        })
      }, function(reason) {
        console.log(reason);
      });
    }
    gapi.load('client', start)
  }

  render() {
    return (
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Dashboard" />

                {/* <!-- Content Row --> */}
                <div className="row">
                  <CardInfo title="Assigned Weekly Tasks"
                    icon="calendar"
                    color="primary"
                    value="12" />

                  <CardInfo title="Completed Weekly Tasks"
                    icon="calendar"
                    color="success"
                    value="5" />

                  <CardInfo title="Hours Remaining"
                    icon="clipboard"
                    color="info"
                    value="16" />

                  <CardInfo title="Today's Tasks"
                    icon="clipboard"
                    color="warning"
                    value="3" />
                </div>
                <div className="row">
                  <div className="col-xl-8 col-lg-6">
                    <ChartLine />
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <ChartDonut />
                  </div>

                </div>

              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; <b>OnTrack</b> 2022</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a></div>
    )
  }
}

export default Dashboard;