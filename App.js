/*

<div id='parent'>
  <div id='child1'>
    <h1 id='heading1'></h1>
    <h2 id='heading2'></h2>
  </div>
  <div id='child2'>
    <h1 id='heading1'></h1>
    <h2 id='heading2'></h2>
  </div>
</div>

ReactElement(Object)=> HTML(Browser Understands)

*/

//const heading= React.createElement('h1',{id: 'heading'},'Hello World!');
const parent= React.createElement('div',{id: 'parent'},
[React.createElement('div',{id: 'child1'},
[React.createElement('h1',{id: 'heading1'},'Hello World Child1 h1 Nested'),
 React.createElement('h2', {id: 'heading2'},'Hello World Child1 h2 Nested')]
),
React.createElement('div',{id: 'child2'},
[React.createElement('h1',{id: 'heading1'},'Hello World Child2 h1 Nested'),
 React.createElement('h2', {id: 'heading2'},'Hello World Child2 h2 Nested')]
)
]
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);