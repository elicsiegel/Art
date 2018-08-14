import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArtworkMap from './artwork_map';

class ArtistDetail extends Component {

  componentDidMount() {
    // get artist detail info from api based on the name in route
    // get artworks related to that artist from the api

    this.props.fetchArtist(this.props.artist_slug_name)
    this.props.fetchArtworks(this.props.artist_slug_name)
  }

  componentDidUpdate() {
    if (this.props.artist === undefined) {
      this.props.fetchArtist(this.props.match.params.artistName);
      this.props.fetchArtworks(this.props.match.params.artistName);
    }
    if (this.props.artworks) {
      if (this.props.coordinates === undefined) {
        this.getCoordinates();
      }
    }
  }

  getCoordinates() {

    for (var i = 0; i < this.props.artworks.length; i++) {
      // fetch artwork coordinates
      if (this.props.artworks[i].collecting_institution !== "") {
        this.props.fetchArtworkLocation(this.props.artworks[i], this.props.artist_slug_name)
      }
    };
  }

  calculateThumbnail() {
    if (this.props.artist._links.thumbnail) {
      return this.props.artist._links.thumbnail.href;
    } else {
      return '';
    }
  }

  renderArtistInfo() {
    if (!this.props.artist) return; 
    
    return (
      <div className="artist-container">
        <h2>Artist</h2>
        <div className="artist-detail">
          <img src={this.calculateThumbnail()} />
          
          <div>
            <h3>{this.props.artist.name + " (" + this.props.artist.birthday + " - " + this.props.artist.deathday + ")"}</h3>
            <p>From: {this.props.artist.hometown}</p>
            <p>Active in: {this.props.artist.location}</p>

          </div>
        </div>
      </div>

    );
  }

  renderArtworks() {
    if (!this.props.artworks) return; 
    if ( this.props.artworks.length === 0 ) return;
    
    const artworksList = this.props.artworks.map( artwork => { 

    let artwork_src;
    if (artwork._links.thumbnail) {
      artwork_src = artwork._links.thumbnail.href;
    } else {
      artwork_src = "";
    }

      return(
          <li key={artwork.slug} id={artwork.slug}>
            <img src={artwork_src} />
            <div className="artwork-info">
              <h4>{artwork.title}</h4>
              <p>{artwork.date}</p>
              <p>{artwork.medium}</p>
              <p>{artwork.collecting_institution}</p>
            </div>
          </li>
      );
    });

    return (
      <div className="artwork-container">
        <h2>Artworks</h2>
        <ul className="artwork-list">
          {artworksList}
        </ul>
        
      </div>
    );
  }

  renderArtworkMap() {
    if (!this.props.artworks || !this.props.coordinates) return; 
    if ( this.props.artworks.length === 0 ) return;
    if ( this.props.coordinates.length < this.props.numOfCoordinatesToGet ) return;
    
    return (
      <ArtworkMap 
          artworks={this.props.artworks}
          artist={this.props.artist}
          artist_slug_name={this.props.artist_slug_name}
          coordinates={this.props.coordinates}
          fetchArtworkLocation={this.props.fetchArtworkLocation}/>
    );
  }

  render() {
    var x = document.getElementsByTagName("html")[0]
    if (x) {
      x.classList.remove("backgroundMap")
    }
    return (
      <div className="artist-info">
        
        { this.renderArtistInfo() }
        { this.renderArtworks() }
        { this.renderArtworkMap() }

      </div>
    );
  }
}

export default ArtistDetail;