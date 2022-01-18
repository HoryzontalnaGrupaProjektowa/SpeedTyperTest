import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    quote: null
  };

  async componentDidMount() {
    const url = 'http://api.quotable.io/random?minLength=200&maxLength=250';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ quote: data.content, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading quote...</div>;
    }

    if (!this.state.quote) {
      return <div>Error: Didn't get any quote</div>;
    }

    return (
      <div>
        <div>{this.state.quote}</div>
      </div>
    );
  }
}
