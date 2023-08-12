export const App =() =>{

  const [products , setProducts ] = useState([])
  const addProduct = (product) => {
    setProducts([...products , product])
  }
const shreya = {
  name : "Shreya Bhargava",
  contact : "1234567890"
}

  return (
    <BrowserRouter>
    <Header user = {shreya} />
    <Routes>
      <Route path = "/" element = {<h1>Home</h1>} />
      <Route path="/counter" element = {<Counter />} />
      <Route path="/products" element= {<Products products = {products} />} />
      <Route path="/productForm" element={<ProductForm addProduct = {addProduct} />} />
    </Routes>
    <Section />
    
    <Footer />
    
    </BrowserRouter>
  )
}