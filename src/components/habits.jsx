import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    const { onIncrease, onDecrease, onDelete } = this.props;
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
