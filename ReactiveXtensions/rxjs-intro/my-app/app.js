const ib = <button id="incrBtn">+1</button>;
const db = <button id="decrBtn">-1</button>;
const rb = <button id="resetBtn">Reset</button>;

class NumberComponent extends React.Component {
    render() {
        this.state.counter = 1;
        return (
            <div id="nbContent">{this.state.counter}</div>
        );
    }

}