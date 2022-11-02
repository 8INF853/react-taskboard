import React, {Component} from 'react'
import Story from './Story'

const API_URL = 'http://localhost:8080/stories/'

export default class Taskboard extends Component {
    _findStories() {
      const stories = [
       {id: 1, title: "Hide Insurance", description:"As a user...", points: 10},
       {id: 2, title: "Cancel Insurance", description:"As a user...", points: 20}
      ]

      return stories.map(story =>
        <Story title={story.title} description={story.description}
                points={story.points} key={story.id} />)
    }

    render() {
        const stories = this._findStories()

        return (
          <div class="section no-pad-bot" id="index-banner">
            <div class="container">
              <h1 class="header center orange-text">Stories</h1>
              <h3>{stories.length} stories</h3>
              {stories}
            </div>
          </div>
        )
    }
}