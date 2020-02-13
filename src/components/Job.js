import React, {Component} from 'react';
import moment from "moment";
import "moment/locale/fr";
import "./Job.scss";
import "./JobCard.scss"

class Job extends Component {
    render() {

        const job = this.props.job;
        const skills = this.props.job.skills.map(skill => <li className="skill badge badge-success" key={skill.id}>{skill.name}</li>);

        return (

            <article>
                <div className="card-body">
                    <h2>{job.title}</h2>
                    <div className="card-subtitle">
                        <h4 className="badge badge-danger">{job.company}</h4>
                        <ul>{skills}</ul>
                    </div>
                    <h5>Offre ajouté {moment(job.createdAt).fromNow()}</h5>
                </div>
            </article>

        );
    }
}

export default Job;