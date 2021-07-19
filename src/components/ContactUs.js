
import { MDBIcon} from 'mdbreact';
import '../styles/contactus.css'

export default function ContactUs(){
    return (
        <div className="row">
            <div className="contact">
            <h4>Contact Me</h4>
                    <p className="info"><MDBIcon icon="envelope" size="lg" className="mr-3"/>  nada.mohamed.1991@gmail.com</p>
                    <p className="info"><MDBIcon icon="phone"/><MDBIcon size="lg" icon="linkedin"/> 650-996-6176</p>
                    <div className="contactInfo">
                        <ul>
                            <li><a href="https://www.facebook.com/nada.r.mabrouk"><MDBIcon fab icon="facebook" className="circle facebook"/></a></li>
                            <li><a href="https://www.linkedin.com/in/nada-mabrouk-88b41086/"><MDBIcon fab icon="linkedin" className="circle linkedin"/></a></li>
                            <li><a href="https://github.com/NadaMabrouk"><MDBIcon fab icon="github" className="circle github"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}