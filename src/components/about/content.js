import React, {Component, Fragment} from 'react';
import { FirestoreDocument } from 'react-firestore'



import Fade from 'react-reveal/Fade';
import RenderMailMe from '../ui/main_me';

class Content extends Component {
    state = {
        milestones: [
            {
                id: 1
            },
            // {
            //     id: 2
            // },
            // {
            //     id: 3
            // }
        ],
        skills: [
            {
                label: '網頁前端',
                labels: [
                    {label: 'JavaScript'},
                    {label: 'React.js'},
                    {label: 'Redux'},
                    {label: 'React Router Dom'},
                    {label: 'HTML'},
                    {label: 'CSS'}
                ]
            },
            {
                label: '網頁後端',
                labels: [
                    {label: 'Node.js'},
                    {label: 'Express.js'},
                    {label: 'MongoDB'},
                    {label: 'Mongoose'}
                ]
            },
            {
                label: '手機 App 開發',
                labels: [
                    {label: 'React Native'},
                    {label: 'Flutter'}
                ]
            },
            {
                label: '其他',
                labels: [{label: 'Git'}, {label: 'SVN'}]
            }
        ]
    };

    renderSkill = (label, skills, odd) => (
        <Fragment>
            <p>{label}</p>
            {skills.map(skill =>
                <label style={{backgroundColor: odd && '#e3f2ff'}}>
                    {skill}
                </label>
            )}
        </Fragment>
    );

    renderMilestone = () =>
        this.state.milestones.map(milestone => (
            <div className="timeline-milestone">
                <div className="timeline-date">
                    <div className="paragrapah-indicator"/>
                    2018/07 - now
                </div>
                <div className="timeline-content">
                    Intern
                    <b> @ LeanDev 麗得科技</b>
                    <ul>
                        <li>協助專案開發</li>
                        <li>參與專案上線前的測試</li>
                        <li>參與每週產品開發會議</li>
                        {/*<li>desc 4</li>*/}
                    </ul>
                </div>
            </div>
        ));

    render() {
        return (
            <FirestoreDocument
                path="about/about"
                // sort="publishedDate:desc,authorName"
                render={({ isLoading, data }) => {

                    if(isLoading) return <p>loading...</p>;

                    return(
                        <Fade delay={600} duration={300} bottom distance="300px" appear={true}>
                            <div className="main-content">
                                <p>{data.introduction}</p>
                                <h1>技能</h1>
                                {this.renderSkill('網頁前端', data.frontendSkills, true)}
                                {this.renderSkill('網頁後端', data.backendSkills)}
                                {this.renderSkill('手機 App 開發', data.appSkills, true)}
                                {this.renderSkill('其他', data.otherSkills)}
                                <h1>經歷</h1>
                                <div className="timeline-container">{this.renderMilestone()}</div>
                                {RenderMailMe('歡迎直接聯絡我！')}
                            </div>
                        </Fade>
                    );
                }}
            />
        );
    }
}

export default Content;
