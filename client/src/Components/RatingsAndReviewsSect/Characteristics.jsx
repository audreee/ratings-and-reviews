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
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Size === "1"}
            name="Size"
          />
          A size too small
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Size === "2"}
            name="Size"
          />
          1/2 a size too small
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Size === "3"}
            name="Size"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Size === "4"}
            name="Size"
          />
          1/2 a size too big
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Size === "5"}
            name="Size"
          />
          A size too big
        </label>
      </span>
    )
  }

  renderWidthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Width:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Width === "1"}
            name="Width"
          />
          Too Narrow
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Width === "2"}
            name="Width"
          />
          Slightly Narrow
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Width === "3"}
            name="Width"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Width === "4"}
            name="Width"
          />
          Slightly wide
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Width === "5"}
            name="Width"
          />
          Too wide
        </label>
      </span>
    )
  }

  renderComfortOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Comfort:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Comfort === "1"}
            name="Comfort"
          />
          Uncomfortable
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Comfort === "2"}
            name="Comfort"
          />
          Slightly uncomfortable
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Comfort === "3"}
            name="Comfort"
          />
          Ok
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Comfort === "4"}
            name="Comfort"
          />
          Comfortable
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Comfort === "5"}
            name="Comfort"
          />
          Perfect
        </label>
      </span>
    )
  }

  renderQualityOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Quality:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Quality === "1"}
            name="Quality"
          />
          Poor
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Quality === "2"}
            name="Quality"
          />
          Below Average
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Quality === "3"}
            name="Quality"
          />
          What I expected
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Quality === "4"}
            name="Quality"
          />
          Pretty great
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Quality === "5"}
            name="Quality"
          />
          Perfect
        </label>
      </span>
    )
  }

  renderLengthOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Length:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Length === "1"}
            name="Length"
          />
          Runs short
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Length === "2"}
            name="Length"
          />
          Runs slightly short
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Length === "3"}
            name="Length"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Length === "4"}
            name="Length"
          />
          Runs slightly long
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Length === "5"}
            name="Length"
          />
          Runs long
        </label>
      </span>
    )
  }

  renderFitOptions() {
    return(
      <span className={styles.radioRow} onChange={this.handleInputChange}>
         <p className={styles.radioCatTitle}>Fit:</p>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.Fit === "1"}
            name="Fit"
          />
          Runs tight
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.Fit === "2"}
            name="Fit"
          />
          Runs slightly tight
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.Fit === "3"}
            name="Fit"
          />
          Perfect
        </label>
        <label>
          <input
            type="radio"
            value="4"
            checked={this.state.Fit === "4"}
            name="Fit"
          />
          Runs slightly long
        </label>
        <label>
          <input
            type="radio"
            value="5"
            checked={this.state.Fit === "5"}
            name="Fit"
          />
          Runs long
        </label>
      </span>
    )
  }

  render() {
    return (
      <div className={styles.radioGroup}>
        <p>Characteristics</p>
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