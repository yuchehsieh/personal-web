import React, {Component, Fragment} from 'react';

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

    renderSkill = () =>
        this.state.skills.map((skill, i) => (
            <Fragment key={i}>
                <p>{skill.label}</p>
                {skill.labels.map(({label}, j) => (
                    <label key={j} style={{backgroundColor: i % 2 === 1 && '#e3f2ff'}}>
                        {label}
                    </label>
                ))}
            </Fragment>
        ));

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
            <Fade delay={600} duration={300} bottom distance="300px" appear={true}>
                <div className="main-content">
                    <p>
                        我是謝育哲，目前就讀於臺北教育大學玩具與遊戲設計研究所，在大學期間曾經擔任系學會幹部與班上的副班代，參與籌備過許多活動。大四下時加入一間新創公司實習參與專案進行，專職在前端開發，並參與產品開發會議，應用大學四年的所學，並同時開始在職場上累積經驗。
                    </p>
                    <h1>技能</h1>
                    {this.renderSkill()}
                    <h1>經歷</h1>
                    <div className="timeline-container">{this.renderMilestone()}</div>
                    {RenderMailMe('歡迎直接聯絡我！')}
                </div>
            </Fade>
        );
    }
}

export default Content;
