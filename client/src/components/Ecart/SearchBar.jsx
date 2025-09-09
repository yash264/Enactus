import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className="relative max-w-2xl mx-auto">
        <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-lg"
            />
        </div>
    </div>
);

export default SearchBar;
