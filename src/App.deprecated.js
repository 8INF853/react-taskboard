import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
      return (
        <div >
          <nav class="indigo darken-4" role="navigation">
            <div class="nav-wrapper container">
              <a id="logo-container" href="#" class="brand-logo">React Taskboard</a>
            </div>
          </nav>

          <div class="section no-pad-bot" id="index-banner">
            <div class="container">
              <h1 class="header center orange-text">Stories</h1>
              <h3>2 stories</h3>
              <div class="row">
                <div class="col s12 m12">
                  <div class="card indigo darken-3">
                    <div class="card-content white-text"> 
                      <span class="card-title">Hire insurace</span>
                      <p>As a user, I would like to purchase insurance.<span class="badge white">10 points</span></p>
                    </div>
                    <div class="card-action">
                      <a class="right" href="#">Show Story</a>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col s12 m12">
                  <div class="card indigo darken-3">
                    <div class="card-content white-text">
                      <span class="card-title">Cancel insurance</span>
                      <p>As a user, I would like to cancel my insurance.<span class="badge white">20 points</span></p>
                    </div>
                    <div class="card-action">
                      <a class="right" href="#">Show Story</a>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <footer class="page-footer orange">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  React Introduction to 8INF853
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              Build with <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default App;
