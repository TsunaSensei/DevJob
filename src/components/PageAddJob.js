import React, {Component} from 'react';

class PageAddJob extends Component {

        state = {
            titre: null,
            entreprise: null,
            competences: [],
            url: null,
            description: null
        };

        change = e => {
            if(e.target.id === "competences")
            {
                this.state.competences = [].filter.call(e.target.options, o => o.selected).map(o => o.value);
            } else {
                this.setState({
                    [e.target.id]: e.target.value
                });
            }
            console.log(this.state)
        };

        submit = e => {
            e.preventDefault();
            console.log(this.state);


            fetch('http://127.0.0.1:8000/api/jobs',{ method:"POST", headers: {'Content-Type':'application/json'}, body:JSON.stringify({
                    "title": this.state.titre,
                    "company": this.state.entreprise,
                    "skills": this.state.competences,
                    "url": this.state.url,
                    "description": this.state.description,
                })})

        };

        render() {

        const skills = this.props.skills.map(skill => <option value={"/api/skills/"+skill.id} key={skill.id}>{ skill.name }</option> );

        return (
            <div className="container">
                <h2>Ajouter une offre</h2>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="titre">Titre</label>
                        <input type="text" className="form-control" id="titre"
                                placeholder="Titre" onChange={this.change}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="entreprise">Entreprise</label>
                        <input type="text" className="form-control" id="entreprise"
                               placeholder="Nom de votre entreprise" onChange={this.change}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="competences">Compétences</label>
                        <select multiple className="form-control" id="competences" onChange={this.change}>
                            {skills}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" id="url"
                               placeholder="Site internet" onChange={this.change}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descr">Description</label>
                        <textarea className="form-control" id="description" rows="3" placeholder="Description de l'offre" onChange={this.change}/>
                    </div>
                    <button type="submit" className="btn btn-dark">Envoyer</button>
                </form>
            </div>
        );
    }
}

export default PageAddJob;