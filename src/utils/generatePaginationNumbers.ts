
//[1,2,3,4,5, ..., 7]
export const generatePaginationNumbers = ( currentPage: number, totalPages: number) =>{

    //If page numbers is less than 7
    // we are gonna show all pages without suspense ...

    if( totalPages <= 7 ){
        return Array.from({ length: totalPages }, (_, i) => i + 1); // [1,2,3,4,5,6,7];
    }

    //If current page is between the first 3 pages
    //Show the first 3 pages, ... suspense, and last 2
    if( currentPage <= 3 ){
        return [1,2,3, '...', totalPages - 1, totalPages ]; // [1,2,3, '...', 49, 50];
    }

    //If current pages is between the last 3 pages
    // Show first 2 pages, ... last 3 pages
    if( currentPage >= totalPages -2 ){
        return [1,2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    //If current page is in middle
    //Show first page, ..suspense, current page and next
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ];

}