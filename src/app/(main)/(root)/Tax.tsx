
import { round } from "../../util";


export default function Tax({ Taxs }) {
    return (
        <div className="w-full p-4 bg-white rounded dark:bg-gray-800">
            {Taxs.map((item) =>
                <div key={item.title} className="border-b border-gray-200 dark:border-gray-700 mb-2">
                    <h3 className="text-xl font-semibold text-center mb-1">{item.title}</h3>
                    <p className="text-center text-3xl py-2 px-4 outline-none bg-transparent">{round(item.price)}</p>
                </div>
            )}
        </div>
    )
}
