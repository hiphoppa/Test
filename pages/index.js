import Head from 'next/head'
import custom from '../styles/custom.module.css'
import { Fragment } from 'react'


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>my test</title>
      </Head>
      <div className='container'>
        <div className="text-center">
          <div className={`${custom.twitter} d-inline-block mx-3 ${custom.position}`}>
            <div className={`${custom.backT} rounded-circle`}></div>
            <button className={`twitter-btn btn rounded-circle ${custom.background}`}>
              <i className={`fa fa-twitter ${custom.font} ${custom.white} ${custom.icon} ${custom.position}`}></i>
            </button>
          </div>
          <div className={`${custom.google} d-inline-block mx-3 ${custom.position}`}>
            <div className={`${custom.backG} rounded-circle`}></div>
            <button className={`twitter-btn btn rounded-circle ${custom.background}`}>
              <i className={`fa fa-google ${custom.font} ${custom.white} ${custom.icon} ${custom.position}`}></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
