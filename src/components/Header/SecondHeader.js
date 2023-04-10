import React from 'react'
import "../../styles/SecondHeader.css"
import menuOptions from '../../data/SecondHeaderData'

export default function SecondHeader() {
  return (
    <div className='sub-header'>
        <div className='sub-header-wrapper'>
            {menuOptions.map((eachOption,index) => {
                return (
                    <div key={index} className='heading'>
                        <p className='heading-title'>{eachOption.heading}</p>
                        <div className='sub-header-display'>
                            {eachOption.options.map((eachSubOption,index) => {
                                return (
                                    index%2 === 1?
                                        <div key={index} className='sub-heading' style={{backgroundColor:'#f8f8f8'}}>
                                            <p>{eachSubOption.subheading}</p>
                                            <div className='sub-heading-data'>
                                                {eachSubOption.subOptions.map((eachData,index) => {
                                                    return (
                                                        <p key={index}>{eachData}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        :
                                        <div key={index} className='sub-heading' style={{backgroundColor:'white'}}>
                                            <p>{eachSubOption.subheading}</p>
                                            <div className='sub-heading-data'>
                                                {eachSubOption.subOptions.map((eachData,index) => {
                                                    return (
                                                        <p key={index}>{eachData}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            {/* <div className='heading'>
                <p>heading</p>
                <div className='sub-header-display'>
                    <div className='sub-heading'>
                        <p>subheading</p>
                        <div className='sub-heading-data'>
                            <p>data</p>
                            <p>data</p>
                            <p>data</p>
                            <p>data</p>
                        </div>
                    </div>
                    <div className='sub-heading'>
                        <p>subheading</p>
                        <div className='sub-heading-data'>
                            <p>data</p>
                            <p>data</p>
                            <p>data</p>
                            <p>data</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='heading'>
                <p>heading</p>
            </div> */}
        </div>
    </div>
  )
}
