import React, { Component } from 'react';
import axios from 'axios';
import brace from 'brace';
 
import 'brace/mode/java';
import 'brace/theme/github';

class Dashboard extends Component {
  constructor(props)
  {
    super(props);
    console.log(props);
  }

  render(){

    return(
    <div>
          <div className="sidebar">
        <div className="sidebar-inner">
                <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="index.html">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/logo.png" alt=""/>
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">{this.props.location.state.details}</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

                <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 active">
              <a className="sidebar-link" href="index.html">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-home"></i>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className='sidebar-link' href="email.html">
                <span className="icon-holder">
                  <i className="c-brown-500 ti-email"></i>
                </span>
                <span className="title">Edit Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className='sidebar-link' href="email.html">
                <span className="icon-holder">
                  <i className="c-brown-500 ti-email"></i>
                </span>
                <span className="title">Classes</span>
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      
      <div className="page-container">
              <div className="header navbar">
          <div className="header-container">
            <ul className="nav-left">
              <li>
                <a id='sidebar-toggle' className="sidebar-toggle" href="javascript:void(0);">
                  <i className="ti-menu"></i>
                </a>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="notifications dropdown">
                <span className="counter bgc-red">3</span>
                <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                  <i className="ti-bell"></i>
                </a>

                <ul className="dropdown-menu">
                  <li className="pX-20 pY-15 bdB">
                    <i className="ti-bell pR-10"></i>
                    <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                  </li>
                  <li>
                    <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">John Doe</span>
                              <span className="c-grey-600">liked your <span className="text-dark">post</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">5 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">Moo Doe</span>
                              <span className="c-grey-600">liked your <span className="text-dark">cover image</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">7 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="" className='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
                          <div className="peer mR-15">
                            <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <span>
                              <span className="fw-500">Lee Doe</span>
                              <span className="c-grey-600">commented on your <span className="text-dark">video</span>
                              </span>
                            </span>
                            <p className="m-0">
                              <small className="fsz-xs">10 mins ago</small>
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="pX-20 pY-15 ta-c bdT">
                    <span>
                      <a href="" className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i className="ti-angle-right fsz-xs mL-10"></i></a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="notifications dropdown">
                <span className="counter bgc-blue">3</span>
                <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                  <i className="ti-email"></i>
                </a>

              </li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                  <div className="peer mR-10">
                    <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt=""/>
                  </div>
                  <div className="peer">
                    <span className="fsz-sm c-grey-900">{this.props.location.state.details}</span>
                  </div>
                </a>
                <ul className="dropdown-menu fsz-sm">
                  <li>
                    <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                      <i className="ti-power-off mR-10"></i>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      
        <main className='main-content bgc-grey-100'>
          <div id='mainContent'>
            <div className="row gap-20 masonry pos-r">
              <div className="masonry-item col-md-6">
                
                
              <ul class="pages">
    <li class="chat page">
      <div class="chatArea">
        <ul class="messages"></ul>
      </div>
      <input class="inputMessage" placeholder="Type here..."/>
    </li>
    <li class="login page">
      <div class="form">
        <h3 class="title">What's your nickname?</h3>
        <input class="usernameInput" type="text" maxlength="14" />
      </div>
    </li>
  </ul>

                
              </div>
              <div className="masonry-item col-md-6">
                
                <div className="bd bgc-white p-20">
                  <div className="layers">
                    <div className="layer w-100 mB-10">
                      <h6 className="lh-1">Todo List</h6>
                    </div>
                    <div className="layer w-100">
                      <ul className="list-task list-group" data-role="tasklist">
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall1" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Call John for Dinner</span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall2" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Book Boss Flight</span>
                              <span className="peer">
                                <span className="badge badge-pill fl-r badge-success lh-0 p-10">2 Days</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall3" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall3" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Hit the Gym</span>
                              <span className="peer">
                                <span className="badge badge-pill fl-r badge-danger lh-0 p-10">3 Minutes</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall4" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall4" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Give Purchase Report</span>
                              <span className="peer">
                                <span className="badge badge-pill fl-r badge-warning lh-0 p-10">not important</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall5" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall5" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Watch Game of Thrones Episode</span>
                              <span className="peer">
                                <span className="badge badge-pill fl-r badge-info lh-0 p-10">Tomorrow</span>
                              </span>
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item bdw-0" data-role="task">
                          <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                            <input type="checkbox" id="inputCall6" name="inputCheckboxesCall" className="peer"/>
                            <label for="inputCall6" className=" peers peer-greed js-sb ai-c">
                              <span className="peer peer-greed">Give Purchase report</span>
                              <span className="peer">
                                <span className="badge badge-pill fl-r badge-success lh-0 p-10">Done</span>
                              </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                                <div className="bd bgc-white">
                  <div className="layers">
                    <div className="layer w-100 p-20">
                      <h6 className="lh-1">Sales Report</h6>
                    </div>
                    <div className="layer w-100">
                      <div className="bgc-light-blue-500 c-white p-20">
                        <div className="peers ai-c jc-sb gap-40">
                          <div className="peer peer-greed">
                            <h5>November 2017</h5>
                            <p className="mB-0">Sales Report</p>
                          </div>
                          <div className="peer">
                            <h3 className="text-right">$6,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive p-20">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className=" bdwT-0">Name</th>
                              <th className=" bdwT-0">Status</th>
                              <th className=" bdwT-0">Date</th>
                              <th className=" bdwT-0">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="fw-600">Item #1 Name</td>
                              <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Unavailable</span> </td>
                              <td>Nov 18</td>
                              <td><span className="text-success">$12</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #2 Name</td>
                              <td><span className="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                              <td>Nov 19</td>
                              <td><span className="text-info">$34</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #3 Name</td>
                              <td><span className="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                              <td>Nov 20</td>
                              <td><span className="text-danger">-$45</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #4 Name</td>
                              <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Unavailable</span></td>
                              <td>Nov 21</td>
                              <td><span className="text-success">$65</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #5 Name</td>
                              <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Used</span></td>
                              <td>Nov 22</td>
                              <td><span className="text-success">$78</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #6 Name</td>
                              <td><span className="badge bgc-orange-50 c-orange-700 p-10 lh-0 tt-c badge-pill">Used</span> </td>
                              <td>Nov 23</td>
                              <td><span className="text-danger">-$88</span></td>
                            </tr>
                            <tr>
                              <td className="fw-600">Item #7 Name</td>
                              <td><span className="badge bgc-yellow-50 c-yellow-700 p-10 lh-0 tt-c badge-pill">Old</span></td>
                              <td>Nov 22</td>
                              <td><span className="text-success">$56</span></td>
                            </tr>
                          </tbody>
                        </table>
                       </div>
                    </div>
                  </div>
                  <div className="ta-c bdT w-100 p-20">
                    <a href="#">Check all the sales</a>
                  </div>
                </div>
              </div>
              <div className="masonry-item col-md-6">
                <div className="bd bgc-white p-20">
                  <div className="layers">
                   <div className="layer w-100 mB-20">
                      <h6 className="lh-1">Weather</h6>
                    </div>

                
                    <div className="layer w-100">
                      <div className="peers ai-c jc-sb fxw-nw">
                        <div className="peer peer-greed">
                          <div className="layers">
                
                            <div className="layer w-100">
                              <div className="peers fxw-nw ai-c">
                                <div className="peer mR-20">
                                  <h3>32<sup>°F</sup></h3>
                                </div>
                                <div className="peer">
                                  <canvas className="sleet" width="44" height="44"></canvas>
                                </div>
                              </div>
                            </div>

                
                           <div className="layer w-100">
                              <span className="fw-600 c-grey-600">Partly Clouds</span>
                            </div>
                          </div>
                        </div>
                        <div className="peer">
                          <div className="layers ai-fe">
                            <div className="layer">
                              <h5 className="mB-5">Monday</h5>
                            </div>
                            <div className="layer">
                              <span className="fw-600 c-grey-600">Nov, 01 2017</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                
                    <div className="layer w-100 mY-30">
                      <div className="layers bdB">
                        <div className="layer w-100 bdT pY-5">
                          <div className="peers ai-c jc-sb fxw-nw">
                            <div className="peer">
                              <span>Wind</span>
                            </div>
                            <div className="peer ta-r">
                              <span className="fw-600 c-grey-800">10km/h</span>
                            </div>
                          </div>
                        </div>
                        <div className="layer w-100 bdT pY-5">
                          <div className="peers ai-c jc-sb fxw-nw">
                            <div className="peer">
                              <span>Sunrise</span>
                            </div>
                            <div className="peer ta-r">
                              <span className="fw-600 c-grey-800">05:00 AM</span>
                            </div>
                          </div>
                        </div>
                        <div className="layer w-100 bdT pY-5">
                          <div className="peers ai-c jc-sb fxw-nw">
                            <div className="peer">
                              <span>Pressure</span>
                            </div>
                            <div className="peer ta-r">
                              <span className="fw-600 c-grey-800">1B</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                
                    <div className="layer w-100">
                      <div className="peers peers-greed ai-fs ta-c">
                        <div className="peer">
                          <h6 className="mB-10">MON</h6>
                          <canvas className="sleet" width="30" height="30"></canvas>
                          <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">TUE</h6>
                          <canvas className="clear-day" width="30" height="30"></canvas>
                          <span className="d-b fw-600">30<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">WED</h6>
                          <canvas className="partly-cloudy-day" width="30" height="30"></canvas>
                          <span className="d-b fw-600">28<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">THR</h6>
                          <canvas className="cloudy" width="30" height="30"></canvas>
                          <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">FRI</h6>
                          <canvas className="snow" width="30" height="30"></canvas>
                          <span className="d-b fw-600">24<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">SAT</h6>
                          <canvas className="wind" width="30" height="30"></canvas>
                          <span className="d-b fw-600">28<sup>°F</sup></span>
                        </div>
                        <div className="peer">
                          <h6 className="mB-10">SUN</h6>
                          <canvas className="sleet" width="30" height="30"></canvas>
                          <span className="d-b fw-600">32<sup>°F</sup></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
              <div className="masonry-item col-md-6">
                                <div className="bd bgc-white">
                  <div className="layers">
                    <div className="layer w-100 p-20">
                      <h6 className="lh-1">Quick Chat</h6>
                    </div>
                    <div className="layer w-100">
                
                      <div className="bgc-grey-200 p-20 gapY-15">
                
                        <div className="peers fxw-nw">
                          <div className="peer mR-20">
                            <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/11.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed">
                            <div className="layers ai-fs gapY-5">
                              <div className="layer">
                                <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                  <div className="peer mR-10">
                                    <small>10:00 AM</small>
                                  </div>
                                  <div className="peer-greed">
                                    <span>Lorem Ipsum is simply dummy text of</span>
                                  </div>
                                </div>
                              </div>
                              <div className="layer">
                                <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                  <div className="peer mR-10">
                                    <small>10:00 AM</small>
                                  </div>
                                  <div className="peer-greed">
                                    <span>the printing and typesetting industry.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="layer">
                                <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                  <div className="peer mR-10">
                                    <small>10:00 AM</small>
                                  </div>
                                  <div className="peer-greed">
                                    <span>Lorem Ipsum has been the industry's</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                
                        <div className="peers fxw-nw ai-fe">
                          <div className="peer ord-1 mL-20">
                            <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/12.jpg" alt=""/>
                          </div>
                          <div className="peer peer-greed ord-0">
                            <div className="layers ai-fe gapY-10">
                              <div className="layer">
                                <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                  <div className="peer mL-10 ord-1">
                                    <small>10:00 AM</small>
                                  </div>
                                  <div className="peer-greed ord-0">
                                    <span>Heloo</span>
                                  </div>
                                </div>
                              </div>
                              <div className="layer">
                                <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                  <div className="peer mL-10 ord-1">
                                    <small>10:00 AM</small>
                                  </div>
                                  <div className="peer-greed ord-0">
                                    <span>??</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                                     <div className="p-20 bdT bgc-white">
                        <div className="pos-r">
                          <input type="text" className="form-control bdrs-10em m-0" placeholder="Say something..."/>
                          <button type="button" className="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1">
                            <i className="fa fa-paper-plane-o"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
    )
  }
}

export default Dashboard;