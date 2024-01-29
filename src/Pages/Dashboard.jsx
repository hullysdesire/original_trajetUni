// import Navbar from "../Components/Navbar";
// import Search from "../Components/Seach";
import CarteDashboard from "../Components/CarteDashboard";
import Navbar from "../Components/Navbar";







export default function Dashboard () {
    return(
        <>
    
        <Navbar/>
        <h2 className="text-4xl font-medium leading-tight text-center mt-6 mt-8 font-bold ">Dashboard</h2>
        {/* <Search/> */}
        <CarteDashboard/>
        </>
        
    )
}