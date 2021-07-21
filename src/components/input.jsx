import React, { memo } from "react";

const Input = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const newHabit = inputRef.current.value;
    newHabit && props.onAdd(newHabit);
    formRef.current.reset();
  };
  console.log("input");
  return (
    <form ref={formRef} onSubmit={handleAdd} className="add-form">
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        placeholder="Habit"
      />
      <button className="add-button" type="submit">
        ADD
      </button>
    </form>
  );
});

export default Input;

// class Input extends PureComponent {
//   inputRef = React.createRef();
//   formRef = React.createRef();

//   handleAdd = (event) => {
//     event.preventDefault();
//     const newHabit = this.inputRef.current.value;
//     newHabit && this.props.onAdd(newHabit);
//     this.formRef.current.reset();
//   };
//   render() {
//     console.log("addInput");
//     return (
//       <form ref={this.formRef} onSubmit={this.handleAdd} className="add-form">
//         <input
//           ref={this.inputRef}
//           className="add-input"
//           type="text"
//           placeholder="Habit"
//         />
//         <button className="add-button" type="submit">
//           ADD
//         </button>
//       </form>
//     );
//   }
// }

// export default Input;
