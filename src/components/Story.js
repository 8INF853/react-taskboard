import React, {Component} from 'react'

export default class Story extends Component {
    render() {
        return(
            <div className="row">
                    <div className="col s12 m12">
                    <div className="card indigo darken-3">
                        <div className="card-content white-text">
                        <span className="card-title">{this.props.title}</span>
                        <p>{this.props.description}
                          <span class="badge white">{this.props.points} points</span></p>
                        </div>
                        <div className="card-action">
                        <a className="right">Show Story</a>
                        <br />
                        </div>
                    </div>
                    </div>
                </div>
        
        )
    }
}