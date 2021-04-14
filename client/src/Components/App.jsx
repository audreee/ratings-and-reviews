import React from 'react';

import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';
import OverviewSect from './OverviewSect/OverviewSect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 23202,
      avgRating: 0,
      productInfo: {},
      styleInfo: {}
    };
    this.changePage = this.changePage.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStyleInfo = this.getStyleInfo.bind(this);
  };

  changePage(newid) {
    this.setState({id: newid})
  }

  getAverageRating(average) {
    this.setState({avgRating: average})
  }

  getProductInfo(someInfo) {
    this.setState({productInfo: someInfo})
  }

  getStyleInfo(styleInfo) {
    this.setState({styleInfo: styleInfo})
  }

  render() {
    return (
      <div>
        <OverviewSect id={this.state.id} getProductInfo={this.getProductInfo} getStyleInfo={this.getStyleInfo} />
        <RatingsAndReviewsSect id={this.state.id} getAverageRating={this.getAverageRating} productName={this.state.productInfo.name} />
      </div>
    );
  }
}

export default App;