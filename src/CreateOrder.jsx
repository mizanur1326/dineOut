import AddSign from "./assets/svgIcons/AddSign";
import Chicken from "./assets/svgIcons/Chicken";
import Hamburger from "./assets/svgIcons/Hamburger";
import Pizza from "./assets/svgIcons/Pizza";
import Submarine from "./assets/svgIcons/Submarine";

export default function CreateOrder() {
    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                understanding of their requirements.</p>

            {/* <!-- Customer Name Input --> */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input type="text"
                    className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
            </div>

            {/* <!-- Choose Items --> */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <div className="items-container">
                    {/* <!-- Item 1 --> */}
                    <div
                        className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12   flex items-center justify-center mr-3">
                                {/* <img src="./assets/hamburger.svg" alt="Hamburger" className="w-10 h-10" /> */}
                                <Hamburger />
                            </div>
                            <div>
                                <h3 className="font-medium">Hamburger</h3>
                                <p className="text-xs text-gray-400">BDT 300</p>
                            </div>
                        </div>
                        <button
                            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                            <AddSign />
                        </button>
                    </div>

                    {/* <!-- Item 2 --> */}
                    <div
                        className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center mr-3">
                                {/* <img src="./assets/chicken.svg" alt="Chicken Nuggets" className="w-10 h-10" /> */}
                                <Chicken />
                            </div>
                            <div>
                                <h3 className="font-medium">Chicken Nuggets</h3>
                                <p className="text-xs text-gray-400">BDT 300</p>
                            </div>
                        </div>
                        <button
                            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                            <AddSign />
                        </button>
                    </div>

                    {/* <!-- Item 3 --> */}
                    <div
                        className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center mr-3">
                                {/* <img src="./assets/submarine.svg" alt="Submarine Sandwich" className="w-10 h-10" /> */}
                                <Submarine />
                            </div>
                            <div>
                                <h3 className="font-medium">Submarine Sandwich</h3>
                                <p className="text-xs text-gray-400">BDT 300</p>
                            </div>
                        </div>
                        <button
                            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                            <AddSign />
                        </button>
                    </div>

                    {/* <!-- Item 4 --> */}
                    <div
                        className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
                                {/* <img src="./assets/pizza.svg" alt="Pizza slices" className="w-10 h-10" /> */}
                                <Pizza />
                            </div>
                            <div>
                                <h3 className="font-medium">Pizza slices</h3>
                                <p className="text-xs text-gray-400">BDT 300</p>
                            </div>
                        </div>
                        <button
                            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                            <AddSign />
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Place Order Button --> */}
            <button
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Place Order (BDT 100)
            </button>
        </div>
    );
}