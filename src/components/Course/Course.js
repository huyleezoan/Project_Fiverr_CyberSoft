import React, { useEffect } from 'react'
import "./Course.css"
import { domain, http } from '../../util/setting';
import { useSelector } from 'react-redux';

export default function Course(props) {

    // const { arrayCourse } = useSelector(rootReducer => rootReducer.CourseReducer);

    
    // const getAPI = async (job) => {
    //     try {
    //         await http.get(`${domain}/api/jobs`).then(
    //             (res) => {
    //                 console.log('dataAPI', res.data);

    //             }
    //         )
    //     } catch (err) {
    //         console.log('err', err);
    //     }
    // }

    // useEffect(() => {
    //     async function fetchAPI() {
    //         getAPI();
    //     }

    //     fetchAPI();
    //     return () => {
    //         console.log('will unmount fun');
    //     }
    // }, [])

    return (
        <section className="mostServices container__build">
            <div className="content">
                <div className="header row">
                    <div className="col-2">
                        <img src="./img/fiverr-choice-icon.jpg" alt="fiverr-choice-icon" />
                    </div>
                    <div className="col-8">
                        <h3>Services that people loved for superb work and delivery</h3>
                    </div>
                </div>
                <div className="cardList row">
                        <div className="cardServices">
                            {/* <h6>{course.price}</h6> */}
                            <h6>Under US$20</h6>
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="cardDetail">
                                    <a href="#"><img className="card-img-top" src="./img/html_card_1-1.png" alt /></a>
                                    <div className="card-body">
                                        <div className="author">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src="./img/html_card_ava_1.jpg" alt />
                                                </div>
                                                <div className="col-6">
                                                    <a href="#">rahathussain01</a>
                                                    <p>Level 2 Seller</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3><a href="#">I will bug fix and repair HTML css php on your website</a></h3>
                                        <div className="evaluate">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width={15} height={15}>
                                                <path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                </path>
                                            </svg><span> </span>5.0
                                            <span>(56)</span>
                                        </div>
                                        <hr />
                                        <div className="cardFooter row">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
                                                </path>
                                            </svg>
                                            <a href="#">
                                                <small>Starting at</small>
                                                <span>US$15</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>

    )
}
