import React from 'react';

class StoryItem extends React.Component {
  render() {
    return (
     <li className='story-item'>
     <a href ={this.props.story.url}>{this.props.story.title}</a>
     </li>
   );

}

}

export default StoryItem;
