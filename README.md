<p>simple React application that allows the user to add and remove products from a list. The state management is done with Redux, and the code consists of three main parts: the Redux store and reducer, the Badge and Card components, and the action creators.

The Redux store is created using createStore from the redux library and the composeWithDevTools function from the redux-devtools-extension library. The store is configured to use the thunk middleware.

The Redux reducer defines how the state is updated based on the dispatched actions. In this case, there are two actions: ADD and REMOVE. The ADD action adds a new product to the state, and the REMOVE action removes a product from the state based on its name.

The Badge component displays the total number of products in the state using the connect function from react-redux to map the state to props.

The Card component is where the user can add and remove products. The component is also connected to the state using connect and uses the AddProduct and RemoveProduct action creators to dispatch actions to update the state. The useState hook is used to manage the local state of the input field.

The mapStateToProps function is used in both the Badge and Card components to map the state to props.</p>




<img src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1681042808/Screenshot_2023-04-09_174430_drmasx.png" alt="img" />