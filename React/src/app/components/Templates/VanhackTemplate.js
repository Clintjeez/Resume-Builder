import React from 'react';

import '../../styles/VanhackTemplate.css'

export class VanhackTemplate extends React.Component {
    componentWillMount() {
        if (!this.props.hasOwnProperty('resume')) {
            this.redirect('/home');
            return;
        }
    }
    render() {
        let resume = this.props.resume;
        return(
            <div>
                <div id="resume-header">
                    <h2 id="resume-full-name">{resume.fullName.content}</h2>
                    <div id="resume-contact">
                        <p id="resume-city-country">{resume.city.content}, {resume.country.content}</p>
                        <p id="resume-email">{resume.email.content}</p>
                        <p id="resume-phone">{resume.phone.content}</p>
                    </div>
                    <div id="resume-title">
                        <p id="resume-job-title">{resume.jobTitle.content}</p>
                        <p id="resume-website"><a href={resume.website.content} target="_blank">{resume.website.content}</a></p>
                        <p id="resume-github"><a href={resume.github.content} target="_blank">{resume.github.content}</a></p>
                    </div>
                </div>
                <div id="work-experience">
                    {resume.experience.content.length > 0 ? <h4>WORK EXPERIENCE</h4> : null}
                    <ul className="resume-list">
                        {resume.experience.content.map(function(value, key){
                            return (
                                <li key={key}>
                                    <p className="resume-job-title-company">{value.jobTitle.content}, {value.company.content}</p>
                                    <p className="resume-local-time">{value.from.content} - {value.to.content} - {value.local.content}</p>
                                    <ul className="resume-list">
                                        {value.items.content.map(function (value, key) {
                                            return <li key={key} className="resume-job-achievements">{value.content}</li>
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id="side-projects">
                    {resume.sideProject.content.length > 0 ? <h4>SIDE PROJECTS</h4> : null}
                    <ul className="resume-list">
                        {resume.sideProject.content.map(function(value, key){
                            return (
                                <li key={key} className="resume-side-job">
                                    <p><a href={value.url.content} target="_blank">{value.projectName.content}</a>: {value.description.content}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id="education">
                    {resume.education.content.length > 0 ? <h4>EDUCATION</h4> : null}
                    <ul className="resume-list">
                        {resume.education.content.map(function(value, key){
                            return (
                                <li key={key}>
                                    <p>{value.degree.content}, {value.local.content}</p>
                                    <ul className="resume-list">
                                        {value.items.content.map(function (value, key) {
                                            return <li key={key} className="resume-education-achievements">{value.content}</li>
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id="skills">
                    {resume.skills.content ? <h4>TECHNICAL SKILLS</h4> : null}
                    <p>{resume.skills.content}</p>
                </div>
                <div id="languages">
                    {resume.languages.content ? <h4>LANGUAGES</h4> : null}
                    <p>{resume.languages.content}</p>
                </div>
            </div>
        );
    }
}