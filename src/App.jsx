import { useState } from "react";

const ProductListItem = ({ productName, stock }) => {
  const [countProduct, setCountProduct] = useState(0);

  const PlusProduct = () => {
    setCountProduct(countProduct + 1);
  };

  const minusProduct = () => {
    setCountProduct(countProduct - 1);
  };

  return (
    <div>
      <h1>
        {" "}
        {productName}{" "}
        <strong style={{ border: "1px solid red", padding: "20px" }}>
          <span> {countProduct}</span>
        </strong>{" "}
        / {stock}
      </h1>

      <button onClick={PlusProduct} disabled={countProduct === stock}>
        Increment
      </button>
      <button onClick={minusProduct} disabled={countProduct === 0}>
        Decrement
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProductListItem productName={"Keyboard"} stock={2} />
      <ProductListItem productName={"Mouse"} stock={6} />
    </div>
  );
};

export default App;

// const ListItem = ({checked, title}) => (
//     <li style={{listStyleType:'none', display:'flex', alignItems:'center'}}>
//       <input type="checkbox" checked={checked}/>
//       <p>{title}</p>
//       <button style={{'marginLeft':'auto'}}>Delete</button>
//     </li>

// )

// const TaskList = [
//   {
//     id:1,
//     text:'Im deffrent',
//     checked:true
//   },
//   {
//     id:2,
//     text:'Title 2',
//     checked:false
//   },
//   {
//     id:3,
//     text:'Title 3',
//     checked:true
//   },
//   {
//     id:4,
//     text:'Title 4',
//     checked:true
//   },
//   {
//     id:5,
//     text:'Title 5',
//     checked:false
//   },
// ]

// function App() {
//   return (
//     <>
//      {TaskList.map(item=> <ListItem key={item.id} title={item.text} checked={item.checked}/>)}
//     </>
//   )
// }

// export default App

// const App = () => {
//   const [count, setCount] = useState(0)

//   const Increment = () => {
//    if (count < 5) {
//     setCount(count + 1)
//    }
//   }

//   const Deccrement = () => {
//     if (count > 0) {
//       setCount(count-1)
//     }
//   }

//   return (
//     <div>
//     <h1>আপনার গণনা : {count}</h1>
//     <button onClick={Increment} disabled={count === 5}>Increment</button>
//     <button onClick={Deccrement} disabled={count === 0}>Decrement</button>

//     {count >= 5 &&
//         <h2>
//         আপনার সীমা মেয়াদ শেষ
//         </h2>
//       }

// {count <= 0 &&
//         <h2>
//        এই সময়ে হ্রাস অনুমোদিত নয়
//         </h2>
//       }

//     </div>
//   );
// };

// export default App;
