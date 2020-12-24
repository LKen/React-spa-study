import React from 'react'
import logo from './logo.svg';
import './App.css';

/* class Square extends React.Component {
  // ? 构造函数必须以 super(props) 开头
  // constructor(props) {
  //   super(props)

  //   // * 相当于 vue.data
  //   this.state = {
  //     value: null
  //   }
  // }

  // handleClick() {
  //   // ! 证明普通的方法引入是不带this，不会像vue那样自动绑定当前组件的上下文环境
  //   // ! 如下，只能手动 bind
  //   console.log(this?.props.value);

  //   this.setState({ value: 'X' })

  // }

  render() {
    return (
      // <button className="square" onClick={this.handleClick.bind(this)}>{this.state.value}</button>
      <button
        className="square"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
} */

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true
  //   }
  // }

  renderSquare(i) {
    // ? 括号的来历
    // ? 为了提高可读性，我们把返回的 React 元素拆分成了多行，同时在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构了。
    // return (
    //   <Square
    //     value={this.state.squares[i]}
    //     onClick={() => this.handleClick(i)}
    //   />
    // );

    return (
      <Square
        value={this.props.squares[i]}
        onClick={(e) => this.props.onClick(i, e)} // 这里中转附带了 额外的参数,没办法用 class field
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{
        squares: Array(9).fill(null)
      }]
    }
  }

  /**
   * 为了在回调中使用 `this`，这个绑定是必不可少的
   * ! 关于 this 的用法
   * 这里绑定的方式, 与传入调用的方法有所不同, 后者脱离的声明的对象的绑定, 当函数作为对象的方法被调用时， this指向的是该对象，也称为函数调用的接收器(receiver)。
   * @param {Number} i 子组件下标
   * @param {*} e // 事件
   */
  handleClick = (i, e) => {
    /**
     * !! 必须显式的使用 preventDefault
     * !! return false 无效
     * !! 与 vue 不一样, 没有修饰符
     */
    if (e.preventDefault) {
      e.preventDefault()
    }
    /**
     * * 替换：不可变性，优势在于可以 撤销和恢复 等功能上比较优势
     * * 其实是可以直接修改 (仅限引用类型)，直接在原数据上修改，就好像 vue 一样, 基本变量是不可响应,不像 vue
     * 
     * ? 详情可以参考  https://react.docschina.org/tutorial/tutorial.html
     */
    const { state: { history, stepNumber } } = this
    const _history = history.slice(0, stepNumber + 1)
    const current = _history[_history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: _history.concat({
        squares
      }),
      stepNumber: _history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const { state: { xIsNext, history, stepNumber } } = this
    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const moves = history.map((step, move) => (
      // ? 在不排序的情况下,以索引为 key 也是合适的
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>Go to {move ? `move # ${move}` : `Game Start`}</button>
      </li>
    ))

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick(e) {
    // this.state.date = new Date() // ? 这样是不更新的，因为 setData 这个方法不是那么简单
    // 每一次渲染的时候,都会去同一个state, 就像一个快照 (snapshot)
    // this.setState({
    //   date: new Date()
    // });

    // 链式调用,更新 state 以确保每一次传进来的 state 都是基于上一次的结果
    this.setState((state) => {
      return {
        date: new Date()
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut', value2: '出' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleChange2 = (event) => {
    this.setState({ value2: event.target.value });
  }

  handleSubmit = (event) => {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option> {/* React 并不会使用 selected 属性, 而是在根 select 标签上使用 value 属性。这在受控组件中更便捷, 也就是说 设置也没用 */}
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
            {/* <option selected value="mango">芒果</option> */}
          </select>
        </label>

        <br />

        <label htmlFor="">
          {/* <input value="hi" /> */} {/* 在受控组件上指定 value 的 prop 会阻止用户更改输入 */}
        </label>

        <label>
          名字:
          <input type="text" value={this.state.value2} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="提交" />

        <label htmlFor="">
          {this.props.left}
        </label>
      </form>
    );
  }
}


function App() {
  // ? null/undefined/false 阻止渲染, 0 不行,会渲染 0 本身
  // if (true) return null

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre dangerouslySetInnerHTML={{ __html: `Edit <code>src/App.js</code> and save to reload. &#x000A;I\`m coming, React Js!` }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Game />
        <Clock />

        {true && <div className="chu">21323</div>}

        <MyForm
          left={
            <div className="123">test children component (like vue slot)</div>
          }>
        </MyForm>
      </header>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
