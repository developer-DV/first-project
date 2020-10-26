import React, { useEffect } from 'react'

// class ActionLink extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: ['mango'] };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     if(this.state.value.some(el => (el === event.target.value) )){
//       let e = event.target.value
//       this.setState((state, props) => {
//         debugger
//         return {value: state.value.filter(el => el !== e)}
//       })
//       //this.setState({value: [...this.state.value].filter(el => el !== event.target.value)})
//     }
//     else{
//       let e = event.target.value
//       this.setState((state, props) => ({value: [...state.value, e]}))
//       //this.setState({value: [...this.state.value, event.target.value]})
//     }
//   }

//   handleSubmit(event) {
//     alert('Ваш любимый вкус: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Выберите ваш любимый вкус:
//           <select multiple={true} value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }


class ActionLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Количество гостей:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default ActionLink