import React from 'react'
import video from '../video.png'
import close from '../close.png'

function VideoCall() {
    return (
        <>
            <div className="modal fade" id="videocallModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <div className="avatar-lg mx-auto mb-4">
                                    <img src="assets/images/users/avatar-4.jpg" alt="" className="img-thumbnail rounded-circle" />
                                </div>

                                <h5 className="text-truncate">Doris Brown</h5>
                                <p className="text-muted mb-0">Start Video Call</p>

                                <div className="mt-5">
                                    <ul className="list-inline mb-1">
                                        <li className="list-inline-item px-2 me-2 ms-0">
                                            <button type="button" className="btn btn-danger avatar-sm rounded-circle" data-bs-dismiss="modal">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <img src={close} alt="close" style={{ width: "15px" }} />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="list-inline-item px-2">
                                            <button type="button" className="btn btn-success avatar-sm rounded-circle">
                                                <span className="avatar-title bg-transparent font-size-20">
                                                    <img src={video} alt="video" style={{ width: "20px" }} />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCall