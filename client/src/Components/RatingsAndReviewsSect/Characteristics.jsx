import React from 'react';

import styles from './reviews.module.css';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: '',
      Width: '',
      Comfort: '',
      Quality: '',
      Length: '',
      Fit: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
    let charId = this.props.characteristics[e.target.name].id;
    let charValue = e.target.value;
    let charObj = {[charId]: Number(charValue)};
    this.props.updateCharacteristic(charObj);
  }

  renderSizeOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Size:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Size === "1"}
            name="Size"
          />
          <label>A Size Too Small</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Size === "2"}
            name="Size"
          />
          <label>A 1/2 Size Too Small</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Size === "3"}
            name="Size"
          />
            <label>Perfect</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Size === "4"}
            name="Size"
          />
           <label>A 1/2 Size Too Big</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Size === "5"}
            name="Size"
          />
          <label>A Size Too Big</label>
        </div>
      </span>
    )
  }

  renderWidthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Width:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Width === "1"}
            name="Width"
          />
          <label>Too narrow</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Width === "2"}
            name="Width"
          />
          <label>Slightly Narrow</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Width === "3"}
            name="Width"
          />
            <label>Perfect</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Width === "4"}
            name="Width"
          />
           <label>Slightly wide</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Width === "5"}
            name="Width"
          />
          <label>Too wide</label>
        </div>
      </span>
    )
  }

  renderComfortOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Comfort:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Comfort === "1"}
            name="Comfort"
          />
          <label>Uncomfortable</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Comfort === "2"}
            name="Comfort"
          />
          <label>Slightly Uncomfortable</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Comfort === "3"}
            name="Comfort"
          />
            <label>Ok</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Comfort === "4"}
            name="Comfort"
          />
           <label>Comfortable</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Comfort === "5"}
            name="Comfort"
          />
          <label>Perfect</label>
        </div>
      </span>
    )
  }

  renderQualityOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Quality:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Quality === "1"}
            name="Quality"
          />
          <label>Poor</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Quality === "2"}
            name="Quality"
          />
          <label>Below Average</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Quality === "3"}
            name="Quality"
          />
            <label>Ok</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Quality === "4"}
            name="Quality"
          />
           <label>Pretty Great</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Quality === "5"}
            name="Quality"
          />
          <label>Perfect</label>
        </div>
      </span>
    )
  }

  renderLengthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Length:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Length === "1"}
            name="Length"
          />
          <label>Runs Short</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Length === "2"}
            name="Length"
          />
          <label>Runs Slightly Short</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Length === "3"}
            name="Length"
          />
            <label>Perfect</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Length === "4"}
            name="Length"
          />
           <label>Runs Slightly Long</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Length === "5"}
            name="Length"
          />
          <label>Runs Long</label>
        </div>
      </span>
    )
  }

  renderFitOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
        <p className={styles.radioCatTitle}>Fit:</p>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="1"
            checked={this.state.Fit === "1"}
            name="Fit"
          />
          <label>Runs Tight</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="2"
            checked={this.state.Fit === "2"}
            name="Fit"
          />
          <label>Runs Slightly Tight</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="3"
            checked={this.state.Fit === "3"}
            name="Fit"
          />
            <label>Perfect</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="4"
            checked={this.state.Fit === "4"}
            name="Fit"
          />
           <label>Runs Slightly Long</label>
        </div>
        <div className={styles.radioPair}>
          <input
            type="radio"
            value="5"
            checked={this.state.Fit === "5"}
            name="Fit"
          />
          <label>Runs Long</label>
        </div>
      </span>
    )
  }

  render() {
    return (
      <div className={styles.radioGroup}>
        {this.props.characteristics.Size ? this.renderSizeOptions() : null}
        {this.props.characteristics.Width ? this.renderWidthOptions() : null}
        {this.props.characteristics.Comfort ? this.renderComfortOptions() : null}
        {this.props.characteristics.Quality ? this.renderQualityOptions() : null}
        {this.props.characteristics.Length ? this.renderLengthOptions() : null}
        {this.props.characteristics.Fit ? this.renderFitOptions() : null}
      </div>
    )
  }
}

export default Characteristics;
