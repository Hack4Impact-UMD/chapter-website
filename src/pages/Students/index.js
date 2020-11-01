import React from 'react';
import Events from "./Events.js";
class Students extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <div>
                    <h1>
                        Students
                    </h1>
                </div>
                <Events/>
            </section>
        )
    }
}
export default Students;