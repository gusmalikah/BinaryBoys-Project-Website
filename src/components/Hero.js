import Slideshow from "./slide"

function Hero(){
    return(
        <main>
            <div className="info">
                <h1>About Project</h1>
                <p>
                Binary Boys is the name of the student group for the course Software Innovation (DIT827) at University Of Gothenburg.
                Binary Boys works in cooperation with Sahlgrenska University Hospital. It is a software that will connect
                to the monitor (Moberg Monitor) used in ICU and read the files at the same time as they are written.
                The outcome should be a visualization of the signals in the real time. The scope of this project reflects on 
                understanding of binary data extraction, conversion then visualizing it with the help of MATLAB For this purpose 
                the group decided to use Phyton as a programming language as according to our understanding Phyton would be the 
                best for such a project within this scope.
                <span>...Due to Data privacy the project repository is private...</span>
                </p>
            </div>
            <div className="slide">
                <Slideshow />
            </div>
        </main>
    )
}
export default Hero