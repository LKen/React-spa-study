import React, { createContext, Profiler } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Router from './router/r1'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = createContext(
  themes.dark // 默认值
);

ThemeContext.displayName = '辣鸡'

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background }}
      />
    );
  }
}

// function App() {
//   // ? null/undefined/false 阻止渲染, 0 不行,会渲染 0 本身
//   // if (true) return null

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <pre dangerouslySetInnerHTML={{ __html: `Edit <code>src/App.js</code> and save to reload` }} />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <Router ></Router>
//       </header>
//     </div>
//   );
// }

// eslint-disable-next-line no-unused-vars
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

const modelRoot = document.getElementById('modal')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    modelRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modelRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
  }

  handleClick = () => {
    this.setState(preState => ({
      clicks: preState.clicks + 1
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

class App extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark
      }))
    }

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      hasError: false,
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }


  componentDidCatch(error, errorInfo) {
    debugger
    console.log(error, errorInfo);
  }

  monitor(data) {
    console.log(data);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre dangerouslySetInnerHTML={{ __html: `Edit <code>src/App.js</code> and save to reload` }} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>

          <Router />

          {/* <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />


            <ThemeContext.Consumer>
              {(value) => (
                <div>当前的颜色 {value.background}</div>
              )}
            </ThemeContext.Consumer>
          </ThemeContext.Provider> */}

          <ThemeContext.Provider value={this.state}>
            <ErrorBoundary>
              <Content />
            </ErrorBoundary>
          </ThemeContext.Provider>
          <Profiler id="Portals" onRender={this.monitor}>
            <Parent />
          </Profiler>
        </header>


        {/* <Section>
          <ThemedButton />
        </Section> */}
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

class ThemeTogglerButton extends React.Component {
  render() {
    // setTimeout(() => {
    //   throw new Error('I crashed!');
    // }, 3000)
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div>
            <button
              onClick={() => {
                toggleTheme()
              }}
              style={{ backgroundColor: theme.background }}>
              Toggle Theme
              </button>

            <div>当前的颜色 {theme.background}</div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}



export default App;