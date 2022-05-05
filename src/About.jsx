import classes from './About.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
 
// Message Component
function Message(props)

{

    if (props.isLoggedIn)
        return <h1>Спасибо за подписку!</h1>;
    else
        return <h1>Подписатся на рассылкую</h1>;
        
}
 
// Login Component
function Login(props)
{
   return(
           <button onClick = {props.clickFunc}>
               Подписатся
           </button>
       );
}
 
// Logout Component
function Logout(props)
{
    return(
           <button onClick = {props.clickFunc}>
               Вернутся
           </button>
       );
}
 
// Parent Homepage Component
class Homepage extends React.Component{
    
 
    constructor(props)
    {
        super(props);
 
        this.state = {isLoggedIn : false};
 
        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    }
 
    ifLoginClicked()
    {
        this.setState({isLoggedIn : true});
    }
 
    ifLogoutClicked()
    {
        this.setState({isLoggedIn : false});
    }
 
    render(){
 
        return(
 
            <div>
 
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                <input type="email" placeholder="E-mail"/>
                {
                    (this.state.isLoggedIn)?(
                    <Logout clickFunc = {this.ifLogoutClicked} />
                    ) : (
                    <Login clickFunc = {this.ifLoginClicked} />
                    )
                }
 
            </div>
                 
            );
    }
}
 
ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
);

const About = () =>{
    return (
        <div className={classes.about}>
            <div className={classes.container}>      <Homepage />   </div>
        </div>
    );
}

export {About};