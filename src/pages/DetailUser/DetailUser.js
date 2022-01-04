import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import InforUser from './InforUser'
import './DetailUser.css'
import InforJob from './InforJob'
import { http, domain } from '../../util/setting'

export default function DetailUser(props) {



    const [user, setuser] = useState({})
    const [job, setjob] = useState([])


    const getUser = async (id) => {
        try {
            return await http.get(`${domain}/api/users/${id}`)
        } catch (err) {
            console.log('messs', err);
        }
    }
    const conse = (value) => {
        console.log('value',value);
    }
    const getJob = async (id) => {
        let arrayJob = []
        try {
            await http.get(`${domain}/api/jobs/${id}`)
            .then(
                (result) => {
                    console.log('datajob',result.data);
                    arrayJob.push(result.data)
                    console.log('arrayJob',arrayJob)
                    setjob(arrayJob)
                }
            )
        } catch (err) {
            console.log('messs', err);
        }
    }
    useEffect(() => {
        async function fetchAPI() {
           
            const resp = await getUser("61947a73aef344001cec36dc")
            if (resp) {
                console.log("API.data", resp.data);
                setuser(resp.data);
                const {bookingJob} = resp.data
                if(bookingJob){
                    console.log('bookingJob',bookingJob)
                    const Job =  bookingJob.map(async(item,index) => {
                        console.log('item',item)
                        return await getJob(item)
                    })
                    console.log(Job)
                }
            }
        }
        fetchAPI();
        return () => {
            console.log('will unmount fun');

        }
    }, [])

    console.log('user', user)
    console.log('job', job)
    return (
        <div className="container-fluid">
            <Header />
            <div className="container ">

                <div className="row mt-5">
                    <div className="col-4">
                        <InforUser user={user} />
                    </div>
                    <div className="col-8">
                        <InforJob job={job} />
                        {/* job={job} */}
                    </div>

                </div>
            </div>
        </div>
    )
}
