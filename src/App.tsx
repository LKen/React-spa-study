import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router/r2'
import PropTypes from 'prop-types'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ErrorBoundary>
        <Router></Router>

        <TestPropTypes optionalBool={true} optionalString={'123'}></TestPropTypes>
      </ErrorBoundary>

    </div>
  );
}

function TestPropTypes(props: any) {
  return (
    <div>
      optionalBool is: {props.optionalBool.toString()}
      <br />
      optionalString is: {props.optionalString.toString()}
      <div
        tabIndex={1}
        onFocus={(e: React.FocusEvent) => {
          if (e.currentTarget === e.target) {
            console.log('focused self');
          } else {
            console.log('focused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            // Not triggered when swapping focus between children
            console.log('focus entered self');
          }
        }}
        onBlur={(e: React.FocusEvent) => {
          if (e.currentTarget === e.target) {
            console.log('unfocused self');
          } else {
            console.log('unfocused child', e.target);
          }
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            // Not triggered when swapping focus between children
            console.log('focus left self');
          }
        }}
      >
        <input id="1" />
        <input id="2" />
      </div>
    </div>
  )
}

TestPropTypes.propTypes = {
  // ? 详情参考 https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
}

interface IState {
  hasError: boolean
}

/**
 * 错误边界处理组件
 */
class ErrorBoundary extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
