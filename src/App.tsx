import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component<{}> {
  constructor(props: {}) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Navbar bg="app" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Budget Tool</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <Navbar.Text><Link className="unstyled-link" to="/home">Home</Link></Navbar.Text>
              {/* <Link className="unstyled-link" to="/home"><Nav.Link>Home</Nav.Link></Link> */}
              <Nav.Link><Link className="unstyled-link" to="/budget">Budget</Link></Nav.Link>
              <Nav.Link><Link className="unstyled-link" to="/accounts">Accounts</Link></Nav.Link>
              <Nav.Link><Link className="unstyled-link" to="/transactions">Transactions</Link></Nav.Link>
              <Nav.Link><Link className="unstyled-link" to="/summary">Summary</Link></Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/home">
              Home
          </Route>
          <Route path="/budget">
            Budget
          </Route>
          <Route path="/accounts">
            Accounts
          </Route>
          <Route path="/transactions">
            Transactions
          </Route>
          <Route path="/summary">
            Summary
          </Route>
        </Switch>

      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      // </div>
    );
  }
}

export default App;
