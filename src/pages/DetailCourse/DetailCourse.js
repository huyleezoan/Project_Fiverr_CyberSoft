import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { http, domain } from '../../util/setting'
import "./DetailCourse.css"
import { Rate } from 'antd';
import Content from './Content';

export default function DetailCourse(props) {
    const [user, setuser] = useState({})
    const [job, setjob] = useState({})
    const getJob = async (typeJob) => {
        let resp
        try {
            resp = await http.get(`${domain}/api/jobs/61987b8aaef344001cecfecf`)
        } catch (err) {
            console.log('messs', err);
        }
        return resp
    }
    const getUser = async (id) => {

        try {
            return await http.get(`${domain}/api/users/${id}`)
        } catch (err) {
            console.log('messs', err);
        }

    }
    useEffect(() => {
        async function fetchAPI() {
            const resp = await getJob()
            if (resp) {
                console.log("API.data", resp.data);
                setjob(resp.data);
                setuser((await getUser(resp.data.userCreated)).data)
            }
        }
        fetchAPI();
        return () => {
            console.log('will unmount fun');

        }
    }, [])

    console.log('job', job)

    return (
        <div className="container-fluid">
            {/* DetailCourse:{props.match.params.id} */}
            <Header />
            <h1>Result fot "{job?.type?.name}"</h1>
            <div className="row ">
                <div className="col-8">
                    <h4>{job?.name}</h4>
                    <div>
                        <span className="mr-3">{user.name}</span>

                        <button></button>
                        <Rate defaultValue={job?.rating} />
                    </div>
                    <img className="img-fluid w-100 mt-4" src={job?.image} alt=".." />

                    <h4 className="mt-5">About This Gig</h4>

                    <p className="mt-4">I am a full time Wix web site designer/developer. I have 4+ years of website designing experience using Wix platform. Being a Wix specialist, I have worked with numerous clients to help with developing clean, modern and elegant websites to fulfill their requirements.
                    </p>
                    <div className="ml-2">
                        <p>I am a full time Wix web site designer/developer. I have 4+ years of website designing experience using Wix platform. Being a Wix specialist, I have worked with numerous clients to help with developing clean, modern and elegant websites to fulfill their requirements.</p>
                        <p><br /></p>
                        <p><strong><u>&nbsp;What I can do for you in WIX:</u></strong></p>
                        <p><br /></p>
                        <ul><li>Design a WIX site from scratch</li>
                            <li>Redesign your WIX site to next level</li>
                            <li>Mobile-Friendly Responsive site</li>
                            <li>Add new features to your existing WIX site</li>
                            <li>Transfer your current website to WIX</li>
                            <li>A beautiful Wix landing page</li>
                            <li>100% quality guarantee</li>
                        </ul>
                        <p><br /></p>
                        <p><strong><u>Why choosing me will be the right choice</u></strong></p>
                        <p><br /></p>
                        <ul><li>100% genuine and professional work</li>
                            <li>Fast and Easy communication</li>
                            <li>Extra fast delivery</li>
                            <li>30 days Free Support after project completion</li>
                        </ul>
                        <p><br /></p>
                        <p>
                            <strong>
                                <u>I would be happy to answer any questions you have.</u>
                            </strong>
                        </p>
                        <p><br /></p>
                        <p>
                            <strong>
                                <u>If something is not included in my packages or extra's, please message prior :)
                                </u>
                            </strong>
                        </p>
                        <p><br /></p>
                        <p>
                            <strong>
                                <u>Feel free to ask me any questions you have and contact me</u>
                            </strong>
                        </p>
                    </div>
                    <hr />
                    <div className="col-6">
                        <h5>{job?.type?.name}</h5>
                        <p>{job?.subType?.name}</p>
                    </div>
                    <h2 className="mt-4"> About The Seller</h2>
                    <div className="row">
                        <div className="col-4">img</div>
                        <div className="col-8">
                            <p>{job?.name}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <nav className="text-center">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link nav-cus active col-4" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Basic</a>
                            <a className="nav-link nav-cus col-4" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Standard</a>
                            <a className="nav-link nav-cus col-4" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Premium</a>
                        </div>
                    </nav>
                    <div className="tab-content tab-cus" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <Content value={{'price': job?.price,'day':1,'page':1,'name':"Basic"}}/>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <Content value={{'price': job?.price,'day':2,'page':5,'name':"Standard"}}/>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <Content value={{'price': job?.price,'day':3,'page':10,'name':"Premium"}}/>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}


