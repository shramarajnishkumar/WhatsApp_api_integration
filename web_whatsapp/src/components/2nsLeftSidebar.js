import React from 'react'

function SecondLeftSidebar() {
    return (
        <>
            <div className="chat-leftsidebar me-lg-1 ms-lg-0">
                <div className="tab-content">
                    <div className="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                        <div>
                            <div className="px-4 pt-4">
                                <div className="user-chat-nav float-end">
                                    <div className="dropdown">
                                        <a href="/" className="font-size-18 text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-more-2-fill"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="/">Edit</a>
                                            <a className="dropdown-item" href="/">Action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Another action</a>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mb-0">My Profile</h4>
                            </div>

                            <div className="text-center p-4 border-bottom">
                                <div className="mb-4">
                                    <img src="assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt=""/>
                                </div>

                                <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
                                <p className="text-muted text-truncate mb-1"><i className="ri-record-circle-fill font-size-10 text-success me-1 ms-0 d-inline-block"></i> Active</p>
                            </div>

                            <div className="p-4 user-profile-desc" data-simplebar>
                                <div className="text-muted">
                                    <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                </div>


                                <div id="tabprofile" className="accordion">
                                    <div className="accordion-item card border mb-2">
                                        <div className="accordion-header" id="about2">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#about" aria-expanded="true" aria-controls="about">
                                                <h5 className="font-size-14 m-0">
                                                    <i className="ri-user-2-line me-2 ms-0 ms-0 align-middle d-inline-block"></i> About
                                                </h5>
                                            </button>
                                        </div>
                                        <div id="about" className="accordion-collapse collapse show" aria-labelledby="about2" data-bs-parent="#tabprofile">
                                            <div className="accordion-body">
                                                <div>
                                                    <p className="text-muted mb-1">Name</p>
                                                    <h5 className="font-size-14">Patricia Smith</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Email</p>
                                                    <h5 className="font-size-14">adc@123.com</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Time</p>
                                                    <h5 className="font-size-14">11:40 AM</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Location</p>
                                                    <h5 className="font-size-14 mb-0">California, USA</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card accordion-item border">
                                        <div className="accordion-header" id="attachfile2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#attachfile" aria-expanded="false" aria-controls="attachfile">
                                                <h5 className="font-size-14 m-0">
                                                    <i className="ri-attachment-line me-2 ms-0 ms-0 align-middle d-inline-block"></i> Attached Files
                                                </h5>
                                            </button>
                                        </div>
                                        <div id="attachfile" className="accordion-collapse collapse" aria-labelledby="attachfile2" data-bs-parent="#tabprofile">
                                            <div className="accordion-body">
                                                <div className="card p-2 border mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                <i className="ri-file-text-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">Admin-A.zip</h5>
                                                                <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                                            </div>
                                                        </div>

                                                        <div className="ms-4 me-0">
                                                            <ul className="list-inline mb-0 font-size-18">
                                                                <li className="list-inline-item">
                                                                    <a href="/" className="text-muted px-1">
                                                                        <i className="ri-download-2-line"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a className="dropdown-toggle text-muted px-1" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Delete</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card p-2 border mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                <i className="ri-image-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">Image-1.jpg</h5>
                                                                <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                                                            </div>
                                                        </div>

                                                        <div className="ms-4 me-0">
                                                            <ul className="list-inline mb-0 font-size-18">
                                                                <li className="list-inline-item">
                                                                    <a href="/" className="text-muted px-1">
                                                                        <i className="ri-download-2-line"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a className="dropdown-toggle text-muted px-1" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Delete</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card p-2 border mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                <i className="ri-image-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">Image-2.jpg</h5>
                                                                <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                                                            </div>
                                                        </div>

                                                        <div className="ms-4 me-0">
                                                            <ul className="list-inline mb-0 font-size-18">
                                                                <li className="list-inline-item">
                                                                    <a href="/" className="text-muted px-1">
                                                                        <i className="ri-download-2-line"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a className="dropdown-toggle text-muted px-1" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Delete</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card p-2 border mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-sm me-3 ms-0">
                                                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                <i className="ri-file-text-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="text-start">
                                                                <h5 className="font-size-14 mb-1">Landing-A.zip</h5>
                                                                <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                                                            </div>
                                                        </div>

                                                        <div className="ms-4 me-0">
                                                            <ul className="list-inline mb-0 font-size-18">
                                                                <li className="list-inline-item">
                                                                    <a href="/" className="text-muted px-1">
                                                                        <i className="ri-download-2-line"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item dropdown">
                                                                    <a className="dropdown-toggle text-muted px-1" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="ri-more-fill"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a className="dropdown-item" href="/">Action</a>
                                                                        <a className="dropdown-item" href="/">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="/">Delete</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                        <div>
                            <div className="px-4 pt-4">
                                <h4 className="mb-4">Chats</h4>
                                <div className="search-box chat-search-box">            
                                    <div className="input-group mb-3 rounded-3">
                                        <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                                            <i className="ri-search-line search-icon font-size-18"></i>
                                        </span>
                                        <input type="text" className="form-control bg-light" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1"/>
                                    </div> 
                                </div> 
                            </div> 
                            <div className="px-4 pb-4" dir="ltr">

                                <div className="owl-carousel owl-theme" id="user-status-carousel">
                                    <div className="item">
                                        <a href="/" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src="assets/images/users/avatar-2.jpg" alt="user-img" className="img-fluid rounded-circle"/>
                                                <span className="user-status"></span>
                                            </div>
    
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="/" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src="assets/images/users/avatar-4.jpg" alt="user-img" className="img-fluid rounded-circle"/>
                                                <span className="user-status"></span>
                                            </div>
    
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Doris</h5>
                                        </a>
                                    </div>
    
                                    <div className="item">
                                        <a href="/" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src="assets/images/users/avatar-5.jpg" alt="user-img" className="img-fluid rounded-circle"/>
                                                <span className="user-status"></span>
                                            </div>
    
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Emily</h5>
                                        </a>
                                    </div>
    
                                    <div className="item">
                                        <a href="/" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src="assets/images/users/avatar-6.jpg" alt="user-img" className="img-fluid rounded-circle"/>
                                                <span className="user-status"></span>
                                            </div>
    
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Steve</h5>
                                        </a>
                                    </div>
    
                                    <div className="item">
                                        <a href="/" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    T
                                                </span>
                                                <span className="user-status"></span>
                                            </div>
    
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Teresa</h5>
                                        </a>
                                    </div>
            
                                </div>
                            </div>

                            <div>
                                <h5 className="mb-3 px-3 font-size-16">Recent</h5>

                                <div className="chat-message-list px-2" data-simplebar>
            
                                    <ul className="list-unstyled chat-list chat-user-list">
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">                            
                                                    <div className="chat-user-img online align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                            
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Patrick Hendricks</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Hey! there I'm available</p>
                                                    </div>
                                                    <div className="font-size-11">05 min</div>
                                                </div>
                                            </a>
                                        </li>
    
                                        <li className="unread">
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img away align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Mark Messer</h5>
                                                        <p className="chat-user-message text-truncate mb-0"><i className="ri-image-fill align-middle me-1 ms-0"></i> Images</p>
                                                    </div>
                                                    <div className="font-size-11">12 min</div>        
                                                    <div className="unread-message">
                                                        <span className="badge badge-soft-danger rounded-pill">02</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
    
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                G
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">General</h5>
                                                        <p className="chat-user-message text-truncate mb-0">This theme is awesome!</p>
                                                    </div>
                                                    <div className="font-size-11">20 min</div>
                                                </div>
                                            </a>
                                        </li>
    
                                        <li className="active">
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img online align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Doris Brown</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Nice to meet you</p>
                                                    </div>    
                                                    <div className="font-size-11">10:12 AM</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="unread">
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                D
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Designer</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Next meeting tomorrow 10.00AM</p>
                                                    </div>
                                                    <div className="font-size-11">12:01 PM</div>
                                                    <div className="unread-message">
                                                        <span className="badge badge-soft-danger rounded-pill">01</span>
                                                    </div>
                                                </div>                            
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">                        
                                                <div className="d-flex">
                                                    <div className="chat-user-img away align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Steve Walker</h5>
                                                        <p className="chat-user-message text-truncate mb-0"><i className="ri-file-text-fill align-middle me-1 ms-0"></i> Admin-A.zip</p>
                                                    </div>        
                                                    <div className="font-size-11">03:20 PM</div>
                                                </div>                        
                                            </a>
                                        </li>
                                        <li className="typing">
                                            <a href="/">                        
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center online me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                A
                                                            </span>
                                                        </div>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Albert Rodarte</h5>
                                                        <p className="chat-user-message text-truncate mb-0">typing<span className="animate-typing">
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                        </span></p>
                                                    </div>
                                                    <div className="font-size-11">04:56 PM</div>
                                                </div>  
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center online me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                M
                                                            </span>
                                                        </div>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Mirta George</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Yeah everything is fine</p>
                                                    </div>           
                                                    <div className="font-size-11">12/07</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img away align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Paul Haynes</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Good morning</p>
                                                    </div>        
                                                    <div className="font-size-11">12/07</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center online me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                J
                                                            </span>
                                                        </div>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Jonathan Miller</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Hi, How are you?</p>
                                                    </div>                  
                                                    <div className="font-size-11">12/07</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img away align-self-center me-3 ms-0">
                                                        <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt=""/>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Ossie Wilson</h5>
                                                        <p className="chat-user-message text-truncate mb-0">I've finished it! See you so</p>
                                                    </div>    
                                                    <div className="font-size-11">11/07</div>                                                       
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex">
                                                    <div className="chat-user-img align-self-center online me-3 ms-0">
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                S
                                                            </span>
                                                        </div>
                                                        <span className="user-status"></span>
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Sara Muller</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Wow that's great</p>
                                                    </div>  
                                                    <div className="font-size-11">11/07</div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane" id="pills-groups" role="tabpanel" aria-labelledby="pills-groups-tab">
                        <div>
                            <div className="p-4">
                                <div className="user-chat-nav float-end">
                                    <div  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create group">
                                        <button type="button" className="btn btn-link text-decoration-none text-muted font-size-18 py-0" data-bs-toggle="modal" data-bs-target="#addgroup-exampleModal">
                                            <i className="ri-group-line me-1 ms-0"></i>
                                        </button>
                                    </div>
            
                                </div>
                                <h4 className="mb-4">Groups</h4>
        
                                <div className="modal fade" id="addgroup-exampleModal" tabindex="-1" role="dialog" aria-labelledby="addgroup-exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title font-size-16" id="addgroup-exampleModalLabel">Create New Group</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                                </div>
                                            <div className="modal-body p-4">
                                                <form>
                                                    <div className="mb-4">
                                                        <label for="addgroupname-input" className="form-label">Group Name</label>
                                                        <input type="text" className="form-control" id="addgroupname-input" placeholder="Enter Group Name"/>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="form-label">Group Members</label>
                                                        <div className="mb-3">
                                                            <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#groupmembercollapse" aria-expanded="false" aria-controls="groupmembercollapse">
                                                                Select Members
                                                            </button>
                                                        </div>

                                                        <div className="collapse" id="groupmembercollapse">
                                                            <div className="card border">
                                                                <div className="card-header">
                                                                    <h5 className="font-size-15 mb-0">Contacts</h5>
                                                                </div>
                                                                <div className="card-body p-2">
                                                                    <div data-simplebar style={{maxHeight: "150px"}}>
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                A
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck1" checked/>
                                                                                        <label className="form-check-label" for="memberCheck1">Albert Rodarte</label>
                                                                                    </div>
                                                                                </li>
    
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck2"/>
                                                                                        <label className="form-check-label" for="memberCheck2">Allison Etter</label>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                C
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck3"/>
                                                                                        <label className="form-check-label" for="memberCheck3">Craig Smiley</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                D
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck4"/>
                                                                                        <label className="form-check-label" for="memberCheck4">Daniel Clay</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                I
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck5"/>
                                                                                        <label className="form-check-label" for="memberCheck5">Iris Wells</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                J
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck6"/>
                                                                                        <label className="form-check-label" for="memberCheck6">Juan Flakes</label>
                                                                                    </div>
                                                                                </li>
    
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck7"/>
                                                                                        <label className="form-check-label" for="memberCheck7">John Hall</label>
                                                                                    </div>
                                                                                </li>
    
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck8"/>
                                                                                        <label className="form-check-label" for="memberCheck8">Joy Southern</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                M
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck9"/>
                                                                                        <label className="form-check-label" for="memberCheck9">Michael Hinton</label>
                                                                                    </div>
                                                                                </li>
    
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck10"/>
                                                                                        <label className="form-check-label" for="memberCheck10">Mary Farmer</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                P
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck11"/>
                                                                                        <label className="form-check-label" for="memberCheck11">Phillis Griffin</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                R
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck12"/>
                                                                                        <label className="form-check-label" for="memberCheck12">Rocky Jackson</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
    
                                                                        <div>
                                                                            <div className="p-3 fw-bold text-primary">
                                                                                S
                                                                            </div>
    
                                                                            <ul className="list-unstyled contact-list">
                                                                                <li>
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox" className="form-check-input" id="memberCheck13"/>
                                                                                        <label className="form-check-label" for="memberCheck13">Simon Velez</label>
                                                                                    </div>
                                                                                </li>
    
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="addgroupdescription-input" className="form-label">Description</label>
                                                        <textarea className="form-control" id="addgroupdescription-input" rows="3" placeholder="Enter Description"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Create Groups</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="search-box chat-search-box">            
                                    <div className="input-group rounded-3">
                                        <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                                            <i className="ri-search-line search-icon font-size-18"></i>
                                        </span>
                                        <input type="text" className="form-control bg-light" placeholder="Search groups..." aria-label="Search groups..." aria-describedby="basic-addon1"/>
                                    </div> 
                                </div> 
                            </div>

                            <div className="p-4 chat-message-list chat-group-list" data-simplebar>
        

                                <ul className="list-unstyled chat-list">
                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            G
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            R
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#Reporting <span className="badge badge-soft-danger rounded-pill float-end">+23</span></h5>
                                                </div>                        
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            D
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#Designers</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            D
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#Developers <span className="badge badge-soft-danger rounded-pill float-end">New</span></h5>
                                                </div>
                                            </div>
                        
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            P
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#Project-alpha</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <div className="d-flex align-items-center">
                                                <div className="chat-user-img me-3 ms-0">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            B
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h5 className="text-truncate font-size-14 mb-0">#Snacks</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                        <div>
                            <div className="p-4">
                                <div className="user-chat-nav float-end">
                                    <div data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Contact">
                                        <button type="button" className="btn btn-link text-decoration-none text-muted font-size-18 py-0" data-bs-toggle="modal" data-bs-target="#addContact-exampleModal">
                                            <i className="ri-user-add-line"></i>
                                        </button>
                                    </div>
                                </div>
                                <h4 className="mb-4">Contacts</h4>

                                <div className="modal fade" id="addContact-exampleModal" tabindex="-1" role="dialog" aria-labelledby="addContact-exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title font-size-16" id="addContact-exampleModalLabel">Add Contact</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                </button>
                                            </div>
                                            <div className="modal-body p-4">
                                                <form>
                                                    <div className="mb-3">
                                                        <label for="addcontactemail-input" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="addcontactemail-input" placeholder="Enter Email"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="addcontact-invitemessage-input" className="form-label">Invatation Message</label>
                                                        <textarea className="form-control" id="addcontact-invitemessage-input" rows="3" placeholder="Enter Message"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-link" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Invite Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="search-box chat-search-box">
                                    <div className="input-group bg-light  input-group-lg rounded-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-link text-decoration-none text-muted pe-1 ps-3" type="button">
                                                <i className="ri-search-line search-icon font-size-18"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control bg-light" placeholder="Search users.."/>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 chat-message-list chat-group-list" data-simplebar>
        
                                <div>
                                    <div className="p-3 fw-bold text-primary">
                                        A
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Albert Rodarte</h5>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Allison Etter</h5>                        
                                                </div>
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        C
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Craig Smiley</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        D
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Daniel Clay</h5>  
                                                </div>
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Doris Brown</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        I
                                    </div>

                                    <ul className="list-unstyled contact-list">
                
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Iris Wells</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        J
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Juan Flakes</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">John Hall</h5>
                                                </div>                                                
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Joy Southern</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        M
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Mary Farmer</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Mark Messer</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Michael Hinton</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        O
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Ossie Wilson</h5>
                                                </div>                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        P
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Phillis Griffin</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Paul Haynes</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        R
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Rocky Jackson</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div className="p-3 fw-bold text-primary">
                                        S
                                    </div>

                                    <ul className="list-unstyled contact-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Sara Muller</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Simon Velez</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <h5 className="font-size-14 m-0">Steve Walker</h5>
                                                </div>
                        
                                                <div className="dropdown">
                                                    <a href="/" className="text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-2-fill"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="/">Share <i className="ri-share-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Block <i className="ri-forbid-line float-end text-muted"></i></a>
                                                        <a className="dropdown-item" href="/">Remove <i className="ri-delete-bin-line float-end text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
                        <div>
                            <div className="px-4 pt-4">
                                <h4 className="mb-0">Settings</h4>
                            </div>

                            <div className="text-center border-bottom p-4">
                                <div className="mb-4 profile-user">
                                    <img src="assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt=""/>
                                    <button type="button" className="btn btn-light bg-light avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <i className="ri-pencil-fill"></i>
                                    </button>
                                </div>

                                <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
                                <div className="dropdown d-inline-block mb-1">
                                    <a className="text-muted dropdown-toggle pb-1 d-block" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Available <i className="mdi mdi-chevron-down"></i>
                                    </a>
          
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="/">Available</a>
                                      <a className="dropdown-item" href="/">Busy</a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 user-profile-desc" data-simplebar>        
                                <div id="settingprofile" className="accordion">
                                    <div className="accordion-item card border mb-2">
                                        <div className="accordion-header" id="personalinfo1">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalinfo" aria-expanded="true" aria-controls="personalinfo">
                                                <h5 className="font-size-14 m-0">Personal Info</h5>
                                            </button>
                                        </div>
                                        <div id="personalinfo" className="accordion-collapse collapse show" aria-labelledby="personalinfo1" data-bs-parent="#settingprofile">
                                            <div className="accordion-body">
                                                <div className="float-end">
                                                    <button type="button" className="btn btn-light btn-sm"><i className="ri-edit-fill me-1 ms-0 align-middle"></i> Edit</button>
                                                </div>

                                                <div>
                                                    <p className="text-muted mb-1">Name</p>
                                                    <h5 className="font-size-14">Patricia Smith</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Email</p>
                                                    <h5 className="font-size-14">adc@123.com</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Time</p>
                                                    <h5 className="font-size-14">11:40 AM</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="text-muted mb-1">Location</p>
                                                    <h5 className="font-size-14 mb-0">California, USA</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card border mb-2">
                                        <div className="accordion-header" id="privacy1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#privacy" aria-expanded="false" aria-controls="privacy">
                                                <h5 className="font-size-14 m-0">Privacy</h5>
                                            </button>
                                        </div>
                                        <div id="privacy" className="accordion-collapse collapse" aria-labelledby="privacy1" data-bs-parent="#settingprofile">
                                            <div className="accordion-body">
                                                <div className="py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>
                                                        </div>
                                                        <div className="dropdown ms-2 me-0">
                                                            <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Everyone <i className="mdi mdi-chevron-down"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="/">Everyone</a>
                                                                <a className="dropdown-item" href="/">selected</a>
                                                                <a className="dropdown-item" href="/">Nobody</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-3 border-top">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>

                                                        </div>
                                                        <div className="ms-2 me-0">
                                                            <div className="form-check form-switch">
                                                                <input type="checkbox" className="form-check-input" id="privacy-lastseenSwitch" checked/>
                                                                <label className="form-check-label" for="privacy-lastseenSwitch"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="py-3 border-top">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="font-size-13 mb-0 text-truncate">Status</h5>
                                                        </div>
                                                        <div className="dropdown ms-2 me-0">
                                                            <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Everyone <i className="mdi mdi-chevron-down"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="/">Everyone</a>
                                                                <a className="dropdown-item" href="/">selected</a>
                                                                <a className="dropdown-item" href="/">Nobody</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="py-3 border-top">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>
                                                        </div>
                                                        <div className="ms-2 me-0">
                                                            <div className="form-check form-switch">
                                                                <input type="checkbox" className="form-check-input" id="privacy-readreceiptSwitch" checked/>
                                                                <label className="form-check-label" for="privacy-readreceiptSwitch"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                        
                                                <div className="py-3 border-top">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>

                                                        </div>
                                                        <div className="dropdown ms-2 me-0">
                                                            <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Everyone <i className="mdi mdi-chevron-down"></i>
                                                            </button>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="/">Everyone</a>
                                                                <a className="dropdown-item" href="/">selected</a>
                                                                <a className="dropdown-item" href="/">Nobody</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card border mb-2">
                                        <div className="accordion-header" id="security1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#security" aria-expanded="false" aria-controls="security">
                                                <h5 className="font-size-14 m-0"> Security</h5>
                                            </button>
                                        </div>
                                        <div id="security" className="accordion-collapse collapse" aria-labelledby="security1" data-bs-parent="#settingprofile">
                                            <div className="accordion-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="font-size-13 mb-0 text-truncate">Show security notification</h5>

                                                    </div>
                                                    <div className="ms-2 me-0">
                                                        <div className="form-check form-switch">
                                                            <input type="checkbox" className="form-check-input" id="security-notificationswitch"/>
                                                            <label className="form-check-label" for="security-notificationswitch"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="accordion-item card border mb-2">
                                        <div className="accordion-header" id="help1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                <h5 className="font-size-14 m-0"> Help</h5>
                                            </button>
                                        </div>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="help1" data-bs-parent="#settingprofile">
                                            <div className="accordion-body">
                                                <div className="py-3">
                                                    <h5 className="font-size-13 mb-0"><a href="/" className="text-body d-block">FAQs</a></h5>
                                                </div>
                                                <div className="py-3 border-top">
                                                    <h5 className="font-size-13 mb-0"><a href="/" className="text-body d-block">Contact</a></h5>
                                                </div>
                                                <div className="py-3 border-top">
                                                    <h5 className="font-size-13 mb-0"><a href="/" className="text-body d-block">Terms & Privacy policy</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SecondLeftSidebar