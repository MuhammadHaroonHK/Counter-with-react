import { useState } from 'react';

const Counter = () => {

    let [count, setCount] = useState(0);
    let [save, setSave] = useState([]);

    const saveHandle = () => {
        setSave([...save, count, ","]);
    }

    const inc = () => {
        setCount(count + 1);
    }
    const rst = () => {
        setCount(0);
    }
    const dec = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <p>{save}</p>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={inc}>Increment</button>
                <button type="button" className="btn btn-warning" onClick={rst}>Reset</button>
                <button type="button" className="btn btn-primary" onClick={saveHandle}>Save</button>
                <button type="button" className="btn btn-success" onClick={dec}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;