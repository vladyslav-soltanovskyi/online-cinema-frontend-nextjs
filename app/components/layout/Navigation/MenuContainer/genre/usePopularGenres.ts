import { getGenresUrl } from "@/configs/api.config";
import { GenreService } from "@/services/genre/genre.service";
import { useQuery } from "react-query"
import { IMenuItem } from "../MenuItem.interface";

export const usePopularGenres = () => {
    const queryData = useQuery("popular genre menu", () => GenreService.getAll(), {
        select: ({ data }) => data.map(genre => ({
            icon: genre.icon,
            link: getGenresUrl(genre.slug),
            title: genre.name
        } as IMenuItem)).splice(0, 4)
    });

    return queryData;
}