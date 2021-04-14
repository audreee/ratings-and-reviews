import React from 'react';
import axios from 'axios';
import RatingsAndReviewsSect from './RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 23202,
      avgRating: 0,
      productInfo: {},
    };
    this.getAverageRating = this.getAverageRating.bind(this);
  };

  getProduct(id) {
    axios.get('/overview/products/:', {
      params: { product_id: this.state.id }
    })
      .then((response) => {
        this.setState({
          productInfo: Object.assign(this.state.productInfo, response.data)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getAverageRating(average) {
    this.setState({avgRating: average})
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    return (
      <div>
        <RatingsAndReviewsSect id={this.state.id} getAverageRating={this.getAverageRating} productName={this.state.productInfo.name} />
      </div>
    );
  }
}

export default App;
