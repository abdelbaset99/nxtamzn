import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";

const categories = [ "Men", "Women", "Kids", "Accessories" ];

export default async function Search() {
    return (
       <form action="/search" method="GET" className="flex items-stretch h-10">
            <Select name="category" defaultValue="all">
                <SelectTrigger className="!h-full flex items-center w-auto dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-non">
                    <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input
                type="search"
                name="q"
                placeholder={`Search ${APP_NAME}`}
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
            />
            <button type="submit" className="bg-primary text-black rounded-s-none rounded-e-md h-full px-3 py-2 flex items-center justify-center hover:bg-primary/90 transition-colors">
                <SearchIcon className="w-6 h-6" />
            </button>
        </form>  
    )
}