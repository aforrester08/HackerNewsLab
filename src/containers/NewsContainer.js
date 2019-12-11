import React from 'react';
import StoriesList from '../components/StoriesList.js';
import Filter from '../components/Filter.js';


class NewsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      storiesIds: [],
      stories: [],
      filterInput: '',
      filterDate: false
    }
    this.handleTitleFiltered = this.handleTitleFiltered.bind(this);
    this.handleDateFiltered = this.handleDateFiltered.bind(this);
  }

  componentDidMount() {
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    fetch(url)
    .then(res => res.json())
    .then(storiesIds => {
      return storiesIds.map(story => {
        return (`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
      })
    })
    .then(storiesUrls => this.setState({storiesIds: storiesUrls.slice(0, 20)}))
    .then(something => {
    Promise.all(this.state.storiesIds.map(story => {
          return fetch(story).then(res => res.json())
        }))
    .then(stories => this.setState({stories: stories}))
  })
  .catch(err => console.error);

  }

  handleTitleFiltered(value) {
    this.setState({
      filterInput: value
    })
  }

  handleDateFiltered() {
    this.setState({filterDate: true})
  }

  render() {

    const filteredStoryArray = this.state.stories.filter(story =>
      story.title.toUpperCase().includes(this.state.filterInput.toUpperCase()));

    if (this.state.filterDate === true) {
      const filteredStoryArray = this.state.stories.sort()
    }

    return (
      <div className='container'>
      <h1>Hacker News</h1><br/>
      <Filter onTitleFiltered={this.handleTitleFiltered} onDateFiltered={this.handleDateFiltered}/>
      <StoriesList stories ={filteredStoryArray}/>
      </div>
    )
  }
}

export default NewsContainer;
