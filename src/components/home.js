import React, { Component } from "react";

import ArtistSearch from "./artists-search";
import Artist from "./artists";
import Event from "./event-detail";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyWord: "",
      artistItem: [],
      eventsList: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState(prevState => ({
      eventsList: []
    }));
  };
  submitHandler(e) {
    e.preventDefault();
    if (this.state.searchKeyWord.length > 0) {
      const url =
        "https://rest.bandsintown.com/artists/" +
        this.state.searchKeyWord +
        "?app_id=test";
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(myJson => {
          this.setState(prevState => ({
            artistItem: []
          }));

          this.setState(prevState => ({
            artistItem: [...prevState.artistItem, myJson]
          }));
        });
      console.log(this.state);
    } else {
      this.setState({ artistItem: [] });
    }
  }

  getEvents(e) {
    const url =
      "https://rest.bandsintown.com/artists/" + e.name + "/events?app_id=test";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState(prevState => ({
          eventsList: []
        }));

        if (myJson && myJson.length) {
          this.setState({ eventsList: myJson });
        }
      });
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <ArtistSearch
          formsubmit={this.submitHandler}
          name="searchKeyWord"
          placeholder="Search Artists"
          inputprops="search artist here"
          onChange={this.changeHandler}
          buttnlabel="search"
        />

        <div className="result-label">
          {this.state.artistItem.length ? (
            <span>
              Results found for  <span className="search-keyword">"{this.state.searchKeyWord}"</span>
            </span>
          ) : ('')}
        </div>

        <div className="artit-block">
          {this.state.artistItem.length
            ? this.state.artistItem.map(item => (
                <Artist
                  imgUrl={item.image_url}
                  name={item.name}
                  fbUrl={item.facebook_page_url}
                  getData={() => {
                    this.getEvents(item);
                  }}
                />
              ))
            : ""}
        </div>

        <div>
          {this.state.eventsList.map(event => (
            <div key={event.id}>
              <Event
                artCountry={event.venue.country}
                artCity={event.venue.city}
                artVenue={event.venue.name}
                artDate={event.datetime}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
