import React from 'react';
import StoryItem from './StoryItem';

class StoriesList extends React.Component {

render() {
  const storyItems = this.props.stories.map((story) => {
    return (
      <StoryItem story={story} key={story.id}/>
    );
})
  return (
    <div className='story-list'>
    <ul>
    {storyItems}
    </ul>
    </div>
);

}


}

export default StoriesList;
