import React from 'react'

import ArtistTitleToPleaseDiogo from './ArtistTitleToPleaseDiogo'

const Painting = (props) =>
  <div onClick={() => props.selectPainting(props.painting)} className='ui card'>
    <div className='image'>
      <img src={props.painting.image} />
    </div>
    <div className='content'>
      <h2 className='header'>{props.painting.title}</h2>
      <ArtistTitleToPleaseDiogo artist={props.painting.artist.name} />
    </div>
    <div className="extra content">
    <a>
      <i className="like icon" onClick={event => {
        event.stopPropagation()
        props.likePainting(props.painting.id)
      }}></i>
      {props.painting.votes}
    </a>
  </div>
  </div>

export default Painting 
