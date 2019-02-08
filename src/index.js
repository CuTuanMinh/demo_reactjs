import React from 'react';
import ReactDOM from 'react-dom';
// import MailComponent from './MailComponent';
// import App from './App';
import './index.css';
// ReactDOM.render(<h1>hello</h1>,document.getElementById('root'));
// ReactDOM.render(
//   <App />,
//   document.getElementById('root5')
// );
// const user={
// 	name:"Ha",
// 	email:"caubeuudam@gmail.com"
// };
// const element1 = <h1>Hello world, my name is {user.name}, email {user.email}</h1>
// // const element2 = <h2>Bye</h2>
// const element3 = (
// 	<div className="hello">
// 		<h1>Are you ready</h1>
// 	</div>
// )
// var number=[1,2,3,4];
// var doubleNumbers = number.map(function(eachNumber) {
// 	return eachNumber*2+' ';
// });
// var doubleNumbers = number.map((eachNumber) => eachNumber*2+' ');


// ReactDOM.render(
//   element1,
//   document.getElementById('root')
// );
// ReactDOM.render(<h1>{doubleNumbers}</h1>,document.getElementById('root2'));
//--------------------------------------------------------------------------
// function update() {
// 	const element4 = (
// 		<div>
// 			<h1>Timer update example</h1>
// 			<h2>Current timer is: {new Date().toLocaleTimeString()}</h2>
// 		</div>
// 	);
// 	ReactDOM.render(element4,document.getElementById("root"))
// }
// setInterval(update,1000);//cu 1000 milisecond thi thuc hien function
// --------------------------------------------------------------------------


//component, props. dinh nghia component nhu 1 ham(ten component viet hoa chu chu dau, tham so component la props)
//2 cach dinh nghia component, theo func, theo class
 // function UserInfo(props) {
 // 	return (
 // 		<div>
 // 			<p>Email: {props.name}</p>
 // 			<p>Name: {props.email}</p>
 // 		</div>
 // 	);
 // }
class OtherInfo extends React.Component{
	render(){
		return(
			<div>
		 		<p>Other Information: {this.props.otherInfo}</p>
		 	</div>
		);
	}
}
class UserInfo extends React.Component{
 	render(){
 		return (
 			<div>
		 		<div>
		 			<p>name: {this.props.name} </p>
		 			<p>Name: {this.props.email}</p>
		 		</div>
		 		<OtherInfo otherInfo={this.props.otherInfo} />
		 	</div>
	 	);
 	}
}

const element = <UserInfo otherInfo="At School" name="Minh" email="Minh@gmail.com" />;

ReactDOM.render(element,document.getElementById('root'));

//----------------------------------------------
//state la 1 private property
class Counter extends React.Component{
	//constructor khoi tao component
	constructor(props){
		super(props); //goi constructor cua lop cha
		this.state={seconds: 0}; //this.state.seconds=0
	}

	incrementCounter(){
		//thay doi gia tri state
		// this.state = this.state + 1; only trong ham constructor moi dc gan nhu vay
		this.setState(
			//day la 1 setter
			(prevState, props) => ({seconds: prevState.seconds + 1})
		);
 	}

	componentDidMount(){
		//khi component vua dc tao ra thi ham nay dc goi
		this.timeID = setInterval(() => this.incrementCounter(),1000);
	}

	componentWillUnmount(){
		//khi component vua dc giai phong thi ham nay dc goi
		clearInterval(this.timeID);
	}

	render(){
		return (
			<div>
				<h1>This is a counting machine</h1>
				<h2>Seconds: {this.state.seconds} s</h2>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('root2'));

//--------------------------------------------------------
//Bat su kien

class ToggleButton extends React.Component{
	constructor(props){
		super(props);
		this.state = {isOn: true};
		this.buttonClick = this.buttonClick.bind(this);
	}

	buttonClick(){
		this.setState((prevState) => ({
			isOn: !prevState.isOn
		}));
	}

	render(){
		return (
			<button className="ToggleButton" onClick={this.buttonClick}>
				This is toggle buttton
				{this.state.isOn ? " ON":" OFF"}
			</button>
		);
	}
}

ReactDOM.render(<ToggleButton />,document.getElementById('root3'));

// --------------------------------------------------------------
//render co dieu kien cac component

class LoginComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {isLoggedIn: true};
		this.handleLogin=this.handleLogin.bind(this);
		this.handleLogout=this.handleLogout.bind(this);
	}

	handleLogout(){
		this.setState({isLoggedIn: false});
	}

	handleLogin(){
		this.setState({isLoggedIn: true});
	}

	render(){
		let myButton = null; //co the thay doi gia tri nhung k dc dinh nghia lai bien
		let title = null;
		if (this.state.isLoggedIn) {
			myButton = <button onClick={this.handleLogout}>Logout</button>
		}
		else {
			myButton = <button onClick={this.handleLogin}>Login</button>
		}

		title = this.state.isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>
		return (
			<div>
				{title}
				{myButton}
			</div>
		)
	}
}

ReactDOM.render(<LoginComponent/>,document.getElementById('root4'));
// ReactDOM.render(<MailComponent />,document.getElementById('root5'));

//------------------------------------------
//list, keys     render nhieu component 1 luc

function ListItem(props) {
	return <li>{props.value}</li>
}

class AnimalsComponent extends React.Component {
	constructor(props){
		super(props);
		this.listItems = props.animals.map(
			(animal, index) => <ListItem key="{animal.id}" value={index.toString()+"-"+animal.title}/>
		);
	}

	render(){
		return (
			<ul>
				{this.listItems}
			</ul>
		);
	}
}
const animals = [
	{
		id: "xy000",
		name: "lion",
		title: "This is a lion"
	},
	{
		id: "xy001",
		name: "tiger",
		title: "This is a tiger"
	},
];
// const animals = ["lion","tiger","dog","elephant","cat"];
ReactDOM.render(<AnimalsComponent animals={animals}/> ,document.getElementById('root6'));

//-------------------------------------------------------
//Form trong React + handle nhieu the input

class FormComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// textData: "",
			yourName: "",
			numberOfFriends: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		// this.setState({textData: event.target.value});
		//event.target tro den noi goi ham handleChange(tuc la the input)
		//event.target.value lay gia tri nhap vao input
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event){
		// alert("You submited text data: " + this.state.textData);
		// event.preventDefault(); giu nguyen input vua nhap
		alert("You submitted data: " + this.state.yourName + ", " + this.state.numberOfFriends);
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Your Name:
					<input type="text"
						name="yourName"
						// value={this.state.textData}
						onChange={this.handleChange}/>
				</label>
				<br/>
				<label>
					Number of Friend:
					<input type="number"
						name="numberOfFriends"
						// value={this.state.numberOfFriends}
						onChange={this.handleChange}/>
				</label>
				<br/>
				<input type="submit" value="Submit your name"/>
			</form>
		)
	}
}

ReactDOM.render(<FormComponent/> ,document.getElementById('root7'));
// -----------------------------------------------------------

// Composition and Inheritance

class PaneComponent extends React.Component {
	constructor(props) {
		super(props);

	}

	render(){
		return(
			<div>
				{this.props.up}
				{this.props.down}
				{this.props.children}
			</div>
		);
	}
}

function UpComponent(props) {
	return(
		<div className="red">
			This is red
		</div>
	);
}

function DownComponent(props) {
	return(
		<div className="blue">
			This is blue
		</div>
	);
}

ReactDOM.render(<PaneComponent
								up={<UpComponent/>}
								down={<DownComponent/>}>
								<p>This is the chidren part</p>
								// ngam hieu day la props.chidren -> goi la Composition
								</PaneComponent>,
								document.getElementById('root8'));
