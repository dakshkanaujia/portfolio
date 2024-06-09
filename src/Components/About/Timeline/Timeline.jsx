import React from "react"
import './Timeline.css'
import '../../../Common.css'

function Timeline(){
    return (
        <>
            <div className="Education bebas-neue-regular">Education</div>
            <section className="design-section">
                <div className="timeline">
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    
                    <div className="timeline-component timeline-content poppins">
                        <h3>Scaler School of Technology(2023-2027)</h3>
                        <p>Pursuing Bachelor's and Masters in Computer Science.</p>
                    </div>
                    
                    <div className="timeline-component timeline-content poppins">
                        <h3>La Martinere College(ISC - 12th) - 2023</h3>
                        <p>Scored 85% in PCM including CS and English</p>
                    </div>
                    
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-empty"></div>
                    
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    
                    <div className="timeline-component timeline-content poppins">
                        <h3>La Martinere College(ICSE - 10th) - 2021</h3>
                        <p>Scored 95% in PCM including CS and English</p>
                    </div>
                </div>
            </section>

    </>
)
}

export default Timeline;