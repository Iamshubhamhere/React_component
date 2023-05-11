import React, { Component } from 'react'
import Button from './Button'

export class Banner extends Component {
  render() {
    const{ Heading } = this.props;
    return (
      <div className=' container banner '>
        <h2>{Heading}</h2>
        
        <p className='p-one'>The World's Largest Anime Collection</p>
        <p className='p-two'>Watch anytime, anywhere</p>
        <p className='p-three'>Stream on desktop, mobile, gaming consoles, 
        and other streaming devices that include iOS, Android, Apple TV, Xbox, 
        Roku, and PS4.</p>
        <div className='buttons'>
                  <Button type='primary' text='Watch now'/>
                  <Button type='secondary' text='Sign in'/>
                </div>
        </div>
    )
  }
}

export default Banner