We will be using the DOM-binding of react router i.e. 'react-router-dom'.

<b>Installing 'react-router-dom' </b> <br>
<ul>
  <li>npm install -S react-router-dom</li>
</ul>

<b>Basic Components of React Router</b>
There are three basic components, they are:

<ul>
  <li>Routers</li>
  <li>Route Matching </li>
  <li>Route Rendering Props.</li>
</ul>

<b>1) Routers</b>
<br><br>
At the core of every React Router application should be a router component. For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers. Both of these will create a specialized history object for you. Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
<i> 
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), holder)
</i>
  
  <b>2) Route Matching </b>
  There are two route matching components: <b><Route></b> and <b><Switch></b>.
  <br><br>
  import { Route, Switch } from 'react-router-dom'
  
Route matching is done by comparing a <b><Route>'s path prop</b> to the current location’s <b>'to'</b> attribute. 
 <br> When a <Route> matches it will render its content and when it does not match, it will render null. A <Route> with no path will always match.
  
// when location = { to: '/about' }
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>

<br>
In above example, path = './about' matches to loaction's to : './about', so component - About will be rendered.
<br>
<b>Switch</b>
<br>
The <Switch> component is used to group <Route>s together.
<br>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Switch>
  <br>
  When none of the Route's path matches with the location's to attribute, a route with no path will be rendred.i.e. it can be used to show a 404 Error Page Not Found.
  
  <Switch>
  <Route path = './about' component = {About] />
  <Route path = './settings' component = {Settings} />
  // if none matches then it will render the below component of 'Erropage'.
  <Route component = {Errorpage} />
  </Switch>
