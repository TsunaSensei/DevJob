import React, {Component} from 'react';
import Job from "./Job";

class JobList extends Component {
    render() {

        const jobsLi = this.props.jobs.map(job => <li key={job.id}><Job job={job}/></li>);

        return (
            <div>
                <ul className="jobList">
                    {jobsLi}
                </ul>
            </div>
        );
    }
}

export default JobList;