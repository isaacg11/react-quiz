import React from 'react';
import ReactDOM from 'react-dom';

class Quiz extends React.Component {
  state = {
    questions: [
      {question: 'what is 1 + 1?', options: ['1', '2', '3', '4'], answer: '2'},
      {question: 'what is 1 + 2?', options: ['1', '2', '3', '4'], answer: '3'},
      {question: 'what is 1 + 3?', options: ['1', '2', '3', '4'], answer: '4'},
      {question: 'what is 1 + 4?', options: ['1', '2', '3', '5'], answer: '5'}
    ],
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  nextQuestion(id) {
    if(id === '2') {
      this.setState({
        step1: false,
        step2: true
      })
    } else if(id === '3') {
      this.setState({
        step2: false,
        step3: true
      })
    } else if(id === '4') {
      this.setState({
        step3: false,
        step4: true
      })
    }
  }

  gradeQuiz() {
    let userAnswers = [];
    let finalScore = 0;
    userAnswers.push(this.state.q1);
    userAnswers.push(this.state.q2);
    userAnswers.push(this.state.q3);
    userAnswers.push(this.state.q4);
    for(let i = 0; i < this.state.questions.length; i++) {
      if(this.state.questions[i].answer === userAnswers[i]) {
        finalScore += 1;
      } else {
        continue;
      }
    }

    alert(`Score: ${finalScore}/${this.state.questions.length}`);
  }

  render() {
    return (
      <span>

        {/* step 1*/}
        { this.state.step1 && (
          <span>
            <p>{this.state.questions[0].question}</p>
            <p>a. {this.state.questions[0].options[0]}</p>
            <p>b. {this.state.questions[0].options[1]}</p>
            <p>c. {this.state.questions[0].options[2]}</p>
            <p>d. {this.state.questions[0].options[3]}</p>
            <input name="q1" type="text" value={this.state.q1} onChange={this.setValue.bind(this)} />
            <button onClick={() => this.nextQuestion('2')}>Next Question</button>
          </span>
        )}

        {/* step 2*/}
        { this.state.step2 && (
          <span>
            <p>{this.state.questions[1].question}</p>
            <p>a. {this.state.questions[1].options[0]}</p>
            <p>b. {this.state.questions[1].options[1]}</p>
            <p>c. {this.state.questions[1].options[2]}</p>
            <p>d. {this.state.questions[1].options[3]}</p>
            <input name="q2" type="text" value={this.state.q2} onChange={this.setValue.bind(this)} />
            <button onClick={() => this.nextQuestion('3')}>Next Question</button>
          </span>
        )}

        {/* step 3*/}
        { this.state.step3 && (
          <span>
            <p>{this.state.questions[2].question}</p>
            <p>a. {this.state.questions[2].options[0]}</p>
            <p>b. {this.state.questions[2].options[1]}</p>
            <p>c. {this.state.questions[2].options[2]}</p>
            <p>d. {this.state.questions[2].options[3]}</p>
            <input name="q3" type="text" value={this.state.q3} onChange={this.setValue.bind(this)} />
            <button onClick={() => this.nextQuestion('4')}>Next Question</button>
          </span>
        )}

        {/* step 4*/}
        { this.state.step4 && (
          <span>
            <p>{this.state.questions[3].question}</p>
            <p>a. {this.state.questions[3].options[0]}</p>
            <p>b. {this.state.questions[3].options[1]}</p>
            <p>c. {this.state.questions[3].options[2]}</p>
            <p>d. {this.state.questions[3].options[3]}</p>
            <input name="q4" type="text" value={this.state.q4} onChange={this.setValue.bind(this)} />
            <button onClick={() => this.gradeQuiz()}>Grade</button>
          </span>
        )}

      </span>
    )
  }
}

ReactDOM.render(
  <Quiz />,
  document.getElementById('root')
)
