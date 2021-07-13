import React from 'react'
import { MDBIcon} from 'mdbreact';

function Home () {
    return (
        <div className="row home bg"> 
            <div className="col-md-6 col-sm-6 animated fadeInUp">
                <div className="desc">
                    <div>
                        <h1>Hi !</h1>
                        <h2>I'm Nada</h2>
                        <a
                            className="btn"
                            href="https://www.dropbox.com/s/tj3k0jxlew0idte/Nada%20Mabrouk%20-%202021.pdf?dl=0#"
                            target="_blank"
                        >
                            Show Resume
                            <MDBIcon
                             icon="file-pdf" 
                             size="lg"
                             className="ml-1"
                                />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;