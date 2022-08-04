import React from "react"

export class ErrorBoundaries extends React.Component{
  constructor(){
    super()
    this.state = {
      error : false
    }
  }

  static getDerivedStateFromError(error){
    return{
      error : true
    }
  }

  render(){
    if(this.state.error){
      return <h1>Something went wrong, Please refresh the page and try again</h1>
    }
    return this.props.children
  }
}