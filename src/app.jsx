import React, { Component } from "react";
import Habits from "./components/habits";
import Input from "./components/input";
import Nav from "./components/nav";
import Reset from "./components/reset";
import SimpleHabit from "./components/simpleHabit";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Running", count: 0 },
    ],
  };

  handleNavCount = () => {
    const onHabtis = this.state.habits.filter((item) => item.count > 0);
    return onHabtis.length;
  };

  handleAdd = (habit) => {
    // const habits = [...this.state.habits];
    // const newHabit = { id: habits.length + 1, name: habit, count: 0 };
    const habits = [
      ...this.state.habits,
      { id: this.state.habits.length + 1, name: habit, count: 0 },
    ];
    // habits.push(newHabit);
    this.setState({ habits });
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
    // const habits = this.state.habits.map((item) => {
    //   if (item.id === habit.id) {
    //     return { ...habit, count: habit.count + 1 };
    //   }
    //   return item;
    // });
    // this.setState({ habits });
  };

  handleDecrease = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count > 0 ? count : 0;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    this.setState({ habits });
  };

  hadleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Nav
          count={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Input onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.hadleReset} />
        {/* {<SimpleHabit />} */}
      </>
    );
  }
}

export default App;
