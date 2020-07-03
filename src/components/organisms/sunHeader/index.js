import * as React from 'react';
import Button from '../../atoms/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import TextBlock from '../../molecules/textBlock';
import './styles.scss'
import prime from '../../assets/icons/prime.png'
import Image from '../../atoms/images/index'
    
 

const SubHeader = () => {
    return (
        <div className='sub-header'>
            <Button className='btn-wrapper'>
                <div className='btn-content'>
                    <div className='location-icon'>
                        <FontAwesomeIcon icon={faMapMarker}/>
                    </div>
                    <div className='btn-text'>
                        <TextBlock upText='Deliver to Riddhi' downText='Rajkot 360004'/>
                    </div>
                    </div>
            </Button>
            <div className='text-btn-wrapper'>
            <Button className='text'>riddhi's Amazon.in</Button>
            <Button className='text'>Amazon Pay</Button>
            <Button className='text'>Mobiles</Button>
            <Button className='text'>Best Sellers</Button>
            <Button className='text'>Customer Service</Button>
            <Button className='text'>Pantry</Button>
            <Button className='text'>Buy Again</Button>
            <Button className='text'>Computers</Button>
            </div>
            <div className='image'>
                <Image height='40px' width='100px' src={prime}/>
            </div>
            <div className='free-btn'>
                <Button className='button'>
                <TextBlock upText='FREE delivery' downText='movies & more' />
                </Button>
                
            </div>
            <div className='btn-header-wrapper'>
                <Button className='btn'><span>Kindle e-Readers</span></Button>
                <Button className='btn'><span>Free Kindle Reading Apps</span></Button>
                <Button className='btn'><span>Kindle eBooks</span></Button>
                <Button className='btn'><span>Kindle Unlimited</span></Button>
                <Button className='btn'><span>Prime Reading</span></Button>
                <Button className='btn'><span>Deals on Kindle eBooks</span></Button>
                <Button className='btn'><span>Best Sellers</span></Button>
                <Button className='btn'><span>Indian language eBooks</span></Button>
                <Button className='btn'><span>Kindle Exam Central</span></Button>
                <Button className='btn'><span>Kindle eTextbooks</span></Button>
            </div>
        </div>
    )
}

export default SubHeader