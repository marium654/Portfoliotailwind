import "../style/education.css";
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted by Professionals for Exceptional Quality and Service Our Clients from various 
                industries trust us to deliver top-notch quality and results.Here's what they have to say
                about our work..</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Alpha College</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>Commerce Student</h1>
                </div>
            </div>
            {/* box 2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT Initiative</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>Certified Web 3.0 and metaverse</h1>
                </div>
            </div>
            {/* box 3 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>Certificate of Web Development</h1>
                </div>
            </div>
        </main>
    )
}
export default Education