import React from 'react'
import { LineChart, Line } from 'recharts';
import '../css/StockChart.css'


export default function Settings({navVisible}) {
  const data = [{name: 'Page A', uv: 280, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 400, pv: 1400, amt: 3400},
  {name: 'Page A', uv: 140, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 550, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 450, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 700, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 200, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 500, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 600, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 250, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 650, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 170, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 350, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 850, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 250, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 650, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 590, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 690, pv: 2400, amt: 2400},
  {name: 'Page A', uv: 750, pv: 2400, amt: 2400},
  ];
  const renderLineChart = (
    <LineChart width={900} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
  return (
    <>

    <div className='portfolio' >
      <div className={!navVisible ? "page" : "page page-with-navbar"}>
        <div className='container-fluid  mt-5'>
          <div style={{marginTop:'30px'}}>
            <h3 className='mt-5' style={{fontWeight:'600',color:'black'}}>AMZN</h3>
            <p  style={{marginTop:'8px',color:'#69748B', fontSize:'14px',fontWeight:'600'}}>Amazon.Com</p>
            <h5  style={{alignItems:'center', fontWeight:'600' }}>$34,56,450</h5>
            <span style={{alignItems:'center', background:'#DCFCE7', fontSize:'15px', borderRadius:'10px',padding:'1px 5px'}}> -0.38% </span>

            <div style={{margin:'0'}}>
              {renderLineChart}
            </div>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div className='row' style={{gap:'10px'}}>

                <div className='col-2 col-lg-2'>
                  <button className='btn btn-light' style={{fontWeight:'600'}}>1D</button>
                </div>

                <div className='col-2 col-lg-2'>
                  <button className='btn btn-light' style={{fontWeight:'600'}}>7D</button>
                </div>

                <div className='col-2 col-lg-2'>
                  <button className='btn btn-dark' style={{fontWeight:'600'}}>1M</button>
                </div>

                <div className='col-2 col-lg-2'>
                  <button className='btn btn-light' style={{fontWeight:'600'}}>3M</button>
                </div>

                <div className='col-2 col-lg-2'>
                  <button className='btn btn-light' style={{fontWeight:'600'}}>1Y</button>
                </div>
              
              </div>
            </div>


            <p className='mt-5' style={{color:'#69748B', fontSize:'16px',fontWeight:'600'}}>Overview</p>

            <div className='row' style={{}}>
              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <h6 style={{fontSize:'15px',color:'#020817'}}>Close Price</h6>                                    
              </div>

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <h6 style={{fontSize:'15px',color:'#020817'}}>Last Trade Price</h6>                                      
              </div>

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <h6 style={{fontSize:'15px',color:'#020817'}}>Outstanding</h6>              
              </div>
              

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <h6 style={{fontSize:'15px',color:'#020817'}}>Market Value</h6>
              </div>
            </div>




            <div className='stock-price row' style={{}}>
              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <div className='name-right' style={{justifyContent:'space-between',alignItems:'center'}}>
                  <h6 style={{color:'black', fontWeight:'700',textAlign:'right'}}>$25,332</h6>
                </div>                        
              </div>

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <div style={{justifyContent:'space-between',alignItems:'center'}}>
                  <h6 style={{color:'black', fontWeight:'700'}}>$24,860</h6>
                </div>                        
              </div>

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <div style={{justifyContent:'space-between',alignItems:'center'}}>
                  <h6 style={{fontWeight:'700'}}>$856,924,860</h6>
                </div>
              </div>
              

              <div className="col-7 col-sm-6 col-md-4 col-lg-3" style={{}}>
                <div style={{justifyContent:'space-between',alignItems:'center'}}>
                  <h6 style={{color:'black', fontWeight:'700'}}>$489,856,924,860</h6>
                </div>                        
              </div>
            </div>


            <div className='mt-5'>
              <div className='row' style={{alignItems:'center', justifyContent:'center'}}>
                <div className='col-8 col-lg-3'>
                  <button className='btn btn-dark' style={{fontWeight:'600'}}>Add to Portfolio</button>
                </div>
              
              </div>
            
            </div>

            <p className='mt-5' style={{color:'#69748B', fontSize:'16px',fontWeight:'600'}}>Analyst Estimates</p>

            <div style={{display:'flex'}}>
              <div className='row'>
                <div className='col-12 col-lg-1' style={{backgroundColor:'#FEE2E2',width: '110px',height: '110px', borderRadius:'50%'}}>
                  <h4 style={{color:'#B91C1C', padding:'45% 32%'}}>0%</h4>
                </div>
              </div>

              <div className=''>

              <div className='row'>

                <div className='col-1 col-lg-1' style={{padding:'0'}}>
                  <h6 >Buy</h6> 
                </div>

                <div className='col-9 col-lg-9' >
                  <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>                    
                </div>

              </div>

              <div className='row'>

                <div className='col-1 col-lg-1' style={{padding:'0'}}>
                  <h6 >Buy</h6> 
                </div>

                <div className='col-9 col-lg-9' >
                  <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>                    
                </div>

              </div>

              <div className='row'>

                <div className='col-1 col-lg-1' style={{padding:'0'}}>
                  <h6 >Buy</h6> 
                </div>

                <div className='col-9 col-lg-9' >
                  <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>                    
                </div>

              </div>
              </div>



            </div>

            <div>
              <h1>
                Hiiii
              </h1>
            </div>











          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}
