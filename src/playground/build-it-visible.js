class VisibililtyToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggle(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible && <p>These are the deets</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibililtyToggle />, document.getElementById('app'))
