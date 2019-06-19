import React, { Component, Fragment } from 'react';

import Fade from 'react-reveal/Fade';

class Content extends Component {
  state = {
    milestones: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ],
    skills: [
      {
        label: '網頁前端',
        labels: [
          { label: 'JavaScript' },
          { label: 'React.js' },
          { label: 'Redux' },
          { label: 'React Router Dom' },
          { label: 'HTML' },
          { label: 'CSS' }
        ]
      },
      {
        label: '網頁後端',
        labels: [
          { label: 'Node.js' },
          { label: 'Express.js' },
          { label: 'MongoDB' },
          { label: 'Mongoose' }
        ]
      },
      {
        label: '手機開發',
        labels: [
          { label: 'React Native' },
          { label: 'React Native Navigation' }
        ]
      },
      {
        label: '其他',
        labels: [{ label: 'Git' }, { label: 'SVN' }]
      }
    ]
  };

  renderSkill = () =>
    this.state.skills.map((skill, i) => (
      <Fragment key={i}>
        <p>{skill.label}</p>
        {skill.labels.map(({ label }, j) => (
          <label
            key={j}
            style={{ backgroundColor: i % 2 === 1 && 'rgba(217,223,242,.75)' }}
          >
            {label}
          </label>
        ))}
      </Fragment>
    ));

  renderMilestone = () =>
    this.state.milestones.map(milestone => (
      <div className="timeline-milestone">
        <div className="timeline-date">
          <div className="paragrapah-indicator" />
          2018/07 - now
        </div>
        <div className="timeline-content">
          Intern
          <b> @ LeanDev 麗得科技</b>
          <ul>
            <li>desc 1</li>
            <li>desc 2</li>
            <li>desc 3</li>
            <li>desc 4</li>
          </ul>
        </div>
      </div>
    ));

  renderMailMe = () => (
    <Fragment>
      <h1 style={{ fontSize: '18px', textAlign: 'center' }}>
        <strong>・・・</strong>
      </h1>
      <div className="email-me">
        <p>歡迎直接聯絡我！</p>
        <a href="mailto:hsiehdanny860605@gmail.com">
          hsiehdanny860605@gmail.com
        </a>
      </div>
    </Fragment>
  );

  render() {
    return (
      <Fade delay={600} duration={300} bottom distance="300px" appear={true}>
        <div className="main-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages,
          </p>
          <p>
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h1>技能</h1>
          {this.renderSkill()}
          <h1>經歷</h1>
          <div className="timeline-container">{this.renderMilestone()}</div>
          {this.renderMailMe()}
        </div>
      </Fade>
    );
  }
}

export default Content;
