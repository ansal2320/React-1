/*

        1st problem
------hello world-------

<div id="root">
    <h1> Hello World </h1>
</div>

-----React code------

const heading= React.createElement(
    "h1",
    {class:"heading"},
    "Hello World Using React"
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/ /*

    2nd problem
-----Nested Div------

<div id="parent">
    <div id="child">
        <h1>Hello I am React Ansal</h1>
    </div>
</div>

-----React code for Nested Div-----

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "Hello I am Ansal"
        )
    )
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

*/ /*

        3rd problem
-----Nested Div with siblings------

<div id="parent">
    <div id="child">
        <h1>Hello I am React Ansal</h1>
        <h2>Hello I am React Aviral</h2>
    </div>
</div>

-----React code for Nested Div-----

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"Hello I am Ansal"),
        React.createElement("h2",{},"Hello I am Aviral")
        ]
    )
)

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

*/ /*
        4rd problem
-----Nested Div with siblings of child------

<div id="parent">
    <div id="child1">
        <h1>Hello I am React Ansal</h1>
        <h2>Hello I am React React Ansal</h2>
    </div>
    <div id="child2">
        <h1>Hello I am React Aviral</h1>
        <h2>Hello I am React React Aviral</h2>
    </div>
</div>

-----React code for Nested Div-----
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Hello I am Ansal"),
        React.createElement("h2", {}, "Hello I am React Ansal")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Hello I am Aviral"),
        React.createElement("h2", {}, "Hello I am React Aviral")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
