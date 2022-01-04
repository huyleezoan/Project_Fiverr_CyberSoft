import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { http, domain } from '../../util/setting'
import { NavLink } from 'react-router-dom'
import FooterPage from './FooterPage'
export default function MarketplaceWorks(props) {
    const [left, setleft] = useState([])
    const [right, setright] = useState([])
    const [title, settitle] = useState()

    const getAPI = async (typeJob) => {

        try {
            await http.get(`${domain}/api/jobs/by-type?type=${typeJob}&skip=1&llimit=10`).then(
                (result) => {
                    console.log('getAPI', result.data);
                    setleft(result.data)
                }
            )
        } catch (err) {
            console.log('messs', err);
        }
    }
    const getAPIright = async (typeJob) => {
        let resp
        try {
            resp = await http.get(`${domain}/api/type-jobs/${typeJob}`)
        } catch (err) {
            console.log('messs', err);
        }
        return resp
    }
    const renderTitle = () => {
        return right.map((item, index) => {
            return <div className="col-12" key={index}>
                <NavLink to={`/detailcourse/:${item.typeJob}`} className="card-title">{item.name}</NavLink>
            </div>

        })
    }
    const renderCard = () => {
        return left.map((item, index) => {
            return <NavLink to='/detailcourse' className="col-4" key={index}>
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{}</h5>
                    </div>
                </div>
            </NavLink>

        })

    }
    useEffect(() => {
        async function fetchAPI() {
            const resp = await getAPIright('61987421aef344001cecfb35');
            
            if (resp) {
                console.log('data',resp.data.subTypeJobs)
                setright(resp.data.subTypeJobs);
                settitle(resp.data.name);
                await  getAPI(resp.data.subTypeJobs[1].typeJob);
            }

        }

        fetchAPI()
        return () => {
            console.log('will unmount fun')
        }
    }, [])
    // console.log('right',right[1].name)
    return (

        <div className='container-fluid text-center'>
            <Header />
            <h1>{title}</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem!</h4>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 ">
                        <div className="row">
                            {renderTitle()}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {renderCard()}
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>
    )
}
