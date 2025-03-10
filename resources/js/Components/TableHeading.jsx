import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid"
export default function TableHeading(
    { colName,
        sort_field = null,
        sort_direction = null,
        sortable = true,
        sortChanged = () => { },
        children
    }) {
    return (
        <>
            <th onClick={e => sortChanged(colName)}>
                <div className="px-3 py-3 flex flex-row items-center justify-between gap-1 cursor-pointer">
                    {children}
                    {
                        sortable &&
                        (<div>
                            <ChevronUpIcon className={
                                "w-4 " +
                                (sort_field === colName && sort_direction === "asc" ? "text-gray-800" : "")
                            } />
                            <ChevronDownIcon className={
                                "w-4 -mt-2 " +
                                (sort_field === colName && sort_direction === "desc" ? "text-gray-800" : "")
                            } />
                        </div>)
                    }
                </div>
            </th>
        </>
    )
}
