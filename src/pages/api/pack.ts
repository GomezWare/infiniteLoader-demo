import type { APIRoute } from "astro"

import { arraySplitter } from "@utils/arraySplitter";


const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const itemsPerRequest = 3;


export const GET: APIRoute = ({ request }) => {
    const searchParams = new URL(request.url).searchParams;

    if (searchParams.size === 0 || !searchParams.get('page') || isNaN(Number(searchParams.get('page'))))
        return new Response(JSON.stringify("Error: No URL params supplied or page is not a number"), { status: 400, statusText: "Bad request" });

    // Pagination of the data
    const pages = arraySplitter(data, itemsPerRequest);

    const requestedPage = Number(searchParams.get('page'));

    try {
        if (requestedPage > pages.length) throw new Error("Out of array bonds");

        const response = {
            content: pages[requestedPage],
            requestedPage: requestedPage,
            maxPage: pages.length,
            isMaxPageReached: (requestedPage === pages.length)
        }

        return new Response(JSON.stringify(response));
    } catch (Error) {
        return new Response(JSON.stringify(`${Error}`), { status: 400, statusText: "Bad request" });
    }
}