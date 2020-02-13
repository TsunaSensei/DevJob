import React, {Component} from 'react';
import Job from "./Job";
import moment from "moment";

class JobCard extends Component {

    state = {
        jobSelectionne: {},
        hideMe: false,
    };

    AddView(job) {
        fetch('http://127.0.0.1:8000/api/jobs/' + job.id)
            .then(response => response.json())
            .then(data => this.setState({
                    jobSelectionne: data, loading: false,
                    jobskill: data.skills.map(skill => <li className="badge badge-success"
                                                           key={skill.id}>{skill.name}</li>),
                    date: <p>Offre ajouté {moment(job.createdAt).fromNow()}</p>
                })
            );

        this.setState({
            hideMe: true
        })
    }

    render() {

        const jobsLi = this.props.jobs.map(job =>
            <li className="d-flex justify-content-between" key={job.id}><Job job={job}/>
                <button className="btn btn-outline-primary" onClick={event => this.AddView(job)}> Voir</button>
            </li>);
        const jobS = this.state.jobSelectionne;

        return (
            <div className="card1">
                <ul className="jobList">
                    {jobsLi}
                </ul>

                { this.state.hideMe
                    ?
                    <div className="card2 border-primary fixed-top card">
                        <div className="card-header">
                            <h2>{jobS.title}</h2>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <p className="badge badge-danger">{jobS.company}</p>
                                <p>{this.state.jobskill}</p>
                            </div>
                            <div className="card-text">
                                {this.state.date}
                                {jobS.url}
                                <br/>
                                {jobS.description}
                            </div>
                        </div>
                    </div>
                    : null
                }

            </div>
        );


    }
}

export default JobCard;