import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="col-span-4 px-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
            <Input
            type="text"
            name="search"
            placeholder="Encontrá tu servicio"
            className="pl-10 h-12 text-base placeholder:text-muted-foreground"
          />
          </div>
        </div>
      </div>
  )
}

export default SearchBar;