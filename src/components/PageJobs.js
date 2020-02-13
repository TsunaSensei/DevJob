import React, {Component} from 'react';
import JobList from "./JobList";
import JobCard from "./JobCard";

class PageJobs extends Component {
    render() {
        return (
            <div className="container">
                <h2>Offres d'emploi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis leo ut ex blandit tristique. Sed odio enim, egestas ac ipsum a, consectetur dictum sapien.</p>
                <JobCard jobs={this.props.jobs}/>
            </div>
        );
    }
}

export default PageJobs;