import React, { Component } from "react";
import Button from "../components/Button/Button";
import { generateNumbers } from "../utils/utils";
import "../styles/App.css";

interface PProps {
  name: string;
  pins: number[];
}
interface PState {
  pins: number[];
  savedpins: number[];
}
class GeneratePins extends Component<PProps, PState> {
  state: PState = {
    pins: generateNumbers([], 1000, 9999, 5),
    savedpins: [],
  };
  componentWillUnmount() {
    console.log("unmounting...");
  }
  componentDidMount() {
    console.log("mounting... generate pins");
  }

  handleGeneratePins = () => {
    let npins: number[] = generateNumbers([], 1000, 9999, 5);
    this.setState({
      pins: npins,
    } as Pick<PState, keyof PState>);
  };
  handleSavePins = (e) => {
    e.preventDefault();

    this.setState({
      savedpins: [...this.state.savedpins, JSON.stringify(this.state.pins)],
    } as Pick<PState, keyof PState>);
    this.handleGeneratePins();
  };
  render() {
    const { pins } = this.state;

    return (
      <div className="App">
        <span className="form">
          {pins.map((pin, index) => (
            <input
              key={index}
              type="number"
              name={pin + ""}
              maxLength={4}
              value={pin}
              readOnly
            />
          ))}
        </span>

        <Button mode="raised" onClick={this.handleGeneratePins}>
          Generate
        </Button>
        <Button
          mode="raised"
          design="success"
          type="submit"
          onClick={this.handleSavePins}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default GeneratePins;
